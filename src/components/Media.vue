<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title title-h4">News</p>
				</div>
			</div>

			<div class="page__container container container--gray">
				
				<section class="common-block common-block_news common-block_news-item-for-page">
					<h2 class="common-block__title title-h2">Photo</h2>
					<div class="common-block__item-wrap">
						<a href="" class="common-block__item">
							<div class="common-block__item-image">
								<img src="../assets/img/n1.png"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								David Datuna Unveils "Unity" Project
							</h5>
						</a>
						<a href="" class="common-block__item">
							<div class="common-block__item-image">
								<img src="../assets/img/n2.png"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								Trump. That's all that was spelled out this afternoon when artist David Datuna laid down some cool art in Union Square
							</h5>
						</a>
						<a href="" class="common-block__item">
							<div class="common-block__item-image">
								<img src="../assets/img/n3.png"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								Political artist David Datuna featured in Greenwich gallery exhibit
							</h5>
						</a>					
					</div>

					<router-link to="/photos" class="common-block__button world-section__button button" href="">
						more photos
						<span class="button__arrow" v-html="btn_arrow"></span>
					</router-link>													
				</section>
				<section class="common-block common-block_news common-block_news-item-for-page">
					<h2 class="common-block__title title-h2">Video</h2>
					<div class="common-block__item-wrap">
						<a href="" class="common-block__item">
							<div class="common-block__item-image">
								<img src="../assets/img/n1.png"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								David Datuna Unveils "Unity" Project
							</h5>
						</a>
						<a href="" class="common-block__item">
							<div class="common-block__item-image">
								<img src="../assets/img/n2.png"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								Trump. That's all that was spelled out this afternoon when artist David Datuna laid down some cool art in Union Square
							</h5>
						</a>
						<a href="" class="common-block__item">
							<div class="common-block__item-image">
								<img src="../assets/img/n3.png"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								Political artist David Datuna featured in Greenwich gallery exhibit
							</h5>
						</a>					
					</div>

					<router-link to="/videos" class="common-block__button world-section__button button" href="">
						more videos
						<span class="button__arrow" v-html="btn_arrow"></span>
					</router-link>													
				</section>												
				
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
		name: 'Media',
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