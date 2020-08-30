<?php 
  $root = get_template_directory_uri();
;?>


<section class="pre-footer">

  <?php 
    if(!is_page('about-me')) { ?>
    <a class="pre-footer__item" href="<?php echo site_url('/about-me');?>">
      <div class="pre-footer__content">
        <div class="hr"></div>
        <p>About me</p>
      </div>

      <div class="section-bg has-overlay">
        <div class="section-bg__el" data-bg="http://kennykrosky:8888/wp-content/uploads/2020/08/meandthegirls-2.jpg"></div>
      </div>
    </a>
   <?php } else { ;?>
    <a class="pre-footer__item" href="<?php echo site_url('/work');?>">
      <div class="pre-footer__content">
        <div class="hr"></div>
        <p>Work</p>
      </div>
      <div class="section-bg">
        <div class="section-bg__el" data-bg="<?php echo get_the_post_thumbnail_url('510');?>"></div>
      </div>
    </a>
   <?php } 
    if(!is_page('articles')) {
    $article = new WP_Query(array('posts_per_page' => 1));
    while($article->have_posts()) : $article->the_post();
  ?>
  <a class="pre-footer__item" href="<?php echo site_url('/articles');?>">
    <div class="pre-footer__content">
      <div class="hr"></div>
      <p>Blogs</p>
    </div>
    <div class="section-bg has-overlay">
      <div class="section-bg__el" data-bg="<?php echo get_the_post_thumbnail_url();?>"></div>
    </div>
  </a>

  <?php 
    endwhile;
    wp_reset_postdata();
    } else { ?>

    <a class="pre-footer__item" href="<?php echo site_url('/work');?>">
      <div class="pre-footer__content">
        <div class="hr"></div>
        <p>Work</p>
      </div>
      <div class="section-bg">
        <div class="section-bg__el" data-bg="<?php echo get_the_post_thumbnail_url('510');?>"></div>
      </div>
    </a>

    <?php } ;?>
</section>