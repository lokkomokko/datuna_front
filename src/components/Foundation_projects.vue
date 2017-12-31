<template>
	<div>

		<div class="work-page__container work-page__container--for-foundation container">

			<div class="work-page__col work-page__col-foundation">
				<div class="work-page__text-wrap work-page__text-wrap--single-project">
					<div class="arts-block__title-wrap page__title-separator page__title-separator--foundation-page" >
						<router-link to="/foundation" class="arts-section__title arts-section__title--cat-page  title-h4">Foundation/<br><span class="cat-page__name">projects</span></router-link>
					</div>				

					<div class="work-page__desc" v-html="data.static[0].found"></div>					
				</div>
			</div>				
			<div class="work-page__col">
					<img :src="data.static[0].found_image" alt="" class="work-page__image">
			</div>				
		</div>
		
			<router-link :to="{ name: 'Foundation_project', params: { projId: item.id }}" class="foundation-project__item" v-for="item in data.proj" :key="item.id">
				<div class="foundation-project__item-image-wrap">
					<img :src="item.image" height="590" width="1104" alt="" class="foundation-project__item-image">
				</div>
				<div class="foundation-project__item-text">
					<h3 class="foundation-project__item-title">{{item.title}}</h3>
					<p class="foundation-project__item-desc">
						{{item.main_desc}}
					</p>
					
				</div>	
			</router-link>

							

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
				data: {}
			}
		},
		name: 'Foundation_projects',
		created: function() {

			const self = this
			document.title = "Foundation projects. David Datuna";
			axios.get(domain +'api/foundation?type=projects')

			  .then(function (response) {
			  		self.data = response.data;
			  		self.data.proj.map((e)=>{
				  		e.image = domain + 'images/'+ e.image
			  		})
			  		self.data.static[0].found_image = domain + '/images/' + self.data.static[0].found_image


			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},			
		mounted: function() {
			// setTimeout(() => {
			// 	$('body').getNiceScroll().resize()
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

