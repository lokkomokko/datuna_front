<template>
	<div>
		<section class="work-page__container work-page__container-for-page container">
			<div class="work-page__breadcrumbs-wrap work-page__breadcrumbs-wrap-for-page">
				<router-link to="/media" class="work-page__breadcrumbs-item link-2">media</router-link>
				<span class="button__arrow" v-html="btn_arrow"></span>
				<router-link to="/media/photos" class="work-page__breadcrumbs-item link-2">photo</router-link>
			</div>

			<div class="gallery__desc-wrap">
				<h3 class="gallery__desc">
					{{data.cat_name}}
				</h3>
				<p class="gallery__date">
					{{data.date}}
				</p>

				<div class="gallery__text" v-html="data.desc"></div>

			</div>

			<div class="gallery__item-wrap">
				<a :href="domain +'images/'+ item.image" class="gallery__item common-block__no-hover preloader" data-fancybox="gallery" v-for="item in data.images" :key="item.id">
					<img :src="domain +'images/thumb/'+ item.image" alt="">
          <span class="spin-wrapper"><span class="spin"></span></span>
				</a>

			</div>


		</section>
		<div class="work-page__buttons container">

			<router-link :to="{ name: 'Gallery', params: { photoId: data.next }}" class="button button--reverse" v-if="data.next">
				<span class="button__arrow" v-html="btn_arrow"></span>
				previous
			</router-link>
			<router-link :to="{ name: 'Gallery', params: { photoId: data.prev }}" class="button work-page__btn-next" v-if="data.prev">
				next
				<span class="button__arrow" v-html="btn_arrow"></span>
			</router-link>
		</div>

	</div>
</template>

<script>

require('../../static/js/jquery.fancybox.min.js')
var imagesLoaded = require('imagesloaded')
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import domain from '../assets/js/config.js'
import {TweenMax, TimelineMax} from 'gsap'

import ScrollToPlugin from 'gsap/src/minified/plugins/ScrollToPlugin.min.js'
	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow),
				data: {},
        domain: domain
			}
		},
		name: 'Gallery',

		created: function() {

			const self = this

			axios.get( domain + 'api/media?type=photo&id=' + self.$route.params.photoId)
			  .then(function (response) {
			  		self.data = response.data
			  			self.data.images.map((e)=> {
			  				e.image = e.image.replace('images/', '')
				  		})
				  		document.title = self.data.cat_name+". David Datuna";

			  })
			  .catch(function (error) {
			    console.log(error);
			  	window.location.href = '/404'

			  });
		},

		watch: {
      data : function() {
        imagesLoaded(document.querySelectorAll('.gallery__item img'), function(e) {
          $('.gallery__item').removeClass('preloader')
        })
      },
		   	'$route' (to, from) {

				const self = this
          var tl = new TimelineMax;
          tl.to('.work-page__container', .3, {'opacity': 0} )

          $('.gallery__item').addClass('preloader')
				axios.get(domain +'api/media?type=photo&id=' + self.$route.params.photoId)
				  .then(function (response) {
				  		self.data = response.data
				  			self.data.images.map((e)=> {
                  e.image = e.image.replace('images/', '')
                })
            tl.to('.work-page__container', .3, {'opacity': 1} )
              .to(window, .3, {scrollTo: 0, autoKill:false}, 0)
						document.title = self.data.cat_name+". David Datuna";

				  })
				  .catch(function (error) {
				    console.log(error);
				    window.location.href = '/404'
				  });

		    }
		},

		mounted: function() {
			// setTimeout(() => {
			// 	$('body').getNiceScroll().resize()
			// }, 500)

			$('.gallery__item').fancybox({
				iframe: {
			        attr : {
			            scrolling : 'false'
			        }
				}
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
