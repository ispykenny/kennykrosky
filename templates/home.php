<?php /* Template Name: Home Template */

get_header();?>
<main>

  <section class="hdr-home">
    <div class="inner">
      <div class="hdr-content">
        <div class="hdr-content__inner">
          <h1><?php the_field('home_hero_title');?></h1>
          <?php the_field('home_hero_copy');?>
        </div>
      </div>

      <div class="hdr-follow-links">
        <ul>
          <?php get_template_part('partials/follow');?>
        </ul>
      </div>
    </div>

    <div class="sleeves">
      <div class="sleeves__item"></div>
      <div class="sleeves__item"></div>
      <div class="sleeves__item"></div>
      <div class="sleeves__item"></div>
      <div class="sleeves__item"></div>
    </div>

    <div class="home-hero-bg section-bg">
      <div class="section-bg__el" data-bg="<?php the_field('home_hero_background');?>"></div>
    </div>
  </section>


  <?php get_template_part('partials/work');?>

</main>
<?php get_footer();?>