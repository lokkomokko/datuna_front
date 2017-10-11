<template>
	<!-- start wrap	 -->
	<div>
		<div class="wrapper-header">
			<!-- sticky top part -->
			
			<header class="header">
											
				<div class="header__image-wrap">
					<img src="../assets/img/h1.jpg" class="header__image">
					<div class="header__logo" v-html="logo"></div>
				</div>				
				<div class="header__empty-block"></div>
			</header>			
			
		</div>		
<!-- 		<div class="wrap-f-title">
			<p class="header__title title-usual">DAVID DATUNA</p>			
		</div> -->
		<div class="separate-block">
			<div class="header__bottom-block-wrapper">
				<div class="header__bottom-block">	
					<a href="" class="header__bottom-block-title  title-h4" v-scroll-to="{
     el: '.separate-block',
     duration: 1500}" >HIS WORLD.</a> <br>
					<a href="" class="header__bottom-block-title title-h4" v-scroll-to="{
     el: '.arts-section',
     duration: 1500,
      offset: -130,}" >HIS ART.</a>
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

				<router-link to="/news" class="common-block__button world-section__button button" href="">
					read all news
					<span class="button__arrow" v-html="btn_arrow"></span>
				</router-link>													
			</section>	

			<section class="foundation">
				
				<a href="" class="foundation__image">
					<h2 class="foundation__title title-h2">foundation</h2>
					<img src="../assets/img/f1.png" alt="">
				</a>
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
					<a target="_blank" v-for="item in instagram_data" :href="item.link" class="common-block__item">
						<div class="common-block__item-image">
							<img :src="item.images.low_resolution.url" alt="" >
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
					<p class="arts-section__title title-h4">his art.</p>
				</div>
			</div>

			<div class="arts-section__container container container--gray">
				
				<router-link to="/work-page" class="arts-section__item art-item">
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

				<a href='' class="arts-section__item arts-section__item-reverse art-item ">	
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
				
			</div>
			
		</section>


	</div>

</template>



<script>

// import svg
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import logo from '../assets/img/svg/logo.svg'

let jsonpAdapter = require('axios-jsonp');

// let i = 1;




export default {
	name: 'Home',
	data () {
		return {
			// svg
			btn_arrow: render_svg(btn_arrow), 
			logo: render_svg(logo),
			// insta
			instagram_data: [],

		}
	},
  	methods:{

	},

	mounted: function() {
			setTimeout(() => {
				$('body').getNiceScroll().resize()
			}, 300)
		// paralax main page top sect	
		const header_image = document.querySelector('.header__image'),
			separate_block = document.querySelector('.separate-block'),
			bottom_block = document.querySelector('.header__bottom-block-wrapper'),
			that = this,
			main_wrapper = document.querySelector('#app'),
			
			header = document.querySelector('.wrapper-header');
			
			document.querySelector('.header__title').style.opacity = 1;
			// document.querySelector('.menu__nav').style.width = document.querySelector('.header__title').getBoundingClientRect().left + 200 + 'px'
			//   window.onresize = function() {
			// 	document.querySelector('.menu__nav').style.width = document.querySelector('.header__title').getBoundingClientRect().left + 200 + 'px'			  	
			//   }			

			  window.onscroll = function() {
	        var scrolled = window.pageYOffset || document.documentElement.scrollTop;


	        header_image.style.transform = `translateY(${scrolled * -0.13}vh)`;

			


			if (scrolled >= separate_block.offsetTop - 100) {
				document.querySelector('.header__title').style.opacity = 0
			}
			if (scrolled < separate_block.offsetTop - 100) {
				document.querySelector('.header__title').style.opacity = 1
			}

			if (scrolled >= separate_block.offsetHeight) {
				bottom_block.classList.add('header__bottom-block-wrapper--static');
			}	    

			if (scrolled >= separate_block.offsetHeight * 2 ) {
				header.classList.add('wrapper-header--close')
			}
			
			if(scrolled < separate_block.offsetHeight * 2) {
				header.classList.contains('wrapper-header--close') ? header.classList.remove('wrapper-header--close') : true
			}			    

			if (scrolled <= separate_block.offsetHeight){
				bottom_block.classList.remove('header__bottom-block-wrapper--static')
				
				
			}


			    // if (t.rAF) return;
			    // t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
			    // t.scroll = t.target;



			  };
			// }




	    // istagram **********************************
		var token = '6046807226.dcce32a.395f836a5f3e4026aba6b2c0d4cda79f',
		userid = 6046807226,
		num_photos = 4;
 
		axios.get(`https://api.instagram.com/v1/users/${userid}/media/recent`, {
   		adapter: jsonpAdapter,			
		    params: {
		      access_token: token,
		      count: num_photos,
		    }
		  })
		  .then(function (data) {
		  		that.instagram_data = data.data.data;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });	



	}
}
</script>

<style lang="scss">
	@import "../assets/css/settings.scss";



</style>

