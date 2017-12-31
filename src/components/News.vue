<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title equal-sep title-h4">News</p>
				</div>
			</div>

			<div class="page__container container container--gray">
				
				<div class="common-block__item-wrap common-block__item-wrap-for-page">


					<router-link :to="{ name: 'New_page', params: { newId: item.id }}" class="common-block__item common-block__item-for-page" v-for="item in news_data" key="item.id">
						<div class="common-block__item-image common-block__no-hover">
							<img :src="item.image"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							{{item.title}}
						</h5>
					</router-link>


												
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
				news_data: []
			}
		},
		name: 'News',
		created: function() {
			
			const self = this
			document.title = "News. David Datuna";
	
			axios.get(domain +'api/news')
			  .then(function (response) {
			  		self.news_data = response.data.map((item)=>{
			  			item.image = domain + 'images/' + item.image 
			  			return item
			  		})

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
			document.title = "News David Datuna";

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