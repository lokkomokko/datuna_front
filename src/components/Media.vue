<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title equal-sep title-h4">Media</p>
				</div>
			</div>

			<div class="page__container container container--gray">
				
				<section class="common-block common-block_news common-block_news-item-for-page">
					<h2 class="common-block__title title-h2">Photo</h2>
					<div class="common-block__item-wrap">
						<router-link :to="{ name: 'Gallery', params: { photoId: item.id }}" class="common-block__item common-block__mobile_photo" v-for="item in data.photos" :key="item.id">
							<div class="common-block__item-image">
								<img :src="item.image"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								{{item.cat_name}}
							</h5>
						</router-link>
					
					</div>

					<router-link to="/media/photos" class="common-block__button world-section__button button">
						more photos
						<span class="button__arrow" v-html="btn_arrow"></span>
					</router-link>													
				</section>
				<section class="common-block common-block_news common-block_news-item-for-page common-block__videos-wrap">
					<h2 class="common-block__title title-h2">Video</h2>
					<div class="common-block__item-wrap">
						<a :href="'https://www.youtube.com/' + item.preview " class="common-block__item common-block__item-videos" v-for="(item, index) in videos" :key="item.id" v-if="index < 3">
							<div class="common-block__item-image">
								<img class="common-block__item-videos-image" :src="'https://img.youtube.com/vi/' + item.preview + '/0.jpg'"alt="" >
							</div>
							<h5 class="common-block__item-desc">
								{{item.title}}
							</h5>
						</a>
					
					</div>

					<router-link to="/videos" class="common-block__button world-section__button button">
						more videos
						<span class="button__arrow" v-html="btn_arrow"></span>
					</router-link>													
				</section>												
				
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
				videos: {}
			}
		},
		name: 'Media',
		created: function() {
		
			const self = this
			document.title = "Media. David Datuna";

			axios.get( domain +'api/media?type=all')
			  .then(function (response) {
			  		self.data = response.data
			  		self.data.photos.map((e)=> {
				  		e.image = domain + e.image
			  		})
			  		for (const item of self.data.videos) {
			  			item.preview = item.preview.replace(/\b&[^...]*/, '')
			  		}			  		
			  		self.videos = self.data.videos
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},			
		mounted: function() {
			setTimeout(() => {
				$('.common-block__item-videos').fancybox();
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
