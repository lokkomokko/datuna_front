<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title title-h4">News</p>
				</div>
			</div>

			<div class="page__container container container--gray">
				
				<div class="common-block__item-wrap common-block__item-wrap-for-page">
					<router-link to="/new-page" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n1.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							David Datuna Unveils "Unity" Project
						</h5>
					</router-link>
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n2.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Trump. That's all that was spelled out this afternoon when artist David Datuna laid down some cool art in Union Square
						</h5>
					</a>
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n3.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Political artist David Datuna featured in Greenwich gallery exhibit
						</h5>
					</a>	
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n1.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							David Datuna Unveils "Unity" Project
						</h5>
					</a>
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n2.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Trump. That's all that was spelled out this afternoon when artist David Datuna laid down some cool art in Union Square
						</h5>
					</a>
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n3.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Political artist David Datuna featured in Greenwich gallery exhibit
						</h5>
					</a>
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n1.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							David Datuna Unveils "Unity" Project
						</h5>
					</a>
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n2.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Trump. That's all that was spelled out this afternoon when artist David Datuna laid down some cool art in Union Square
						</h5>
					</a>
					<a href="" class="common-block__item common-block__item-for-page">
						<div class="common-block__item-image">
							<img src="../assets/img/n3.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Political artist David Datuna featured in Greenwich gallery exhibit
						</h5>
					</a>														
				</div>
							
				
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
		name: 'News',
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