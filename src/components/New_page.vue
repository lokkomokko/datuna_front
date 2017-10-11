<template>
	<div>

		<section class="work-page__container container">

			<div class="work-page__col">
				<div class="work-page__text-wrap work-page__text-wrap--single-project">
					<div class="arts-block__title-wrap page__title-separator">
						<p class="arts-section__title arts-section__title--cat-page title-h4">News</p>
					</div>				
					<div class="work-page__title-wrap work-page__title-wrap-for-page">
						<h1 class="work-page__title title-h1">New book’s presentation at the White House</h1>						
					</div>
					<div class="work-page__desc">
						<span class="work-page__desc-date">15/05 2017</span> <br>

						Today American artist David Datuna channeled the feelings expressed by most Americans and a majority of the world community in response to President Trump’s withdrawal of the United States from the Paris Climate Agreement in a new art performance called “This Too Shall Pass.”
						<br><br>
						The artist formed the President’s name in 10-foot ice letters New York’s Union Square Park, juxtaposing Trump’s challenge to the environment against the environment itself. The ice sculpture  melted,  echoing the words attributed to Biblical King Solomon, Sufi poet Sanai, and more recently used by English poet Scott Fitzgerald “This too shall pass,” reflecting on the evanescence of the human condition. 
						<br><br>
						“My art and my social activism have always been about creating a better world for our children,” said David Datuna. “There is no question that President Trump now chose to take us all a step back. But as we all saw today here in Union Square Park, the Universe always has the final say, and no one can stand in its way. That was the message President Lincoln left us when he used the words ‘This too shall pass’ before his own inauguration.” 
						<br><br>
						For more images please visit the artist’s Facebook page
					</div>					
				</div>
			</div>				
			<div class="work-page__col">
					<img src="../assets/img/np1.png" alt="" class="work-page__image">



			</div>				
		</section>
		<div class="work-page__buttons container">
			<div class="button button--reverse" href="">
				<span class="button__arrow" v-html="btn_arrow"></span>
				previous
			</div>				
			<div class="button" href="">
				next
				<span class="button__arrow" v-html="btn_arrow"></span>
			</div>				
		</div>

	</div>
</template>

<script>
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'

	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow), 
			}
		},
		name: 'New_page',
		mounted: function() {
			setTimeout(() => {
				$('body').getNiceScroll().resize()
			}, 500)


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

