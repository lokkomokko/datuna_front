<template>
	<div>
		<section class="arts-section arts-section--works arts-section--cat">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<router-link to="/works" class="arts-section__title arts-section__title--cat-page title-h4">Works/<br><span class="cat-page__name">{{cat_id.category_name}}</span></router-link>
				</div>
				<div class="arts-block__right-col">
					<div class="arts-block__category-desc-wrap">
						<p class="arts-block__category-desc">
							{{cat_id.desc}}
						</p>
					</div>
				</div>
			</div>

			<div class="cat-page__container container container--white"   >
				<!-- <div class=""> -->
				<!-- <div id="test"></div> -->
				<!-- <div id="test2"></div> -->

					<router-link :to="{name: 'Work_page', params : {workId: item.id, workName: cat_id.category_name.toLowerCase().replaceAll(' ', '-')} }" class="cat-page__item cat-page__item--preloader" v-for="item in data.works" :key="item.id">
					<img :src="item.image" alt="" class="cat-page__item-img">
					<div class="spin-wrapper spin-wrapper--work-cat">
						<div class="spin"></div>
					</div>
					</router-link>
				<!-- </div> -->

			</div>




		</section>
		<div class="container cat-page__other-works" v-if="all_cat.length > 0">

			<p class="cat-page__other-works-name">Other works: </p><br>
			<template v-for="item in all_cat">
				<router-link :to="{ name: 'Works_categories', params: { workName: (item.category_name).toLowerCase().replaceAll(' ', '-'), workId: item.title }}" class="link-2">{{item.category_name}}</router-link><br>
			</template>

		</div>
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
				cat_id: [],
				all_cat: [],
				widthYes: ''
			}
		},
		name: 'Works_categories',

		created: function() {

			const self = this

			axios.get(domain +'api/works?type=cat_page&cat_name='+ self.$route.params.workName)

			  .then(function (response) {
			  		self.data = response.data;
			  		self.data.works.map((e)=>{
				  		e.image = domain  + 'images/thumb/' +  e.image
			  		})

			  		self.cat_id = self.data.cat_id
			  		self.all_cat = self.data.all_cat
					const grid = document.querySelector('.cat-page__container')

					// var pre = imagesLoaded($('.cat-page__container img'))
					// pre.on('always', function(e) {
					// 	// $('.cat-page__container img').on('load', function() {
					// 		// $('.cat-page__item').removeClass('cat-page__item--preloader')
					// 	// })
					// console.log(e)


					// })

					document.title = self.cat_id.category_name+". David Datuna";
			  })
			  .catch(function (error) {
			  	// window.location.href = '/404'

			    console.log(error);
			  });
		},
		updated: function() {
			  this.$nextTick(function () {
			  })

			imagesLoaded(document.querySelectorAll('.cat-page__container img'), function(e) {
				$('.cat-page__item').removeClass('cat-page__item--preloader')
			})

		},
		watch: {
		   	'$route' (to, from) {

				const self = this

				$('.cat-page__item').addClass('cat-page__item--preloader')

				axios.get(domain +'api/works?type=cat_page&cat_name='+ self.$route.params.workName)


				  .then(function (response) {
				  		self.data = response.data;
				  		self.data.works.map((e)=>{
					  		e.image = domain  + 'images/thumb/' +  e.image
				  		})

				  		self.cat_id = self.data.cat_id
				  		self.all_cat = self.data.all_cat



				  		document.title = self.cat_id.category_name.substr(0, 1).toUpperCase()+self.cat_id.category_name.substr(1)+". David Datuna";

				  })
				  .catch(function (error) {
				  	window.location.href = '/404'

				    console.log(error);
				  });
		    }
		},
		mounted: function() {

			this.widthYes = $(window).width()

			if ($(window).width() < 800) {
				$('.cat-page__container').append($('.arts-block__category-desc'))
				$('.arts-block__category-desc').addClass('moved')
			}
			var wrap = $('.cat-page__container')
			var text = $('.arts-block__category-desc')

			$(window).resize(()=>{
				this.widthYes = $(window).width()
				if ($(window).width() < 785) {
					if (!text.hasClass('moved')) {
						text.addClass('moved')
						wrap.prepend($('.moved'))
						console.log('if')
					}
				}
				else {
					if (text.hasClass('moved')) {
						$('.moved').removeClass('moved')
						$('.arts-block__category-desc-wrap').append(text)
						console.log('else')
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

