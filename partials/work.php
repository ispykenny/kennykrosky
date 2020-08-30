<section class="default">
  <div class="inner">
    <div class="section-intro center">
      <h2 class="section-title">
        <?php the_field('project_title', 'options');?>
      </h2>
      <?php the_field('project_copy', 'options');?>
    </div>
    <div class="work-nav">
      <ul>
        <li class="active" data-id="0">Products</li>
        <li data-id="1">Websites (Dev)</li>
        <li data-id="2">Designs</li>
        <span class="indicator"></span>
      </ul>
    </div>


    <div class="work-containers">

      <div class="work-containers__item active">
        <div class="two-col-grid">
          <?php 
            $products = new WP_Query(array(
              "post_type" => "products"
            ));
            while($products->have_posts()) :
              $products->the_post();
          ;?>
            <a class="two-col-grid__item" href="<?php the_permalink(); ?>">
              <div>
                <img src="<?php the_field('thumbnail');?>" alt="">
              </div>
              <div class="card-details">
                <h4><?php the_field('thumbnail_details');?></h4>
                <span></span>
              </div>
            </a>
          <?php 
            endwhile;
            wp_reset_postdata();
          ;?>
        </div>
      </div>
      <div class="work-containers__item">
        <div class="two-col-grid">
        <?php 
            $products = new WP_Query(array(
              "post_type" => "websites"
            ));
            while($products->have_posts()) :
              $products->the_post();
          ;?>
          <?php $link = get_field('has_internal_links') ? get_the_permalink() : get_field('project_url') ;?>
            <a class="two-col-grid__item" target="_blank" href="<?php echo $link; ?>" rel="noopener">
              <div>
                <img src="<?php the_field('thumbnail');?>" alt="">
              </div>
              <div class="card-details">
                <h4><?php the_field('thumbnail_details');?></h4>
                <span></span>
              </div>
            </a>
          <?php 
            endwhile;
            wp_reset_postdata();
          ;?>
        </div>
      </div>
      <div class="work-containers__item">

        <div class="two-col-grid">
        <?php 
            $products = new WP_Query(array(
              "post_type" => "designs"
            ));
            while($products->have_posts()) :
              $products->the_post();
          ;?>
            <?php $link = get_field('has_internal_links') ? get_the_permalink() : get_field('project_url') ;?>
              <a class="two-col-grid__item" href="<?php echo $link; ?>" target="_blank" rel="noopener">
              <div>
                <img src="<?php the_field('thumbnail');?>" alt="">
              </div>
              <div class="card-details">
                <h4><?php the_field('thumbnail_details');?></h4>
                <span></span>
              </div>
            </a>
          <?php 
            endwhile;
            wp_reset_postdata();
          ;?>
        </div>
      </div>
    </div>
  </div>
</section>