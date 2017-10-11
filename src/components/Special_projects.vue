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
						     el: '#make',
						     duration: 1500,
						     offset: -30}"
						 >MAKE AMERICA STRONGER TOGETHER</div>
						<div class="arts-block__link-item"
							v-scroll-to="{
							     el: '#shall',
							     duration: 1500,
							     offset: -30}"

						>THIS TOO SHALL PASS</div>
						<div class="arts-block__link-item"
							v-scroll-to="{
							     el: '',
							     duration: 1500,
							     offset: -30}"
						>PROJECT 3</div>
						<div class="arts-block__link-item"
							v-scroll-to="{
							     el: '#portraits-block',
							     duration: 1500,
							     offset: -30}"
						>PROJECT 4</div>						
					</div>
				</div>
			</div>

			<div class="arts-section__container container container--gray">
				
				<router-link to="/special-project" class="arts-section__item art-item" id="make">
					<div class="art-item__image">
						<img src="../assets/img/n2.png" alt="">
					</div>	
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">MAKE AMERICA STRONGER TOGETHER</h4>
							</div>
							<p class="art-item__desc">
								Structurally, the eyeglasses are a symbolic expression of identity, illusion, perception, fragmentation and unification. 
							</p>
							<div class="art-item__button button" href="">
								explore
								<span class="button__arrow" v-html="btn_arrow"></span>
							</div>								
						</div>
					</div>
				</router-link>

				<a href='' class="arts-section__item arts-section__item-reverse art-item" id="shall">	
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">PORTRAITS</h4>
							</div>
							<p class="art-item__desc">
								Structurally, the eyeglasses are a symbolic expression of identity, illusion, perception, fragmentation and unification. 
							</p>
							<a class="art-item__button button" href="">
								explore
								<span class="button__arrow" v-html="btn_arrow"></span>
							</a>								
						</div>
					</div>
					<div class="art-item__image">
						<img src="../assets/img/sp1.png" alt="">
					</div>					
				</a>

								
				
			</div>
			
		</section>
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
		name: 'Special_projects',
		mounted: function() {
			setTimeout(() => {
				$('body').getNiceScroll().resize()
				console.log(3232323);
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