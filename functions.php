<?php 

function load_assets(){
    wp_enqueue_style("font","//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i", array(), "1.0", "all");
    wp_enqueue_style( "bootstrapcss", '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), "1.1", 'all');
    wp_enqueue_style( "maincss", get_theme_file_uri() . '/build/index.css', array(), '1.0.2', 'all' );
    wp_enqueue_style( "mainstylecss", get_theme_file_uri() . '/build/style-index.css', array(), '1.0.3', 'all' );

    wp_enqueue_script( "university_scripts", get_theme_file_uri() . '/build/index.js', array('jquery'), '1.02', true );
}
add_action("wp_enqueue_scripts","load_assets");