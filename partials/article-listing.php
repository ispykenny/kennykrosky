
  <div class="articles-list__item">
    <div class="articles-list__thumbnail">
      <?php 
        $img = get_the_post_thumbnail_url($post->ID, $size ='preview');
        var_dump($img);
      ;?>
      <img src="<?php echo $img;?>" alt="">
    </div>
    <div class="articles-list__item-inner">
      <div class="articles-list__category">
        <?php $categories = get_the_category();?>
        <?php foreach($categories as $theCat) { ;?>
          <a class="category-type-<?php echo $theCat->slug;?>" href="<?php echo get_category_link($theCat->term_id);?>"><?php echo $theCat->name;?></a>
        <?php } ;?>
      </div>
      <h3 class="articles-list__title">
        <?php the_title();?>
      </h3>
      <div class="articles-list__pub-date">
        Posted on: <?php echo get_the_date();?>
      </div>
      <div class="articles-list__excerpt">
        <p><?php echo wp_trim_words(get_the_content() , 60, '...');?></p>
      </div>

      <div class="articles-list__link">
        <a  href="<?php the_permalink();?>" class="cta">View Article</a>
      </div>
    </div>
  </div>
  