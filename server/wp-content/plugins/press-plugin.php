<?php

/**
 * @package Press plugin
 * @version 1.0.0
 */
/*
Plugin Name: Press plugin
Plugin URI: https://lamahichamberofcommerce.org.np
Description: Plugin for managing press releases on Lamahi Chamber of Commerce website
Author: Dipendra Bhatta
Version: 1.0.0
Author URI: https://lamahichamberofcommerce.org.np
*/

function generate_press_type() {
    $labels = array(
        'name'                  => 'Press-Releases',
        'singular_name'         => 'Press-Release',
    );
    $args = array(
        'label'                 => 'Press-Release',
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'custom-fields'),
        'taxonomies'            => array('category', 'post_tag'),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'press-releases',
    );
    register_post_type('press_type', $args);
}

add_action('init', 'generate_press_type', 0);

// Add a meta box for press release details
function add_press_details_meta_box() {
    add_meta_box(
        'press_details_meta_box',
        'Press Release Details',
        'render_press_details_meta_box',
        'press_type',
        'normal',
        'high'
    );
}

add_action('add_meta_boxes', 'add_press_details_meta_box');

// Render the content of the press release details meta box
function render_press_details_meta_box($post) {
    // Get the current press release details
    $press_img = get_post_meta($post->ID, '_press_img', true);
    $press_content = get_post_meta($post->ID, '_press_content', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'press_details_nonce');

    // Display the input fields for press release details
    ?>
    <label for="press_img">Press Release Image URL:</label>
    <input type="text" name="press_img" id="press_img" class="widefat" value="<?php echo esc_url($press_img); ?>" />
    <p>
        <input type="button" id="upload_press_image_button" class="button" value="Upload Image" />
    </p>
    <script>
        jQuery(document).ready(function($){
            var custom_uploader;

            $('#upload_press_image_button').click(function(e) {
                e.preventDefault();

                //If the uploader object has already been created, reopen the dialog
                if (custom_uploader) {
                    custom_uploader.open();
                    return;
                }

                //Extend the wp.media object
                custom_uploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Image',
                    button: {
                        text: 'Choose Image'
                    },
                    multiple: false
                });

                //When a file is selected, grab the URL and set it as the text field's value
                custom_uploader.on('select', function() {
                    var attachment = custom_uploader.state().get('selection').first().toJSON();
                    $('#press_img').val(attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <label for="press_content">Press Release Content:</label>
    <textarea name="press_content" id="press_content" class="widefat" rows="5"><?php echo esc_textarea($press_content); ?></textarea>
    <?php
}

// Save each press release data field when saving the press release
function save_press_details_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['press_details_nonce']) || !wp_verify_nonce($_POST['press_details_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('press_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save each press release data field individually
        update_post_meta($post_id, '_press_img', esc_url($_POST['press_img']));
        update_post_meta($post_id, '_press_content', sanitize_textarea_field($_POST['press_content']));
    }
}

// Ensure custom fields are exposed in REST API
function expose_custom_fields_in_rest() {
    register_rest_field('press_type', '_press_img', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('press_type', '_press_content', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));
}

function get_custom_field($object, $field_name, $request) {
    return get_post_meta($object['id'], $field_name, true);
}

function update_custom_field($value, $object, $field_name) {
    return update_post_meta($object->ID, $field_name, $value);
}

add_action('init', 'expose_custom_fields_in_rest');
add_action('save_post', 'save_press_details_meta');
add_action('rest_api_init', 'expose_custom_fields_in_rest');