<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title title-h4">Works</p>
				</div>
				<div class="arts-block__right-col">
					<div class="arts-block__links-wrap">
						<div class="arts-block__link-item"
							v-scroll-to="{
						     el: '#_' + item.id,
						     duration: 1500,
						     offset: offsetSize}" v-for="item in data" :key="item.id"
						 >{{item.category_name}}</div>
					
					</div>
				</div>
			</div>

			<div class="arts-section__container container container--gray">
				
				<router-link :to="{ name: 'Works_categories', params: { workName: (item.category_name).toLowerCase(), workId: item.title }}" class="arts-section__item art-item arts-section__item--preloader" :id="'_'+item.id" v-for="item in data" :key="item.id">
					<div class="art-item__image">
						<img :src="item.image" alt="">
						<div class="spin-wrapper spin-wrapper--work">
							<div class="spin"></div>
						</div>
					</div>	
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">{{item.category_name}}</h4>
							</div>
							<p class="art-item__desc">
								 
							{{item.desc}}
							</p>
							<div class="art-item__button button">
								more
								<span class="button__arrow" v-html="btn_arrow"></span>
							</div>								
						</div>
					</div>
				</router-link>

											
				
			</div>
			
		</section>
	</div>
</template>

<script>

import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import domain from '../assets/js/config.js'
var imagesLoaded = require('imagesloaded')

	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow),
				data: {},
				offsetSize: -30
			}
		},
		name: 'Works',
		created: function() {
			document.title = "Works. David Datuna";
			const self = this

			axios.get(domain + 'api/works?type=cat')
			  .then(function (response) {
			  		self.data = response.data;
			  		self.data.map((e)=>{
				  		e.image = domain +'images/thumb/'+ e.image
			  		})
		
				
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},	
		updated: function() {
			imagesLoaded(document.querySelectorAll('.arts-section__item img'), function(e) {
				$('.arts-section__item').removeClass('arts-section__item--preloader')
			})

		},			
		mounted: function() {
				

			if ($(window).width() < 800) {
				this.offsetSize = -60
			}

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