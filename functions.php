<?php 


	if (function_exists('acf_add_options_page')) {
		acf_add_options_page();
		acf_set_options_page_title('Site Global Settings');
		acf_add_options_sub_page('Social Links');
		acf_add_options_sub_page('Skills');
		acf_add_options_sub_page('work-history');
		acf_add_options_sub_page('about me');
		acf_add_options_sub_page('projects');
		acf_add_options_sub_page('Pre-footer');
	}


	// custom post types
	add_action('init', 'products');
	function products() {
		$caseStudy = array(
				'name' => 'products',
				'singular_name' => 'products',
				'add_new' => 'New products',
				'add_new_item' => 'Add products',
				'edit_item' => 'Edit products',
				'new_item' => 'New products',
				'view_item' => 'View products',
				'search_items' => 'Search products',
				'not_found' => 'Found No products',
				'not_found_in_trash' => 'Nothing in Trash',
				'parent_item_colon' => ''
		);
		$caseStudyArg = array(
				'labels' => $caseStudy,
				'public' => true,
				'publicly_queryable' => true,
				'show_ui' => true,
				'query_var' => true,
				'menu_icon' => 'dashicons-layout',
				'rewrite' => true,
				'capability_type' => 'post',
				'hierarchical' => true,
				'taxonomies'  => array( 'custom_taxonomies' ),
				'menu_position' => 4,
				'supports' => array('title','editor','thumbnail', 'custom-fields')
			);
		register_post_type( 'products' , $caseStudyArg );

	 }
	 

	 // custom post types
	add_action('init', 'designs');
	function designs() {
		$design = array(
				'name' => 'designs',
				'singular_name' => 'designs',
				'add_new' => 'New designs',
				'add_new_item' => 'Add designs',
				'edit_item' => 'Edit designs',
				'new_item' => 'New designs',
				'view_item' => 'View designs',
				'search_items' => 'Search designs',
				'not_found' => 'Found No designs',
				'not_found_in_trash' => 'Nothing in Trash',
				'parent_item_colon' => ''
		);
		$designs = array(
				'labels' => $design,
				'public' => true,
				'publicly_queryable' => true,
				'show_ui' => true,
				'query_var' => true,
				'menu_icon' => 'dashicons-layout',
				'rewrite' => true,
				'capability_type' => 'post',
				'hierarchical' => true,
				'taxonomies'  => array( 'custom_taxonomies' ),
				'menu_position' => 4,
				'supports' => array('title','editor','thumbnail', 'custom-fields')
			);
		register_post_type( 'designs' , $designs );

		}


		// custom post types
	add_action('init', 'websites');
	function websites() {
		$website = array(
				'name' => 'websites',
				'singular_name' => 'websites',
				'add_new' => 'New websites',
				'add_new_item' => 'Add websites',
				'edit_item' => 'Edit websites',
				'new_item' => 'New websites',
				'view_item' => 'View websites',
				'search_items' => 'Search websites',
				'not_found' => 'Found No websites',
				'not_found_in_trash' => 'Nothing in Trash',
				'parent_item_colon' => ''
		);
		$websites = array(
				'labels' => $website,
				'public' => true,
				'publicly_queryable' => true,
				'show_ui' => true,
				'query_var' => true,
				'menu_icon' => 'dashicons-layout',
				'rewrite' => true,
				'capability_type' => 'post',
				'hierarchical' => true,
				'taxonomies'  => array( 'custom_taxonomies' ),
				'menu_position' => 4,
				'supports' => array('title','editor','thumbnail', 'custom-fields')
			);
		register_post_type( 'websites' , $websites );

		}


	// changes permissions for options page, allows lower-level user access to options pages
	if( function_exists('acf_set_options_page_capability') ) {
	    acf_set_options_page_capability( 'manage_options' );
	}




	// changes permissions for options page, allows lower-level user access to options pages
	if( function_exists('acf_set_options_page_capability') ) {
	    acf_set_options_page_capability( 'manage_options' );
	}


	add_theme_support( 'post-thumbnails' ); 

	// admin footer message, shown in bottom left on all screens
	function add_admin_footer() {
	   echo '<span id="footer-thankyou">Wordpress Theme by <a href="http://url.com">Name Here</a>.</span>';
	}
	add_filter('admin_footer_text', 'add_admin_footer');

	function my_deregister_scripts(){
		wp_deregister_script( 'wp-embed' );
	}
	add_action( 'wp_footer', 'my_deregister_scripts' );

	wp_deregister_script('jquery');

	
	add_image_size('preview', 1920, 1080, array('center', 'center'));

?>