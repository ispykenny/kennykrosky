<?php  /* Template Name: Connect */
  $root = get_template_directory_uri();
  get_header();
;?>

<main>
  <section>
    <div class="inner inner-narrow">
      <?php the_content();?>

      <div class="social-connect">
        <ul>
          <?php get_template_part('partials/follow');?>
        </ul>
      </div>

      <div class="connect-form">
        <h3>Or we can keep it old school:</h3>
        <div class="form">
          <?php echo do_shortcode('[contact-form-7 id="406" title="Contact form"]');?>
        </div>
      </div>


    </div>
  </section>
</main>


<?php 
  get_footer();
;?>