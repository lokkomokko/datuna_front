<template>
	<div>
		<section class="work-page__container work-page__container-for-page container">
			<div class="work-page__breadcrumbs-wrap work-page__breadcrumbs-wrap-for-page">
				<a href="" class="work-page__breadcrumbs-item link-2">media</a>
				<span class="button__arrow" v-html="btn_arrow"></span>
				<a href="" class="work-page__breadcrumbs-item link-2">photo</a>
			</div>

			<div class="gallery__desc-wrap">
				<h3 class="gallery__desc">
					New book’s presentation at the White House
				</h3>				
			</div>	

			<div class="gallery__item-wrap">
				<a href="../static/img/n3.png" class="gallery__item" data-fancybox="gallery">
					<img src="../assets/img/n3.png" alt="">
				</a>
				<a href="../static/img/n3.png" class="gallery__item" data-fancybox="gallery">
					<img src="../assets/img/n3.png" alt="">
				</a>
				<a href="../static/img/n3.png" class="gallery__item" data-fancybox="gallery">
					<img src="../assets/img/n3.png" alt="">
				</a>	
				<a href="../static/img/n3.png" class="gallery__item" data-fancybox="gallery">
					<img src="../assets/img/n3.png" alt="">
				</a>
				<a href="../static/img/n3.png" class="gallery__item" data-fancybox="gallery">
					<img src="../assets/img/n3.png" alt="">
				</a>
							
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

require('../../static/js/jquery.fancybox.min.js')
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow), 
			}
		},
		name: 'Gallery',
		mounted: function() {
			setTimeout(() => {
				$('body').getNiceScroll().resize()
			}, 500)

			$('.gallery__item').fancybox({
				scrolling: false,
				width: 199
			});

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

<style src="../assets/css/jquery.fancybox.min.css"></style>