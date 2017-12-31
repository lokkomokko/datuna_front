<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title arts-section__title--cat-page title-h4 equal-sep">The movie</p>
				</div>
			</div>

			<div class="movie__container container">
				<h1 class="movie__title title-h4">
					PORTRAIT of america
				</h1>			
				<div class="movie__image-wrap">
					<!-- <iframe :src="data.movie_link" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
					<iframe src="https://www.youtube.com/embed/ysuYNi38Olg" frameborder="0" gesture="media" allowfullscreen></iframe>									
					<div class="movie__image-text-wrap">
						<div class="movie__image-text-col small-text">
							Released to the public <br>
							on july 4th weekend 2017							
						</div>
						<div class="movie__image-text-col">
							<a href="http://datunamovie.com/" class="movie__image-link link-2" target="_blank">
								THE MOVIE OFFICIAL WEBSITE
								<span class="button__arrow" v-html="btn_arrow"></span>
							</a>
						</div>
					</div>
				</div>
				<div class="movie__content">
					<div class="movie__content-image-wrap">
						<img src="../assets/img/aw1.png" height="179" width="186" alt="" class="movie__content__image movie__content-image--top">
						<img src="../assets/img/aw2.png" alt="" class="movie__content-image">
					</div>
					<div v-html="data.movie_desc">
						
					</div>
				</div>
			</div>
			
		</section>
	</div>
</template>

<script>

import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import domain from '../assets/js/config.js'
	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow), 
				data: {}
			}
		},
		name: 'Movie',
		created: function() {
			
			const self = this
			document.title = "Movie. David Datuna";

			axios.get(domain +'api/static?type=movie')

			  .then(function (response) {

			  	self.data = response.data

			  	

			  		

			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},			
		mounted: function() {
			// setTimeout(() => {
			// 	$('body').getNiceScroll().resize()
			// 	console.log(3232323);
			// }, 500)


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