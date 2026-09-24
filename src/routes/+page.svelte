<script>
	import { onMount, onDestroy } from 'svelte';

	let cleanup;
	let checkInterval;

	onMount(() => {
		// start3DAnimation is defined in /assets/js/main.js which loads async via <svelte:head>
		checkInterval = setInterval(() => {
			if (typeof window !== 'undefined' && window.start3DAnimation && !cleanup) {
				clearInterval(checkInterval);
				cleanup = window.start3DAnimation();
			}
		}, 50);
	});

	onDestroy(() => {
		if (checkInterval) {
			clearInterval(checkInterval);
		}
		if (cleanup) {
			cleanup();
		}
	});

	function aboutAnimation() {
		if (typeof window !== 'undefined' && window.aboutAnimation) {
			window.aboutAnimation();
		}
	}

	function aboutCloseAnimation() {
		if (typeof window !== 'undefined' && window.aboutCloseAnimation) {
			window.aboutCloseAnimation();
		}
	}
</script>

<svelte:head>
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js"></script>
	<script defer src="/assets/js/OrbitControls.js"></script>
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
	<script defer src="/assets/js/main.js"></script>
</svelte:head>

<section id="home-content">
	<div class="container">
		<div id="about-info">
			<p>
				<em>Howdy!</em>
				<br /><br />
				I'm currently a software engineer at <a href="https://figma.com" target="_blank">Figma</a>
				and a graduate student at the
				<a href="https://itp.nyu.edu/lowres" target="_blank">Interactive Media Arts</a>
				program at New York University. I am really passionate about visual design, human computer interaction,
				and animal rights. I also enjoy climbing, origami, and ultimate frisbee.

				<br /><br />
				The model on the homepage is my JavaScript recreation of the
				<a
					href="https://landmarks.utexas.edu/artwork/circle-towers"
					target="_blank"
					rel="noreferrer">Circle with Towers</a
				>
				sculpture outside of the UT Austin computer science building where I attended undergrad.
			</p>
			<button onclick={aboutCloseAnimation}>
				<p>
					<span>Click here to return to normal view</span>
				</p>
			</button>
		</div>
		<div class="bottom">
			<h1>Levi Villarreal</h1>
			<ul>
				<li>
					<a
						href="https://twitter.com/villarreallevi"
						target="_blank"
						aria-label="twitter icon"
						rel="noreferrer"
					>
						<i class="fab fa-twitter" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a
						href="https://instagram.com/levivillarreal"
						target="_blank"
						aria-label="instagram icon"
						rel="noreferrer"
					>
						<i class="fab fa-instagram" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/levi.villarreal.9"
						target="_blank"
						aria-label="facebook icon"
						rel="noreferrer"
					>
						<i class="fab fa-facebook" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/villarreallevi/"
						target="_blank"
						aria-label="linkedin icon"
						rel="noreferrer"
					>
						<i class="fab fa-linkedin" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/leviv"
						target="_blank"
						aria-label="Github icon"
						rel="noreferrer"
					>
						<i class="fab fa-github" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
			<button aria-label="toggle about section" onclick={aboutAnimation}><h2>About</h2></button>
		</div>
	</div>
</section>

<div class="webring">
	<p><a href="https://lyuu.cc/">&larr;</a></p>
	<p>:3 ring!</p>
	<p><a href="https://www.caffeine.garden/">&rarr;</a></p>
</div>

<style>
	:global(canvas) {
		display: block;
	}

	.webring {
		position: absolute;
		bottom: 25px;
		left: 25px;
		font-size: 14px;
		display: inline;

		a {
			text-decoration: none;
		}
	}

	section#home-content {
		position: absolute;
		text-align: right;
		bottom: 25px;
		right: 25px;

		@media screen and (max-width: 768px) {
			bottom: 25px;
		}

		#about-info {
			display: none;
			margin: 0 0 0 auto;
			opacity: 0;
			padding-bottom: 30px;
			position: relative;
			overflow-y: auto;
			width: 500px;

			@media screen and (max-width: 768px) {
				width: 100%;
				font-size: 14px;
				padding-bottom: 0px;
			}

			em {
				color: var(--primaryDarker);
				font-size: 1.3em;

				@media (prefers-color-scheme: dark) {
					color: var(--bgColor);
				}
			}

			button {
				background: none;
				border: 3px solid var(--primaryColor);
				border-radius: 4px;
				color: var(--primaryColor);
				cursor: pointer;
				font-style: italic;
				transition: all 0.2s;

				@media (prefers-color-scheme: dark) {
					border-color: var(--primaryColor--dark);
					color: var(--primaryColor--dark);
				}

				&:hover {
					color: var(--primaryDarker);
					border-color: var(--primaryDarker);

					@media (prefers-color-scheme: dark) {
						color: var(--primaryDarker--dark);
						border-color: var(--primaryDarker--dark);
					}
				}

				p {
					margin: 7px 0;
				}
			}
		}

		.bottom {
			h1 {
				font-size: 3em;

				@media screen and (max-width: 768px) {
					font-size: 1.5em;
				}
			}

			h1,
			h2,
			ul {
				margin: 5px 0;
			}

			button {
				background: none;
				border: 3px solid var(--primaryColor);
				border-radius: 4px;
				color: var(--primaryColor);
				cursor: pointer;
				transition: all 0.2s;

				@media (prefers-color-scheme: dark) {
					border-color: var(--primaryColor--dark);
					color: var(--primaryColor--dark);
				}

				@media screen and (max-width: 768px) {
					font-size: 14px !important;
				}

				&:hover {
					color: var(--primaryDarker);
					border-color: var(--primaryDarker);

					@media (prefers-color-scheme: dark) {
						color: var(--primaryDarker--dark);
						border-color: var(--primaryDarker--dark);
					}
				}
			}

			ul {
				list-style: none;

				li {
					display: inline;
					font-size: 2em;

					@media screen and (max-width: 768px) {
						font-size: 1.5em;
					}

					a {
						padding: 0 4px;
					}
				}
			}
		}
	}
</style>
