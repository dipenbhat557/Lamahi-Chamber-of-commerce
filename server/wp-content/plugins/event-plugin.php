<?php

/**
 * @package Event plugin
 * @version 1.0.0
 */
/*
Plugin Name: Event plugin
Plugin URI: https://lamahichamberofcommerce.org.np
Description: Plugin for handling events on Lamahi Chamber of Commerce website
Author: Dipendra Bhatta
Version: 1.0.0
Author URI: https://lamahichamberofcommerce.org.np
*/

function generate_event_type() {
    $labels = array(
        'name'                  => 'Events',
        'singular_name'         => 'Event',
    );
    $args = array(
        'label'                 => 'Event',
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'custom-fields'),
        'taxonomies'            => array('category', 'post_tag'),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'post', // Change 'page' to 'post'
        'show_in_rest'          => true,
        'rest_base'             => 'events',
    );
    register_post_type('event_type', $args);
}

add_action('init', 'generate_event_type', 0);

// Add a meta box for event details
function add_event_details_meta_box() {
    add_meta_box(
        'event_details_meta_box',
        'Event Details',
        'render_event_details_meta_box',
        'event_type',
        'normal',
        'high'
    );
}

add_action('add_meta_boxes', 'add_event_details_meta_box');

// Render the content of the event details meta box
function render_event_details_meta_box($post) {
    // Get the current event details
    $event_img = get_post_meta($post->ID, '_event_img', true);
    $event_content = get_post_meta($post->ID, '_event_content', true);
    $event_stat = get_post_meta($post->ID, '_event_stat', true);
    $event_date = get_post_meta($post->ID, '_event_date', true);
    $event_name = get_post_meta($post->ID, '_event_name', true);
    $event_time = get_post_meta($post->ID, '_event_time', true);
    $event_venue = get_post_meta($post->ID, '_event_venue', true);
    $event_agenda = get_post_meta($post->ID, '_event_agenda', true);
    $event_speaker = get_post_meta($post->ID, '_event_speaker', true);
    $event_sponsers = get_post_meta($post->ID, '_event_sponsers', true);
    $event_contact = get_post_meta($post->ID, '_event_contact', true);
    $event_food = get_post_meta($post->ID, '_event_food', true);
    $event_audience = get_post_meta($post->ID, '_event_audience', true);
    $event_cancellation = get_post_meta($post->ID, '_event_cancellation', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'event_details_nonce');

    // Display the input fields for event details
    ?>
    <label for="event_img">Event Image URL:</label>
    <input type="text" name="event_img" id="event_img" class="widefat" value="<?php echo esc_url($event_img); ?>" />
<p>
        <input type="button" id="upload_event_image_button" class="button" value="Upload Image" />
    </p>
    <script>
        jQuery(document).ready(function($){
            var custom_uploader;

            $('#upload_event_image_button').click(function(e) {
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
                    $('#event_img').val(attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <label for="event_content">Event Content:</label>
    <textarea name="event_content" id="event_content" class="widefat" rows="5"><?php echo esc_textarea($event_content); ?></textarea>

    <label for="event_stat">Event Status:</label>
    <input type="text" name="event_stat" id="event_stat" class="widefat" value="<?php echo esc_attr($event_stat); ?>" />

    <label for="event_date">Event Date:</label>
    <input type="text" name="event_date" id="event_date" class="widefat" value="<?php echo esc_attr($event_date); ?>" />

    <label for="event_name">Event Name:</label>
    <input type="text" name="event_name" id="event_name" class="widefat" value="<?php echo esc_attr($event_name); ?>" />

    <label for="event_time">Event Time:</label>
    <input type="text" name="event_time" id="event_time" class="widefat" value="<?php echo esc_attr($event_time); ?>" />

    <label for="event_venue">Event Venue:</label>
    <input type="text" name="event_venue" id="event_venue" class="widefat" value="<?php echo esc_attr($event_venue); ?>" />

    <label for="event_agenda">Event Agenda:</label>
    <input type="text" name="event_agenda" id="event_agenda" class="widefat" value="<?php echo esc_attr($event_agenda); ?>" />

    <label for="event_speaker">Event Speaker:</label>
    <input type="text" name="event_speaker" id="event_speaker" class="widefat" value="<?php echo esc_attr($event_speaker); ?>" />

    <label for="event_sponsers">Event Sponsors:</label>
    <input type="text" name="event_sponsers" id="event_sponsers" class="widefat" value="<?php echo esc_attr($event_sponsers); ?>" />

    <label for="event_contact">Event Contact:</label>
    <input type="text" name="event_contact" id="event_contact" class="widefat" value="<?php echo esc_attr($event_contact); ?>" />

    <label for="event_food">Event Food:</label>
    <input type="text" name="event_food" id="event_food" class="widefat" value="<?php echo esc_attr($event_food); ?>" />

    <label for="event_audience">Event Audience:</label>
    <input type="text" name="event_audience" id="event_audience" class="widefat" value="<?php echo esc_attr($event_audience); ?>" />

    <label for="event_cancellation">Event Cancellation Policy:</label>
    <input type="text" name="event_cancellation" id="event_cancellation" class="widefat" value="<?php echo esc_attr($event_cancellation); ?>" />
    <?php
}

// Save each event data field when saving the event
function save_event_details_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['event_details_nonce']) || !wp_verify_nonce($_POST['event_details_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('event_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save each event data field individually
        update_post_meta($post_id, '_event_img', esc_url($_POST['event_img']));
        update_post_meta($post_id, '_event_content', sanitize_textarea_field($_POST['event_content']));
        update_post_meta($post_id, '_event_stat', sanitize_text_field($_POST['event_stat']));
        update_post_meta($post_id, '_event_date', sanitize_text_field($_POST['event_date']));
        update_post_meta($post_id, '_event_name', sanitize_text_field($_POST['event_name']));
        update_post_meta($post_id, '_event_time', sanitize_text_field($_POST['event_time']));
        update_post_meta($post_id, '_event_venue', sanitize_text_field($_POST['event_venue']));
        update_post_meta($post_id, '_event_agenda', sanitize_text_field($_POST['event_agenda']));
        update_post_meta($post_id, '_event_speaker', sanitize_text_field($_POST['event_speaker']));
        update_post_meta($post_id, '_event_sponsers', sanitize_text_field($_POST['event_sponsers']));
        update_post_meta($post_id, '_event_contact', sanitize_text_field($_POST['event_contact']));
        update_post_meta($post_id, '_event_food', sanitize_text_field($_POST['event_food']));
        update_post_meta($post_id, '_event_audience', sanitize_text_field($_POST['event_audience']));
        update_post_meta($post_id, '_event_cancellation', sanitize_text_field($_POST['event_cancellation']));
    }
}

// Ensure all custom fields are exposed in REST API
function expose_custom_fields_in_rest() {
    register_rest_field('event_type', '_event_img', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_content', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_stat', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_date', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_name', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_time', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_venue', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_agenda', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_speaker', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_sponsers', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_contact', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_food', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_audience', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_cancellation', array(
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
add_action('save_post', 'save_event_details_meta');
add_action('rest_api_init', 'expose_custom_fields_in_rest');

