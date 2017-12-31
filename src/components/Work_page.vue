<template>
	<div>
		<section class="work-page__container container">

			<div class="work-page__col work-page__col--small">
				<div class="work-page__text-wrap">
					<div class="work-page__breadcrumbs-wrap">
						<router-link to="/works" class="work-page__breadcrumbs-item link-2">works</router-link>
						<span class="button__arrow" v-html="btn_arrow"></span>
						<router-link :to="{ name: 'Works_categories', params: { workName: (category_name).toLowerCase(), workId: category_name }}" class="work-page__breadcrumbs-item link-2">{{category_name}}</router-link>
					</div>
					<div class="work-page__title-wrap">
						<h1 class="work-page__title title-h1">{{data.title}}</h1>
					</div>
					<div class="work-page__desc" v-html="data.desc"></div>
				</div>
			</div>
			<a :href="image" class="work-page__col work-page__col--big preloader">
				<img :src="image" alt="" class="work-page__image">
				<span class="spin-wrapper spin-wrap">
					<span class="spin"></span>
				</span>
			</a>
		</section>
		<div class="work-page__buttons container">

			<router-link :to="{name: 'Work_page', params : {workId: data.next, workName: data.category_name} }" class="button button--reverse" v-if="Number($route.params.workId) !== Number(data.next) && Number(data.next) !== 0">
				<span class="button__arrow"  v-html="btn_arrow"></span>
				previous
			</router-link>
			<router-link :to="{name: 'Work_page', params : {workId: data.prev, workName: data.category_name} }" class="work-page__btn-next button" v-if="Number($route.params.workId) !== Number(data.prev) && Number(data.prev) !== 0">
				next
				<span class="button__arrow" v-html="btn_arrow"></span>
			</router-link>
		</div>

	</div>
</template>

<script>

import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import domain from '../assets/js/config.js'
import {TweenMax, TimelineMax} from 'gsap'
import ScrollToPlugin from 'gsap/src/minified/plugins/ScrollToPlugin.min.js'

var imagesLoaded = require('imagesloaded')
	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow),
				data: {},
				category_name: '',
				preview: 0,
        image : ''
			}
		},
		name: 'Work_page',

		created: function() {

			const self = this

			var api_adress = this.$route.query.preview ? domain +'api/works?preview=true&id=' + this.$route.query.id : domain +'api/works?id='+ self.$route.params.workId + '&cat_name=' + this.$route.params.workName
			if (this.$route.query.session) {
				api_adress = domain +'api/session'
				this.preview = 1;
			}

			axios.defaults.withCredentials = true;
			axios.get(api_adress)

			  .then(function (response) {

			  		self.data = response.data;
			  		console.log('msg')
			  		self.category_name = self.data.category_name ? self.data.category_name : self.category_name;

			  		self.data.image = domain+ 'images/' + self.data.image
					TweenMax.to(window, .3, {scrollTo: 0});


					if (self.preview == 1) {
						self.data.title = self.data.Works.title;
						self.data.desc = self.data.Works.desc;
						self.data.image = domain + self.data.p_image;
						self.category_name = 'some category'
					}

					document.title = self.data.title+". David Datuna";
			  })
			  .catch(function (error) {
			  	window.location.href = '/404'

			    console.log(error);
			  });
		},

		watch: {
			data : function() {
			  var self = this;
        // setTimeout(function () {
          self.image = self.data.image
        // }, 1000);
				imagesLoaded(document.querySelector('.work-page__col--big img'), function(e) {
					$('.work-page__col--big').removeClass('preloader')
				})
			},
		   	'$route' (to, from) {

		  		var tl = new TimelineMax;
          var cont = $('.work-page__container')
		  		// tl.to(cont, .3, {'opacity': 0} )

				const self = this

				$('.work-page__col--big').addClass('preloader')


				axios.get(domain +'api/works?id='+ self.$route.params.workId + '&cat_name=' + this.$route.params.workName)

				  .then(function (response) {
				  		self.data = response.data;
				  		self.category_name = self.data.category_name ? self.data.category_name : category_name
				  		self.data.image = domain + 'images/' + self.data.image


				tl.to(cont, .3, {'opacity': 1})
  				.to(window, .3, {scrollTo: 0, autoKill:false}, 0)

				  	document.title = self.data.title+". David Datuna";


				  })

				  .catch(function (error) {
				    console.log(error);
				  });
		    }
		},
		mounted: function() {
			// setTimeout(() => {
			// 	$('body').getNiceScroll().resize()
			// }, 500)
			var el_1 = $('.work-page__col:first-of-type')
			var el_2 = $('.work-page__col:last-of-type')

			$('.work-page__col--big').fancybox({
				iframe: {
			        attr : {
			            scrolling : 'false'
			        }
				}
			});
            //
			// if ($(window).width() < 785 && $(window).width() > 585) {
			// 	setTimeout(function() {
			// 		var clone = el_2.clone()
			// 		el_2.hide()
			// 		el_1.find('.work-page__desc').prepend(clone)
			// 		clone.addClass('work-page__col--tablet-image')
			// 	}, 500)
			// }

			if ($(window).width() < 585) {

				$('.work-page__image').after($('.work-page__desc'))
				$('.work-page__desc').addClass('moved_work')
			}
			var wrap = $('.work-page__image')
			var text = $('.work-page__desc')

			// $(window).resize(()=>{
			// 	if (this.$route.name == 'Work_page') {
			// 	if ($(window).width() < 585) {
			// 		$('.work-page__col--tablet-image').length >= 1 ? $('.work-page__col--tablet-image').hide() : true
			// 		el_2.show()
			// 		if (!text.hasClass('moved_work')) {
			// 			text.addClass('moved_work')
			// 			wrap.after($('.moved_work'))
			// 		}
			// 	}
			// 	if($(window).width() > 585) {
			// 		if (text.hasClass('moved_work')) {
			// 			$('.work-page__title-wrap').after($('.moved_work'))
			// 			$('.moved_work').removeClass('moved_work')
            //
			// 		}
			// 		if ($('.work-page__col--tablet-image').length >= 1) {
			// 			if (el_2.is(':visible')) {
			// 				el_2.hide()
			// 				$('.work-page__col--tablet-image').show()
			// 			}
			// 		}
			// 		if ($('.work-page__col--tablet-image').length ==0) {
			// 			var clone = el_2.clone()
			// 			el_2.hide()
			// 			el_1.find('.work-page__desc').prepend(clone)
			// 			clone.addClass('work-page__col--tablet-image')
			// 		}
            //
			// 	}
            //
			// 	if ($(window).width() > 785 ) {
			// 		if ($('.work-page__col--tablet-image').length >= 1) {
			// 			$('.work-page__col--tablet-image').remove()
			// 			el_2.show()
			// 		}
            //
			// 	}
			// 	}
			// })


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
