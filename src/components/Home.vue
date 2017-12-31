<template>
	<!-- start wrap	 -->
	<div>
		<div class="wrapper-header">
			<!-- sticky top part -->
			
			<header class="header">
											
				<div class="header__image-wrap">
					<picture>
						<source media="(max-width: 500px)" :srcset="domain + 'images/thumb/' + main_image">
						<img class="header__image" :src="domain + 'images/' + main_image" alt="">
					</picture>				
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
				<p class="separate-block__text">{{desc_main}}</p> <br>
				<router-link class="button" to="/bio">
					more
					<span class="button__arrow" v-html="btn_arrow"></span>
				</router-link>				

			</div>
		</div>
		
		<div class="world-section container container--gray">
			<section class="common-block common-block_news">
				<div class="common-block__mobile-sep title-h4">
					HIS WORLD.
				</div>
				<h2 class="common-block__title title-h2">news</h2>
				<div class="common-block__item-wrap">


					<router-link :to="{ name: 'New_page', params: { newId: item.id }}" class="common-block__item" v-for="item in data.news" key="item.id">
						<div class="common-block__item-image">
							<img :src="item.image"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							{{item.title}}
						</h5>
					</router-link>

 
				</div>

				<router-link to="/news" class="common-block__button world-section__button button">
					more
					<span class="button__arrow" v-html="btn_arrow"></span>
				</router-link>													
			</section>	

			<section class="sp-index">
				<h2 class="common-block__title title-h2">special projects</h2>
				<div class="common-block__item-wrap">


					<router-link :to="{ name: 'Special_project', params: { projId: item.id }}" class="common-block__item" v-for="item in data.sp" key="item.id">
						<div class="common-block__item-image">
							<img :src="item.image"alt="" >
						</div>
						<h5 class="common-block__item-desc">
							{{item.title}}
						</h5>
					</router-link>

 
				</div>

				<router-link to="/special-projects" class="common-block__button world-section__button button">
					more
					<span class="button__arrow" v-html="btn_arrow"></span>
				</router-link>					
			</section>


<!-- 			<section class="foundation">
				
				<router-link to="/foundation" class="foundation__image">
					<h2 class="foundation__title title-h2">foundation</h2>
					<img :src="found_image" alt="">
				</router-link>
				<div class="foundation__text-wrap">
					<div class="foundation__text" v-html="found_desc">
						 
					</div>
					<router-link to="/foundation" class="foundation__button world-section__button button" href="">
						more
						<span class="button__arrow" v-html="btn_arrow"></span>
					</router-link>					
				</div>				

			</section> -->
			
			<section class="common-block common-block_instagram">
			
				<h2 class="common-block__title title-h2">INSTAGRAM</h2>
				<div class="common-block__item-wrap">
					<a target="_blank" v-for="(item, index) in instagram_data" :href="item.link" class="common-block__item" :key="index">
						<div class="common-block__item-image">
							<img :src="item.images.low_resolution.url" alt="" >
						</div>
					</a>					
				</div>

				<a class="common-block__button world-section__button button" href="https://www.instagram.com/david_datuna/">
					more
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
				
				<router-link :to="{ name: 'Works_categories', params: { workName: (item.category_name).toLowerCase(), workId: item.title }}" :class="index % 2 ? 'arts-section__item arts-section__item-reverse art-item' : 'arts-section__item art-item'" v-for="(item, index) in data.works" :key="index">
				<template v-if="index % 2">
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">{{item.category_name}}</h4>
							</div>
							<p class="art-item__desc">
								{{item.desc}}
							</p>
							<div class="art-item__button button" href="">
								more
								<span class="button__arrow" v-html="btn_arrow"></span>
							</div>								
						</div>
					</div>	
					<div class="art-item__image">
						<img :src="item.image" alt="">
					</div>				
				</template>
				<template v-else>

					<div class="art-item__image">
						<img :src="item.image" alt="">
					</div>	
					<div class="art-item__text">
						<div class="art-item__text-wrap-inner">
							<div class="art-item__title-wrap">
								<h4 class="art-item__title title-h4">{{item.category_name}}</h4>
							</div>
							<p class="art-item__desc">
								{{item.desc}}
							</p>
							<div class="art-item__button button" href="">
								more
								<span class="button__arrow" v-html="btn_arrow"></span>
							</div>								
						</div>
					</div>										
				</template>
				</router-link>

	<!-- arts-section__item-reverse art-item				 -->
				
			</div>
			
		</section>


	</div>

</template>



<script>

// import svg
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import logo from '../assets/img/svg/logo.svg'
import domain from '../assets/js/config.js'

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
			// backend data
			data: {},
			found_desc: '',
			found_image: '',
			desc_main: '',
			main_image: '',
			domain : domain,


		}
	},

	created: function() {

		const self = this
		document.title = "David Datuna";	
		axios.get(domain + 'api')
		  .then(function (response) {
		  	
		  	self.data = response.data
		  	self.main_image = self.data.main_desc.main_image
		  	self.desc_main = self.data.main_desc.desc_main
		  	
		  	self.data.news.map((e) => {
		  		e.image = domain +'/images/thumb/' + e.image
		  	})
		  	self.data.sp.map((e) => {
		  		e.image = domain +'/images/thumb/' + e.image
		  	})

		  	self.data.works.map((e) => {
		  		e.image = domain +'/images/thumb/' +  e.image
		  	})		  	
		  	self.found_image = domain +'/images/thumb/' + self.data.found.glob_found_image 

		  	self.found_desc = self.data.found.glob_found
		  	console.log(self.data);

		  })
		  .catch(function (error) {
		    console.log(error);
		  });

  
	},

	mounted: function() {

		var that = this

		if (this.$route.name == 'Home1') {
			
			console.log(this.$route.params.id , this.$cookie.get('id'));
			if (this.$route.params.id == this.$cookie.get('id')) {
				
				setTimeout(()=> {
						$.post(
						  domain + 'subscribe-api/add',
						  {
						    email: that.$cookie.get('email')
						  },
						  onAjaxSuccess,
						);
						function onAjaxSuccess(data)
						{
						  console.log(data);
						  	alert('Email подтвержден')
						  if (that.$cookie.get('id')) {
						  	 that.$cookie.delete('id')
						  }
						}					
					}, 500)
			}
		}


		const header_image = document.querySelector('.header__image'),
			separate_block = document.querySelector('.separate-block'),
			bottom_block = document.querySelector('.header__bottom-block-wrapper'),
			main_wrapper = document.querySelector('#app'),
			
			header = document.querySelector('.wrapper-header');
			
			document.querySelector('.header__title').style.opacity = 1;

			  window.onscroll = function() {
	        var scrolled = window.pageYOffset || document.documentElement.scrollTop;


	        header_image.style.transform = `translateY(${scrolled * -0.13}vh)`;

	        if ($(window).width() < 600) {
	        	header_image.style.transform = `translateY(${scrolled * -0.16}vh)`;
	        }

			


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


			  };
			  $(window).trigger('scroll')
			





	    // istagram **********************************
		var token = '200786573.5e2d10c.779acf6471294b1192cac880ffed8259',
		userid = 200786573,
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

