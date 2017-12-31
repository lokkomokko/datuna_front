<template>
	<div>
		<section class="work-page__container container">

			<div class="work-page__col work-page__col--text">
				<div class="work-page__text-wrap work-page__text-wrap--single-project">
					<div class="work-page__breadcrumbs-wrap">
						<router-link to="/foundation" class="work-page__breadcrumbs-item link-2">foundation</router-link>
						<span class="button__arrow" v-html="btn_arrow"></span>
						<router-link to="/foundation/awards" class="work-page__breadcrumbs-item link-2">awards</router-link>
					</div>				
					<div class="work-page__title-wrap">
						<h1 class="work-page__title title-h1">{{data.title}}</h1>						
					</div>
					<div class="work-page__desc" v-html="data.text"></div>					
				</div>
			</div>				
			<div class="work-page__col work-page__col--image">
						<img :src="data.image" alt="" class="work-page__image">
						<template v-if="data.images_group">
							<div class="work-page__slide-wrap">

								<a :href="item.image" class="work-page__slide-item" v-for="item in data.images_group">
									<img :src="item.image" alt="">
								</a>
													
																	
							</div>

							<div class="work-page__more-photos-wrap">
								<router-link :to="{ name: 'Gallery', params: { photoId: data.relate_media_photos }}" class="work-page__more-photos-link link-2">
									more photos
								</router-link>
								<span class="button__arrow" v-html="btn_arrow"></span>
							</div>
						</template>
			</div>				
		</section>
	
		<div class="related-news container">
			<div class="related-news__title title-h4">
				Related news:
			</div>
				<div class="common-block__item-wrap common-block__item-wrap-for-page">
					<router-link :to="{ name: 'New_page', params: { newId: item.id }}" class="common-block__item common-block__item-for-page" v-for="item in data.news" :key="item.id">
						<div class="common-block__item-image common-block__no-hover">
							<img :src="item.image"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							{{item.title}}
						</h5>
					</router-link>
				</div>				
		</div>	
			

	</div>
</template>

<script>
require('../../static/js/jquery.fancybox.min.js')

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
		name: 'Awards_project',
		created: function() {

			const self = this

			axios.get(domain + 'api/foundation?type=awards_projects&id='+ self.$route.params.awId)

			  .then(function (response) {
			  		self.data = response.data;

			  		self.data.image = domain + 'images/' + self.data.image 
			  		self.data.news.map((e)=> {
				  		e.image = domain + '/images/thumb/' + e.image
			  		})					  		
			  		self.data.images_group.map((e)=> {
				  		e.image = domain + e.image
			  		})
			  		if (self.data.images_group == self.data.images_group.length) {
			  			delete(self.data.images_group)
			  		}


			  		document.title = self.data.title+". David Datuna";

			  })
			  .catch(function (error) {
			    console.log(error);
			  	window.location.href = '/404'
			    
			  });
		},		
		mounted: function() {
			setTimeout(() => {
				$('.work-page__slide-item').fancybox();
			}, 500)



			if ($(window).width() < 785 && $(window).width() > 585) {
				setTimeout(function() {

					var el_1 = $('.work-page__col--text')
					var el_2 = $('.work-page__col--image')					
					var clone = el_2.clone()
					el_2.hide()
					el_1.find('.work-page__desc').prepend(clone)
					$('.work-page__slide-item').fancybox();
					clone.addClass('work-page__col--tablet-image')
				}, 500)
			}

			if ($(window).width() < 585) {
				setTimeout(function() {

				$('.work-page__col--image').append($('.work-page__desc'))
				$('.work-page__desc').addClass('moved_work')
				}, 500)
			}
			// var el_1 = $('.work-page__col:first-of-type')
			// var el_2 = $('.work-page__col:last-of-type')	
			// var wrap = $('.work-page__image') 
			// var text = $('.work-page__desc')			
			$(window).resize(()=>{
				if (this.$route.name == 'Awards_project') {
					if ($(window).width() <= 585) {

					if ($('.work-page__col--tablet-image').length  >= 1) {
						var el_1 = $('.work-page__col--text')
						var el_2 = $('.work-page__col--image')	
						$('.work-page__col--tablet-image').remove()				
						el_2.show()

				$('.work-page__col--image').append($('.work-page__desc'))
				$('.work-page__desc').addClass('moved_work')

						// el_1.find('.work-page__desc').prepend(clone)
					}
	
					}		
					else if ($(window).width() > 585 && $(window).width() < 785 ) {

					if ($('.work-page__col--tablet-image').length  == 0) {
						var el_1 = $('.work-page__col--text')
						var el_2 = $('.work-page__col--image')

						$('.work-page__text-wrap').after($('.moved_work'))
						$('.moved_work').removeClass('moved_work')											

						var clone = el_2.clone()
						el_2.hide()
						el_1.find('.work-page__desc').prepend(clone)
						$('.work-page__slide-item').fancybox();
						clone.addClass('work-page__col--tablet-image')						
					}
			
					}				
					else if ($(window).width() >= 785) { 
						if ($('.work-page__col--tablet-image').length  >= 1) {
									var el_1 = $('.work-page__col--text')
									var el_2 = $('.work-page__col--image')	
									$('.work-page__col--tablet-image').remove()				
									el_2.show()

						

									// el_1.find('.work-page__desc').prepend(clone)
								}						
					}
				}
			})	 

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