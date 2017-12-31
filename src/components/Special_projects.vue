<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title title-h4">SPECIAL PROJECTS</p>
				</div>
				<div class="arts-block__right-col">
					<div class="arts-block__links-wrap">
						<div class="arts-block__link-item"
							v-scroll-to="{
						     el: '#_'+item.id,
						     duration: 1500,
						     offset: -30}"
						     v-for="item in data"
						 >{{item.title}}</div>

					</div>
				</div>
			</div>

			<div class="arts-section__container container container--gray">

				<router-link :to="{ name: 'Special_project', params: { projId: item.id }}" :class="index % 2 ? 'arts-section__item arts-section__item-reverse art-item' : 'arts-section__item art-item'" :id="'_'+item.id" v-for="(item, index) in data" :key="item.id">
				<template v-if="index % 2">
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">{{item.title}}</h4>
							</div>
							<p class="art-item__desc">
								{{item.desc_main}}
							</p>
							<div class="art-item__button button">
								more
								<span class="button__arrow" v-html="btn_arrow"></span>
							</div>
						</div>
					</div>
					<div class="art-item__image preloader">
						<img :src="item.image" alt="">
            <div class="spin-wrapper spin-wrapper--work">
              <div class="spin"></div>
            </div>
					</div>
				</template>
				<template v-else>

					<div class="art-item__image preloader">
						<img :src="item.image" alt="">
            <div class="spin-wrapper spin-wrapper--work">
              <div class="spin"></div>
            </div>

					</div>
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">{{item.title}}</h4>
							</div>
							<p class="art-item__desc">
								{{item.desc_main}}
							</p>
							<div class="art-item__button button" >
								more
								<span class="button__arrow" v-html="btn_arrow"></span>
							</div>
						</div>
					</div>
				</template>
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
				data: {}
			}
		},
		name: 'Special_projects',
		created: function() {


			const self = this
			document.title = "Special projects. David Datuna";

			axios.get(domain +'api/projects')
			  .then(function (response) {
			  		self.data = response.data
			  		self.data.map((e)=> {
				  		e.image = domain + 'images/'+ e.image
			  		})

			  })
			  .catch(function (error) {

			    console.log(error);
			  });
		},
    watch: {
      data : function() {
        imagesLoaded(document.querySelectorAll('.art-item__image img'), function(e) {
          $('.art-item__image').removeClass('preloader')
        })
      },
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
