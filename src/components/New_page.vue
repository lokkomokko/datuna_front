<template>
	<div>

		<section class="work-page__container work-page__container--news container">

			<div class="work-page__col work-page__col--text">
				<div class="work-page__text-wrap work-page__text-wrap--single-project">
					<div class="arts-block__title-wrap page__title-separator">
						<router-link to="/news" class="arts-section__title arts-section__title--cat-page title-h4">News</router-link>
					</div>
					<div class="work-page__title-wrap work-page__title-wrap-for-page">
						<h1 class="work-page__title title-h1">{{data.title}}</h1>
					</div>
					<div class="work-page__desc">
						<span class="work-page__desc-date">{{data.date}}</span> <br>

						<p v-html="data.text"></p>


					</div>
				</div>
			</div>
			<div class="work-page__col work-page__col--image work-page__col--preloader">
					<img :src="data.image" alt="" class="work-page__image">
					<div class="spin-wrap">
						<div class="spin"></div>
					</div>
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
		<div class="work-page__buttons container">

			<router-link :to="{ name: 'New_page', params: { newId: data.next }}" class="button button--reverse" v-if="Number($route.params.newId) !== Number(data.next) && Number(data.next) !== 0">
				<span class="button__arrow"  v-html="btn_arrow"></span>
				previous
			</router-link>
			<router-link :to="{ name: 'New_page', params: { newId: data.prev }}" class="work-page__btn-next button" v-if="Number($route.params.newId) !== Number(data.prev) && Number(data.prev) !== 0">
				next
				<span class="button__arrow" v-html="btn_arrow"></span>
			</router-link>
		</div>

	</div>
</template>

<script>
require('../../static/js/jquery.fancybox.min.js')
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
				preview: 0,

			}
		},
		name: 'New_page',
		created: function() {

			const self = this
			var api_adress = this.$route.query.preview ? domain +'api/news?preview=true&id=' + this.$route.query.id : domain +'api/news?id=' + self.$route.params.newId

			if (this.$route.query.session) {
				api_adress = domain +'api/session'
				this.preview = 1;
			}

			axios.defaults.withCredentials = true;
			axios.get(api_adress)

			  .then(function (response) {
			  		self.data = response.data
			  		if (self.preview == 0) {
				  		self.data.image = domain +'/images/'+ self.data.image
				  		self.data.images_group.map((e)=> {
					  		e.image = domain + e.image
				  		})
				  		if (self.data.images_group == self.data.images_group.length) {
				  			delete(self.data.images_group)
				  		}
			  		}
			  		else {
				  		self.data.title = self.data.News.title;
				  		self.data.text = self.data.News.text;
				  		self.data.image = domain + self.data.p_image;
			  		}

					document.title = self.data.title+". David Datuna";

			  })
			  .catch(function (error) {
			  	window.location.href = '/404'
			    console.log(error);
			  });
		},

		watch: {
		   	'$route' (to, from) {


				const self = this

		  		var tl = new TimelineMax;

		  		tl.to('.work-page__container', .3, {'opacity': 0} )
			  	$('.work-page__col--image').addClass('work-page__col--preloader')

				axios.get(domain +'api/news?id=' + self.$route.params.newId)
				  .then(function (response) {



				  		self.data = response.data
				  		self.data.image = domain +'/images/'+ self.data.image

				  		self.data.images_group.map((e)=> {
					  		e.image = domain + e.image
				  		})
				  		if (self.data.images_group == self.data.images_group.length) {
				  			delete(self.data.images_group)
				  		}

				  		$('.work-page__slide-item').fancybox();
					var el_1 = $('.work-page__col--text')
					var el_2 = $('.work-page__col--image')


						if ($(window).width() < 785 && $(window).width() > 585) {
							setTimeout(function() {

								var clone = el_2.clone()
								el_2.hide()
								el_1.find('.work-page__desc').prepend(clone)
								$('.work-page__slide-item').fancybox();
								$('.work-page__col--tablet-image').remove()
								clone.addClass('work-page__col--tablet-image')
								clone.show()
							}, 500)
						}
				  		$('.spin-wrap').height($('.work-page__image').height())


		  				tl.to('.work-page__container', .3, {'opacity': 1} )
			  				.to(window, .3, {scrollTo: 0, autoKill:false}, 0)

						document.title = self.data.title+". David Datuna";

						$('.work-page__image').on('load', function() {
				  			$('.work-page__col--image').removeClass('work-page__col--preloader')
						})

				  })
				  .catch(function (error) {
				    console.log(error);
				  	// window.location.href = '/404'

				  });
				  $('.work-page__slide-item').fancybox();
		    }
		},
		mounted: function() {

				window.scrollTo(0, 0)
      $('.spin-wrap').height($('.work-page__image').height())


      $('.work-page__image').on('load', function() {
	  			$('.work-page__col--image').removeClass('work-page__col--preloader')
			})
			setTimeout(() => {
			$('.work-page__slide-item').fancybox();//
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
				if (this.$route.name == 'New_page') {
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
