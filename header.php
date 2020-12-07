<?php 
	wp_redirect('https://ispykenny.com/');
	exit;
	$root = get_template_directory_uri();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title> <?php wp_title(''); ?></title>
	<link rel="stylesheet" href="<?php echo "$root/dist/assets/css/style.css" ?>">
	<meta name="viewport" content="Width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php 
	$about = is_page('about-me') ?  'active' : '';
	$articles = is_page('articles') ? 'active' : '';
	$work = is_page('work') ? 'active' : '';
	$connect = is_page('connect') ? 'active' : '';
;?>

<header>
	<div class="inner">
		<div class="nav-section">
			<div class="nav-section__item">
				<a href="<?php echo site_url('/');?>" id="me">
					<span class="sr-only">Home Page</span>
					<div>
						<div class="section-bg">
							<div class="section-bg__el" data-bg="<?php echo site_url('/wp-content/uploads/2019/01/github-1.jpg') ?>"></div>
						</div>
					</div>
				</a>
				<button class="menu-trigger">
					<span class="sr-only">Menu</span>
					<div class="menu-trigger__span">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
			</div>
			<div class="nav-section__item main-nav-parent">
				<nav class="main-nav">
					<ul>
						<li><a class="<?php echo $about;?>" href="<?php echo site_url('/about');?>">About</a></li>
						<li><a class="<?php echo $articles;?>" href="<?php echo site_url('/articles');?>">Articles</a></li>
						<li><a class="<?php echo $work;?>" href="<?php echo site_url('/work');?>">Work</a></li>
						<li><a class="<?php echo $connect;?>" href="<?php echo site_url('/connect');?>">Connect</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
