<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title arts-section__title--cat-page title-h4">Works/<br><span class="cat-page__name">flags</span></p>
				</div>
				<div class="arts-block__right-col">
					<div class="arts-block__category-desc-wrap">
						<p class="arts-block__category-desc">
							Structurally, the eyeglasses are a symbolic expression of identity, illusion, perception, fragmentation and unification.
						</p> 
					</div>	
				</div>
			</div>

			<div class="cat-page__container container container--white">
				<router-link to="/work-page" class="cat-page__item">
					<img src="../assets/img/c1.png" height="183" width="344" alt="" class="cat-page__item-img">
				</router-link>
				<a href="" class="cat-page__item">
					<img src="../assets/img/c2.png" alt="" class="cat-page__item-img">
				</a>
				<a href="" class="cat-page__item">
					<img src="../assets/img/c3.png" alt="" class="cat-page__item-img">
				</a>
				<a href="" class="cat-page__item">
					<img src="../assets/img/c4.png" alt="" class="cat-page__item-img">
				</a>
				<a href="" class="cat-page__item">
					<img src="../assets/img/c5.png" alt="" class="cat-page__item-img">
				</a>
				<a href="" class="cat-page__item">
					<img src="../assets/img/c6.png" alt="" class="cat-page__item-img">
				</a>
				<a href="" class="cat-page__item">
					<img src="../assets/img/c7.png" alt="" class="cat-page__item-img">
				</a>
				<a href="" class="cat-page__item">
					<img src="../assets/img/c8.png" alt="" class="cat-page__item-img">
				</a>
								
				
			</div>
			
		</section>
		<div class="container cat-page__other-works">
			<p class="cat-page__other-works-name">Other works: </p><br>
			<a href="" class="link-2">PORTRAITS</a><br>
			<a href="" class="link-2">ICONS</a>
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
		name: 'Works_categories',
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