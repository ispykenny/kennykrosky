<section class="pe">
  
    <div class="pe__nav">
      <div class="inner">
        <ul>
          <li class="active" data-id="0">Personal</li>
          <li data-id="1">Skills</li>
          <li data-id="2">Employment</li>
        </ul>
      </div>
    </div>
    <div class="pe__containers">
     <div class="inner">
      <div class="pe__containers-item personal active">
          <div class="pe__containers-item--inner">
            <div class="section-intro center padding-bottom">
              <h3 class="section-title">
                <?php the_field('title', 'options');?>
              </h3>
              <?php the_field('about_me_copy', 'options');?>
            </div>

            <div class="instagram-feed">
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
              <div class="instagram-feed__item">
                <div class="instagram-feed__item-image"></div>
              </div>
            </div>
          </div>
        </div>
        <?php get_template_part('partials/skills');?>
        <?php get_template_part('partials/work-history');?>
     </div>
  </div>
</section>