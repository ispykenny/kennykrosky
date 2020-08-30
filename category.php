<?php 
  $root = get_template_directory_uri();
  get_header();
  $categories = get_queried_object();
;?>
<main>
  <section>
    <div class="inner inner-narrow">
      <h1 class="page-title">Articles in <?php echo $categories->cat_name;?></h1>
    </div>
  </section>
  <?php get_template_part('partials/article-filter');?>
  <section>
    <div class="inner inner-narrow articles-list">
      <?php 
        while(have_posts()) : the_post();
      ;?>
    <?php get_template_part('partials/article-listing');?>
    <?php endwhile; wp_reset_postdata();?>
   </div>
  </section>
</main>

<?php get_footer();?>