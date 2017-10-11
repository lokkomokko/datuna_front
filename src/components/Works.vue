<template>
	<div>
		<section class="arts-section arts-section--works">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<p class="arts-section__title title-h4">Works</p>
				</div>
				<div class="arts-block__right-col">
					<div class="arts-block__links-wrap">
						<div class="arts-block__link-item"
							v-scroll-to="{
						     el: '#flags-block',
						     duration: 1500,
						     offset: -30}"
						 >flags</div>
						<div class="arts-block__link-item"
							v-scroll-to="{
							     el: '#arts-block',
							     duration: 1500,
							     offset: -30}"

						>portraits</div>
						<div class="arts-block__link-item"
							v-scroll-to="{
							     el: '#portraits-block',
							     duration: 1500,
							     offset: -30}"
						>icons</div>
					</div>
				</div>
			</div>

			<div class="arts-section__container container container--gray">
				
				<router-link to="works-categories" class="arts-section__item art-item" id="flags-block">
					<div class="art-item__image">
						<img src="../assets/img/a1.png" alt="">
					</div>	
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">flags</h4>
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

				<a href='' class="arts-section__item arts-section__item-reverse art-item" id="arts-block">	
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
						<img src="../assets/img/a2.png" alt="">
					</div>					
				</a>

				<a href='' class="arts-section__item art-item" id="portraits-block">
					<div class="art-item__image">
						<img src="../assets/img/icons.jpg" height="1094" width="1094" alt="">
					</div>	
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">ICONS</h4>
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
		name: 'Works',
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