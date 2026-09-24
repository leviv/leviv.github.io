<script>
</script>

<nav>
	<div class="container">
		<ul>
			<li><a href="/" class="hover">Home</a></li>
			<li><a href="/blog" class="hover">Blog</a></li>
			<li><a href="/projects" class="hover">Projects</a></li>
			<li>
				<a href="/Levi_Villarreal_Resume.pdf" class="hover" target="_blank">Resume</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		background-color: var(--bgColor);
		border-bottom: 1px solid var(--primaryDarker);
		font-size: 19px;
		position: absolute;
		width: 100%;
		z-index: 100;

		@media (prefers-color-scheme: dark) {
			background-color: var(--bgColor--dark);
			border-color: var(--primaryDarker--dark);
		}

		ul {
			list-style: none;
			margin: 15px 0;
			padding-inline-start: 0;
			text-align: center;

			li {
				display: inline;
				padding: 0 20px;

				a {
					padding: 15px 0;

					@media screen and (max-width: 768px) {
						padding: 10px 0;
					}
				}

				@media screen and (max-width: 768px) {
					padding: 0 10px;
				}
			}

			@media screen and (max-width: 768px) {
				margin: 12px 0;
			}
		}

		@media screen and (max-width: 768px) {
			font-size: 16px;
		}
	}
</style>
