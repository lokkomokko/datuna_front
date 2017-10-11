<template>
	<div>
		<section class="work-page__container container">

			<div class="work-page__col">
				<div class="work-page__text-wrap">
					<div class="work-page__breadcrumbs-wrap">
						<a href="" class="work-page__breadcrumbs-item link-2">works</a>
						<span class="button__arrow" v-html="btn_arrow"></span>
						<a href="" class="work-page__breadcrumbs-item link-2">flags</a>
					</div>				
					<div class="work-page__title-wrap">
						<h1 class="work-page__title title-h1">USA flag</h1>						
					</div>
					<p class="Work-page__desc">
						Structurally, the eyeglasses are a symbolic expression of identity, illusion, perception, fragmentation and unification. 
					</p>					
				</div>
			</div>				
			<div class="work-page__col">
				<img src="../assets/img/h1.jpg" alt="" class="work-page__image">
			</div>				
		</section>
		<div class="work-page__buttons container">
			<div class="button button--reverse" href="">
				<span class="button__arrow" v-html="btn_arrow"></span>
				previous
			</div>				
			<div class="button" href="">
				next
				<span class="button__arrow" v-html="btn_arrow"></span>
			</div>				
		</div>

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
		name: 'Work_page',
		mounted: function() {
			setTimeout(() => {
				$('body').getNiceScroll().resize()
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