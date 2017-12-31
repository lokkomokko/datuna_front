<template>
	<div>

		<section class="work-page__container work-page__container--foundation-page container">

			<div class="work-page__col work-page__col-foundation">
				<div class="work-page__text-wrap work-page__text-wrap--single-project">
					<div class="arts-block__title-wrap page__title-separator page__title-separator--foundation-page">
						<p class="arts-section__title title-h4">foundation</p>
					</div>				

					<div class="work-page__desc work-page__desc--foundation" v-html="glob_found">
						
					</div>					
				</div>
			</div>				
			<div class="work-page__col">
					<img :src="glob_found_image" alt="" class="work-page__image">
			</div>

			<section class="foundation foundation__page">
				
				<router-link to="/foundation/awards" href="" class="foundation__image foundation__image--foundation-page">
					<h2 class="foundation__title title-h2">awards</h2>
					<img :src="awards_image" alt="">
				</router-link>
				<div class="foundation__text-wrap">
					<div class="foundation__text" v-html="awards"></div>
						
					<router-link class="foundation__button world-section__button button" to="/foundation/awards">
						read more
						<span class="button__arrow" v-html="btn_arrow"></span>
					</router-link>					
				</div>				

			</section>

			<section class="foundation foundation__page">
				
				<router-link to="/foundation/projects" class="foundation__image foundation__image--foundation-page">
					<h2 class="foundation__title title-h2">projects</h2>
					<img :src="found_image" alt="">
				</router-link>
				<div class="foundation__text-wrap">
					<div class="foundation__text" v-html="found"></div>
						
					<router-link class="foundation__button world-section__button button" to="/foundation/projects">
						read more
						<span class="button__arrow" v-html="btn_arrow"></span>
					</router-link>					
				</div>				

			</section>			

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
				data: {},
				glob_found: [],
				glob_found_image: '',
				awards: '',
				found_image: '',
				found: '',
				awards_image: '',

			}
		},
		name: 'Foundation',
		created: function() {
			document.title = "Foundation. David Datuna";

			const self = this

			axios.get(domain + 'api/foundation?type=all')

			  .then(function (response) {
			  		self.data = response.data;
			  		// self.data.works.map((e)=>{
				  	// 	e.image = domain + e.image
			  		// })
			  		self.glob_found_image = domain +'/images/'+ self.data[0].glob_found_image 
			  		self.found_image = domain +'/images/thumb/'+ self.data[0].found_image
			  		self.awards_image = domain +'/images/thumb/'+ self.data[0].awards_image

			  		self.glob_found = self.data[0].glob_found

			  		self.awards = self.data[0].awards
			  		self.found = self.data[0].found
			  		console.log(self.data)

			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},		
		mounted: function() {
			setTimeout(() => {
			if ($(window).width() < 585) {
				$('.work-page__image').after($('.work-page__desc--foundation'))
				$('.work-page__desc--foundation').addClass('moved_work')
			}

			}, 400)




			$(window).resize(()=>{
				if (this.$route.name == 'Foundation') {
				var wrap = $('.work-page__image') 
				var text = $('.work-page__desc--foundation')				
					if ($(window).width() < 585) {
						if (!text.hasClass('moved_work')) {
							console.log("!text.hasClass('moved_work')", $('.work-page__desc--foundation'))
							text.addClass('moved_work')
							wrap.after($('.moved_work'))
						}
					}				
					else {
						if (text.hasClass('moved_work')) {
							console.log("text.hasClass('moved_work')")

							$('.moved_work').removeClass('moved_work')
							$('.work-page__col.work-page__col-foundation').append(text)
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

