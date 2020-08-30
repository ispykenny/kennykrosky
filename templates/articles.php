<?php  /* Template Name: Articles */
  $root = get_template_directory_uri();
  get_header();
;?>

<main>
  <section>
    <div class="inner inner-narrow">
      <h1 class="page-title">Articles</h1>
    </div>
  </section>
  <?php get_template_part('partials/article-filter');?>
  <section>
    <div class="inner inner-narrow articles-list">
      <?php 
        $thePost = new WP_Query(array(
          "post_type" => "post",
          "posts_per_page" => -1
        ));
        while($thePost->have_posts()) : $thePost->the_post();
      ;?>
    <?php get_template_part('partials/article-listing');?>
    <?php endwhile; wp_reset_postdata();?>
   </div>
  </section>
</main>

<?php get_footer() ;?>
