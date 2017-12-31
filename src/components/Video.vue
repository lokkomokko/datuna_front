<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<router-link to="/media" class="arts-section__title title-h4">media/<br><span class="cat-page__name">video</span></router-link>
				</div>
			</div>

			<div class="page__container container container--gray">
				
				<div class="common-block__item-wrap common-block__item-wrap-for-page">
					<a :href="'https://www.youtube.com/' + item.preview" class="common-block__item common-block__item-for-page" v-for="(item, index) in data" :key="index">
						<div class="common-block__item-image common-block__no-hover">
							<img class="common-block__item-videos-image" :src="'https://img.youtube.com/vi/' + item.preview + '/0.jpg'" alt="" >
						</div>
						<h5 class="common-block__item-desc">
							{{item.title}}
						</h5>
					</a>														
																	
				</div>
							
				
			</div>
			
		</section>
	</div>
</template>

<script>
require('../../static/js/jquery.fancybox.min.js')
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import domain from '../assets/js/config.js'
let jsonpAdapter = require('axios-jsonp');
import _ from 'lodash'

	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow), 
				data: {},

			}
		},
		name: 'Video',
		created: function() {
		
			const self = this
			document.title = "Videos. David Datuna";
			axios.get(domain +'api/media?type=video')

			  .then(function (response) {

			  		self.data = response.data
			  		for (const item of self.data) {
			  			item.preview = item.preview.replace(/\b&[^...]*/, '')
							  			
			  		}
						  


			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},			
		mounted: function() {


			setTimeout(() => {
				$('.common-block__item').fancybox();
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

<style src="../assets/css/jquery.fancybox.min.css"></style>