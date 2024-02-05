<?php

/**
 * @package Committee plugin
 * @version 1.0.0
 */
/*
Plugin Name: Committee plugin
Plugin URI: https://lamahichamberofcommerce.org.np
Description: Plugin for managing committees on Lamahi Chamber of Commerce website
Author: Dipendra Bhatta
Version: 1.0.0
Author URI: https://lamahichamberofcommerce.org.np
*/

function generate_committee_type() {
    $labels = array(
        'name'                  => 'Committees',
        'singular_name'         => 'Committee',
    );
    $args = array(
        'label'                 => 'Committee',
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'custom-fields'),
        'taxonomies'            => array('category', 'post_tag'),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'committees',
    );
    register_post_type('committee_type', $args);
}

add_action('init', 'generate_committee_type', 0);

// Add a meta box for committee details
function add_committee_details_meta_box() {
    add_meta_box(
        'committee_details_meta_box',
        'Committee Details',
        'render_committee_details_meta_box',
        'committee_type',
        'normal',
        'high'
    );
}

add_action('add_meta_boxes', 'add_committee_details_meta_box');

// Render the content of the committee details meta box
function render_committee_details_meta_box($post) {
    // Get the current committee details
    $committee_img = get_post_meta($post->ID, '_committee_img', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'committee_details_nonce');

    // Display the input field for committee details
    ?>
    <label for="committee_img">Committee Image URL:</label>
    <input type="text" name="committee_img" id="committee_img" class="widefat" value="<?php echo esc_url($committee_img); ?>" />
    <p>
        <input type="button" id="upload_committee_image_button" class="button" value="Upload Image" />
    </p>
    <script>
        jQuery(document).ready(function($){
            var custom_uploader;

            $('#upload_committee_image_button').click(function(e) {
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
                    $('#committee_img').val(attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <?php
}

// Save the committee image URL when saving the committee
function save_committee_details_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['committee_details_nonce']) || !wp_verify_nonce($_POST['committee_details_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('committee_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save the committee image URL
        update_post_meta($post_id, '_committee_img', esc_url($_POST['committee_img']));
    }
}

// // Ensure custom field is exposed in REST API
// function expose_custom_field_in_rest() {
//     register_rest_field('committee_type', '_committee_img', array(
//         'get_callback'    => 'get_custom_field',
//         'update_callback' => 'update_custom_field',
//         'schema'          => null,
//     ));
// }

// function get_custom_field($object, $field_name, $request) {
//     return get_post_meta($object['id'], $field_name, true);
// }

// function update_custom_field($value, $object, $field_name) {
//     return update_post_meta($object->ID, $field_name, $value);
// }

// add_action('init', 'expose_custom_field_in_rest');
add_action('save_post', 'save_committee_details_meta');
// add_action('rest_api_init', 'expose_custom_field_in_rest');
