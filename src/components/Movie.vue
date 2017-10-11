<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title arts-section__title--cat-page title-h4">The movie</p>
				</div>
			</div>

			<div class="movie__container container">
				
												
				sdds
			</div>
			
		</section>
	</div>
</template>

<script>

import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow), 
			}
		},
		name: 'Movie',
		mounted: function() {
			setTimeout(() => {
				$('body').getNiceScroll().resize()
				console.log(3232323);
			}, 500)


			const header_title = document.querySelector('.header__title')
			const work_section = document.querySelector('.arts-section--works')

			if (window.pageYOffset >= 50) {
				header_title.style.opacity = 0;
			}

			  window.onscroll = function() {
	       		 var scrolled = window.pageYOffset || document.documentElement.scrollTop;

				if (scrolled >= 50) {
					header_title.style.opacity = 0
				}			
				else {
					header_title.style.opacity = 1
				}
			}
		}
	}
</script>