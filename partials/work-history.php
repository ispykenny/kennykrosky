<div class="pe__containers-item work">
  <div class="pe__containers-item--inner">
    <div class="section-intro center padding-bottom">
      <h3 class="section-title"><?php the_field('work_history_title', 'options');?></h3>
      <?php the_field('work_history_intro', 'options');?>
    </div>
    <div class="mini-hr"></div>
    <div class="work-history">
      <?php
        $work_history = get_field('work_history', 'options');
        foreach ($work_history as $work):
      ;?>
        <div class="work-history__item">
          <div class="work-history__item-inner">
            <div class="work-history__title">
              <h3><?php echo $work['company_name']; ?></h3>
              <p class="time"><?php echo $work['time_at_company']; ?></p>
            </div>
            <div class="work-history__job">
              <p><?php echo $work['my_role']; ?></p>
            </div>
            <div class="work-history__content">
              <?php echo $work['job_description']; ?>
            </div>
          </div>
        </div>
      <?php endforeach;?>
    </div>
  </div>
</div>


