<template>
	<div>

		<div class="work-page__container container">

			<div class="work-page__col work-page__col-foundation work-page__col--text">
				<div class="work-page__text-wrap work-page__text-wrap--single-project">
					<div class="arts-block__title-wrap page__title-separator page__title-separator--foundation-page" >
						<p class="arts-section__title arts-section__title--cat-page  title-h4">Bio</p>
					</div>

					<div class="work-page__desc" v-html="data.bio">

					</div>
				</div>
			</div>
			<div class="work-page__col work-page__col--image work-page__col--preloader">
					<img :src="data.bio_image" alt="" class="work-page__image">
        <div class="spin-wrap">
          <div class="spin"></div>
        </div>

			</div>
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
				data:{}
			}
		},
		name: 'Bio',
		created: function() {
			document.title = "Bio. David Datuna";

			const self = this

			axios.get(domain +'api/static?type=bio')

			  .then(function (response) {

			  	self.data = response.data

			  	self.data.bio_image = domain + 'images/' + self.data.bio_image



			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},
    watch: {
      data : function() {
        imagesLoaded(document.querySelector('.work-page__col--image img'), function(e) {
          $('.work-page__col--image').removeClass('work-page__col--preloader')
        })
      },
    },

		mounted: function() {
			// setTimeout(() => {
			// 	$('body').getNiceScroll().resize()
			// }, 500)
      $('.spin-wrap').height($('.work-page__image').height())
			if ($(window).width() < 785 && $(window).width() > 585) {
				setTimeout(function() {

					var el_1 = $('.work-page__col--text')
					var el_2 = $('.work-page__col--image')
					var clone = el_2.clone()
					el_2.hide()
					el_1.find('.work-page__desc').prepend(clone)
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
				if (this.$route.name == 'Bio') {
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

