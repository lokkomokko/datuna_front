<template>
	<!-- start wrap	 -->
	<div>
		<!-- menu -->
		<div class="menu">
			<div class="menu__icons">
				<div class="menu__icon-item" v-if="should_open" v-on:click="" v-html="menu"></div>
				<div class="menu__icon-item-close" v-else v-on:click="" v-html="menu_close"></div>
				
			</div>

			<p class="header__title title-usual">DAVID DATUNA</p>
			<nav class="menu__nav">
				<a href="" class="menu-item">WORKS</a>
				<a href="" class="menu-item">SPECIAL PROJECTS</a>
				<a href="" class="menu-item">FOUNDATION</a>
				<a href="" class="menu-item">BIO</a>
				<a href="" class="menu-item">MOVIE</a>
				<a href="" class="menu-item">MEDIA</a>
				<a href="" class="menu-item">PRESS</a>
				<a href="" class="menu-item">SHOP</a>
				<div class="nav__social">
					<a href="" class="nav__social-link">
						<div v-html="fb"></div>
					</a>
					<a href="" class="nav__social-link">
						<div v-html="ins"></div>
					</a>
				</div>
			</nav>
		</div>
		<div class="wrapper-header">
			<!-- sticky top part -->
			<header class="header">
							
				<div class="header__image-wrap">
					<img src="../assets/img/h1.png" class="header__image">
					<div class="header__logo" v-html="logo"></div>
				</div>				
				<div class="header__empty-block"></div>
			</header>			
			
		</div>		

		<div class="separate-block">
			<div class="header__bottom-block-wrapper">
				<div class="header__bottom-block">	
					<h4 class="header__bottom-block-title  title-h4">HIS WORLD.</h4>
					<h4 class="header__bottom-block-title title-h4">HIS ART.</h4>
					<p class="header__bottom-block-scroll small-text">scroll down</p>
				</div>					
			</div>	
			<div class="separate-block__right-site">
				<p class="separate-block__text">David Datuna is a New York-based artist focused on the convergence of art and social consciousness</p> <br>
				<a class="button" href="">
					read more
					<span class="button__arrow" v-html="btn_arrow"></span>
				</a>				

			</div>
		</div>
		
		<div class="world-section container container--gray">
			<section class="common-block common-block_news">
				<h2 class="common-block__title title-h2">news</h2>
				<div class="common-block__item-wrap">
					<a href="" class="common-block__item">
						<div class="common-block__item-image">
							<img src="../assets/img/n1.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							David Datuna Unveils "Unity" Project
						</h5>
					</a>
					<a href="" class="common-block__item">
						<div class="common-block__item-image">
							<img src="../assets/img/n2.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Trump. That's all that was spelled out this afternoon when artist David Datuna laid down some cool art in Union Square
						</h5>
					</a>
					<a href="" class="common-block__item">
						<div class="common-block__item-image">
							<img src="../assets/img/n3.png"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							Political artist David Datuna featured in Greenwich gallery exhibit
						</h5>
					</a>					
				</div>

				<a class="common-block__button world-section__button button" href="">
					read all news
					<span class="button__arrow" v-html="btn_arrow"></span>
				</a>													
			</section>	

			<section class="foundation">
				
				<div class="foundation__image">
					<h2 class="foundation__title title-h2">foundation</h2>
					<img src="../assets/img/f1.png" alt="">
				</div>
				<div class="foundation__text-wrap">
					<p class="foundation__text">
						Following his battle with cancer, Datuna established The Fund for Life, a philanthropic organization dedicated to fighting fatal diseases worldwide. In conjunction with the Fund, David also established the Life Award, which is given to corporations and individuals for exceptional contributions to sustaining and saving of human lives. 
					</p>
					<a class="foundation__button world-section__button button" href="">
						read more
						<span class="button__arrow" v-html="btn_arrow"></span>
					</a>					
				</div>				

			</section>
			
			<section class="common-block common-block_instagram">
				<h2 class="common-block__title title-h2">INSTAGRAM</h2>
				<div class="common-block__item-wrap">
					<a href="" class="common-block__item">
						<div class="common-block__item-image">
							<img src="../assets/img/i1.png"alt="" >
						</div>
					</a>
					<a href="" class="common-block__item">
						<div class="common-block__item-image">
							<img src="../assets/img/i2.png"alt="" >
						</div>
					</a>
					<a href="" class="common-block__item">
						<div class="common-block__item-image">
							<img src="../assets/img/i3.png"alt="" >
						</div>
					</a>					
					<a href="" class="common-block__item">
						<div class="common-block__item-image">
							<img src="../assets/img/i4.png"alt="" >
						</div>
					</a>					
				</div>

				<a class="common-block__button world-section__button button" href="">
					profile
					<span class="button__arrow" v-html="btn_arrow"></span>
				</a>													
			</section>

		</div>

		<section class="arts-section">

			<div class="arts-section__top-separator container">
				<div class="arts-block__title-wrap">
					<h3 class="arts-section__title title-h4">his art.</h3>
				</div>
			</div>

			<div class="arts-section__container container container--gray">
				
				<div class="arts-section__item art-item">
					<div class="art-item__image">
						<img src="../assets/img/a1.png" alt="">
					</div>	
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">flag</h4>
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
				</div>

				<div class="arts-section__item art-item">	
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
				</div>				
				
			</div>
			
		</section>


	</div>

</template>



<script>

// import svg
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import menu from '../assets/img/svg/menu.svg'
import logo from '../assets/img/svg/logo.svg'
import ins from '../assets/img/svg/in.svg'
import fb from '../assets/img/svg/fb.svg'
import menu_close from '../assets/img/svg/menu-close.svg'

let i = 1;
export default {
	name: 'Home',
	data () {
		return {
			// svg
			btn_arrow: render_svg(btn_arrow), 
			menu: render_svg(menu),
			logo: render_svg(logo),
			fb: render_svg(fb),
			ins: render_svg(ins),
			menu_close: render_svg(menu_close),

			// scroll
			should_open: true
		}
	},

	mounted: function() {

		// paralax main page top sect	
		const header_image = document.querySelector('.header__image'),
			separate_block = document.querySelector('.separate-block'),
			bottom_block = document.querySelector('.header__bottom-block-wrapper'),
			that = this,
			menu = document.querySelector('.menu'),
			header = document.querySelector('.wrapper-header');
			

	    window.onscroll = function(e) {
	        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	        header_image.style.transform = `translateY(${scrolled * -0.13}vh)`;
				

			if (scrolled >= separate_block.offsetTop - 100) {
				menu.querySelector('.header__title').style.opacity = 0
			}
			if (scrolled < separate_block.offsetTop - 100) {
				menu.querySelector('.header__title').style.opacity = 1
			}

			if (scrolled >= separate_block.offsetHeight) {
				bottom_block.classList.add('header__bottom-block-wrapper--static');

				if (scrolled >= separate_block.offsetHeight * 2 ) {
					header.classList.add('wrapper-header--close')
				}
				else {
					header.classList.contains('wrapper-header--close') ? header.classList.remove('wrapper-header--close') : true
				}

			}	        
			if (scrolled <= separate_block.offsetHeight){
				bottom_block.classList.remove('header__bottom-block-wrapper--static')
				
				
			}

	    };

	    menu.querySelector('.menu__icons').onclick = function() {
	    	menu.classList.toggle('menu--open')
	    	console.log(this.should_open)
	    	that.should_open = !that.should_open
	    }  

	}
}
</script>

<style lang="scss">
	@import "../assets/css/settings.scss";

	body {
		// background-color: $blue;
	}

</style>

