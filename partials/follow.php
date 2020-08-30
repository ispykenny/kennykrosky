<?php 
  $root = get_template_directory_uri();
  $social = get_field('social_links', 'options');
  foreach($social as $theSocial) :  ?>
    <li>
      <a href="<?php echo $theSocial['social_links_url']['url'];?>" target="_blank"> 
        <span class="sr-only"><?php echo $theSocial['social_svg'];?></span>
        <?php echo get_template_part("svg/".$theSocial['social_svg']) ;?>
      </a>
    </li>
  <?php endforeach ;?>


