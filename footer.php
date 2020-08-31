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
<!-- Default Statcounter code for Kennykrosky.com
https://kennykrosky.com -->
<script type="text/javascript">
var sc_project=11373864; 
var sc_invisible=1; 
var sc_security="a0a464d4"; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js"
async></script>
<noscript><div class="statcounter"><a title="real time web
analytics" href="https://statcounter.com/"
target="_blank"><img class="statcounter"
src="https://c.statcounter.com/11373864/0/a0a464d4/1/"
alt="real time web analytics"></a></div></noscript>
<!-- End of Statcounter Code -->
</body>
</html>