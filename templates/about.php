<?php /* Template name: About */
  $root = get_template_directory_uri();
  get_header();
;?>

<main>
  <section>
    <div class="inner inner-narrow">
      <div class="me-section">
        <div class="me-section__item">
          <div class="me-section__img">
            <div>
              <img src="<?php echo get_the_post_thumbnail_url($post->ID);?>" alt="">
            </div>
          </div>
          <div class="circle"></div>
        </div>
        <div class="me-section__item">
          <div class="me-section__item-inner">
            <h1><?php the_title();?></h1>
            <?php the_field('added_content');?>
          </div>
        </div>
      </div>

      <div class="added-content">
        <?php the_content();?>
      </div>
    </div>
  </section>

  <?php get_template_part('partials/personal-employment');?>
  
</main>


<?php 
  get_footer();
;?>