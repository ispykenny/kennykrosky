<?php 
	$root = get_template_directory_uri();
?>
	<?php get_template_part('partials/pre-footer');?>

	<footer>
		<div class="inner footer-columns">
			<div class="footer-columns__item">
				<p><?php echo get_the_date('Y');?> All Rights Reservered</p>
				<p>Kenny Krosky</p>
			</div>
			<div class="footer-columns__item">
				<ul class="footer-columns__social">
					<?php get_template_part('partials/follow');?>
				</ul>
			</div>
			<div class="footer-columns__item">
				<a href="https://github.com/ispykenny/kennykrosky" target="_blank" rel="noopener">Sites source Code.</a>
			</div>
		</div>
	</footer>
	
<script src="<?php echo "$root/dist/assets/js/app.bundle.js";?>"></script>
</body>
</html>