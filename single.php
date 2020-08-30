<?php 
  $root = get_template_directory_uri(); 
  get_header();
  while(have_posts()) : the_post();
?>

<main>
  <section class="single-blog-hero">
    <div class="inner inner-narrow">
      <div class="single-blog-hero__content">
        <div class="single-blog-hero__an">
          <h4>Posted on: <?php echo get_the_date();?></h4>
        </div>
        <div class="single-blog-hero__an">
          <h1><?php the_title();?></h1>
        </div>
      </div>
    </div>

    <div class="section-bg has-overlay">
      <div class="section-bg__el" data-bg="<?php echo get_the_post_thumbnail_url();?>">
      </div>
    </div>
  </section>

  <section>
    <div class="inner inner-narrow">
      <div class="content-area">
        <?php the_content();?>
      </div>
    </div>
  </section>
</main>

<?php endwhile; wp_reset_postdata(); ?>
<?php get_footer(); ?>