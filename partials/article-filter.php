<?php $categories = get_queried_object();?>

<section>
  <div class="inner inner-narrow">
    <ul class="article-filter">
      <li>Filter by:</li>
      <li><a href="<?php echo site_url('/articles');?>">All</a></li>
      <?php 
        $all_cats = get_categories();
        foreach($all_cats as $cat_item) :
       if($cat_item->name != $categories->cat_name) {
      ;?>
      
        <li><a href="<?php echo get_category_link($cat_item->term_id);?>" class="category-type-<?php echo $cat_item->slug;?>"><?php echo $cat_item->name;?></a></li>
        
      <?php } endforeach;?>
    </ul>
  </div>
</section>