<script>
	const title = 'leviv.cool';
	const emailReverse = 'moc.liamg@ivellaerralliv';
	const description = "Levi Villarreal's blog";
</script>

<footer class="site-footer h-card">
	<data class="u-url" href="/"></data>

	<div class="wrapper">
		<h2 class="footer-heading">{title}</h2>

		<div class="footer-col-wrapper">
			<div class="footer-col footer-col-1">
				<ul class="contact-list">
					<li><bdo dir="rtl">{emailReverse}</bdo></li>
				</ul>
			</div>

			<div class="footer-col footer-col-2">
				<ul class="social-media-list">
					<li>
						<a href="https://github.com/leviv" target="_blank">
							<i class="fab fa-github svg-icon"></i>
							<span class="username">leviv</span>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/villarreallevi" target="_blank">
							<i class="fab fa-linkedin svg-icon"></i>
							<span class="username">villarreallevi</span>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com/villarreallevi" target="_blank">
							<i class="fab fa-twitter svg-icon"></i>
							<span class="username">villarreallevi</span>
						</a>
					</li>
				</ul>
			</div>

			<div class="footer-col footer-col-3">
				<p>{description}</p>
				<p><a href="https://forms.gle/aDZnNEM8pXLVUhkY8" target="_blank">Subscribe to my email list</a></p>
			</div>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid var(--primaryDarker);
		padding: 30px 0;

		@media (prefers-color-scheme: dark) {
			border-color: var(--primaryDarker--dark);
		}
	}

	.wrapper {
		max-width: calc(800px - (30px * 2));
		margin-right: auto;
		margin-left: auto;
		padding-right: 30px;
		padding-left: 30px;
	}

	.footer-heading {
		font-size: 18px;
		margin-bottom: 15px;
	}

	.contact-list,
	.social-media-list {
		list-style: none;
		margin-left: 0;
		padding-left: 0;
	}

	.footer-col-wrapper {
		font-size: 15px;
		color: #828282;
		margin-left: -15px;
		display: flex;
		flex-wrap: wrap;

		@media (prefers-color-scheme: dark) {
			color: #9e9e9e;
		}
	}

	.footer-col {
		width: calc(100% - 15px);
		margin-bottom: 15px;
		padding-left: 15px;

		@media screen and (min-width: 800px) {
			width: calc(33.333% - 15px);
		}
	}

	.svg-icon {
		width: 16px;
		height: 16px;
		display: inline-block;
		fill: currentColor;
		padding-right: 5px;
		vertical-align: text-bottom;
	}
</style>
