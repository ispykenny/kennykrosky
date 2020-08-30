<?php 
  $root = get_template_directory_uri();
  get_header();
  while(have_posts()) : the_post();
;?>
<main>
  <section class="single-blog-hero center">
    <div class="inner inner-narrow">
      <div class="single-blog-hero__content">
        <div class="single-blog-hero__an">
          <h1><?php the_title();?></h1>
        </div>
        <div class="single-blog-hero__an">
          <div class="cta-parent">
            <?php $action_link = get_field('action-link');?>
            <a class="cta on-dark" target="<?php echo $action_link['target'] ;?>" href="<?php echo $action_link['url'] ;?>"><?php echo $action_link['title'] ;?></a>
          </div>
        </div>
      </div>
    </div>

    <div class="section-bg">
      <div class="section-bg__el" data-bg="<?php echo get_the_post_thumbnail_url();?>">
      </div>
    </div>
  </section>

  <?php if(get_field('has_icon')) :;?>
    <section>
      <div class="inner">
        <div class="project-icon">
          <img src="<?php the_field('project_icon');?>" alt="">
        </div>
      </div>
    </section>
  <?php endif;?>

  <section class="default">
    <div class="inner inner-narrow">
      <div class="content-area">
        <div class="two-col-single">
          <div class="two-col-single__item">
            <img src="<?php the_field('preview-image');?>" alt="">
          </div>

          <div class="two-col-single__item">
            <?php the_content();?>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<?php 
  endwhile; wp_reset_postdata();
  get_footer();
;?>