<?php /* Template name: Work */ 
  $root = get_template_directory_uri();
  get_header();
;?>

<main>
  <?php get_template_part('partials/work') ;?>
  <?php get_template_part('partials/personal-employment');?>
</main>

<?php 
  get_footer();
;?>