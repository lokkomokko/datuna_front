<template>
		<!-- menu -->
		<div class="menu">

		<div class="wrap-f-title">
			<router-link to="/" class="header__title title-usual">DAVID DATUNA</router-link>
		</div>

			<div class="menu__icons">
				<div class="menu__icon-item" v-if="should_open"  v-html="menu"></div>
				<div class="menu__icon-item-close" v-else v-html="menu_close"></div>

			</div>


			<nav class="menu__nav">
				<router-link to="/works" class="menu-item">WORKS</router-link>
				<router-link to="/special-projects" class="menu-item">SPECIAL PROJECTS</router-link>
				<!-- <router-link to="/foundation" class="menu-item">FOUNDATION</router-link> -->
				<router-link to="/bio" class="menu-item">BIO</router-link>
				<router-link to="/movie" class="menu-item">MOVIE</router-link>
				<router-link to="/media" class="menu-item">MEDIA</router-link>
				<router-link to="/news" class="menu-item">PRESS</router-link>
        <a href="https://shop.datuna.com" class="menu-item" rel="noopener" target="_blank">Hungry artist</a>
				<!-- <a href="http://shoplink.com" class="menu-item" target="_blank">SHOP</a>	 -->

				<div class="nav__social">
					<a href="https://www.facebook.com/ddatuna" target="_blank" class="nav__social-link">
						<div v-html="fb"></div>
					</a>
					<a href="https://www.instagram.com/david_datuna/" target="_blank" class="nav__social-link">
						<div v-html="ins"></div>
					</a>
				</div>
			</nav>
		</div>
</template>

<script>
import render_svg from '../assets/js/render_svg.js'
import menu from '../assets/img/svg/menu.svg'
import ins from '../assets/img/svg/in.svg'
import fb from '../assets/img/svg/fb.svg'
import menu_close from '../assets/img/svg/menu-close.svg'


	export default {
	  name: 'menuTemplate',
	  data() {
	  	return {
			menu: render_svg(menu),
			fb: render_svg(fb),
			ins: render_svg(ins),
			menu_close: render_svg(menu_close),
			// scroll
			should_open: true

	  	}
	  },
	  mounted: function() {

		const menu = document.querySelector('.menu'),
		that = this


		var menu_count = 0

	    menu.querySelector('.menu__icons').onclick = function() {
	    	menu.classList.toggle('menu--open')
	    	if (menu_count === 0) {
		    	setTimeout(()=>{
		    		document.querySelector('.header__title').classList.add('header__title--change-color')
		    	}, 200)
		    	menu_count = 1
	    	}
	    	else {
	    		document.querySelector('.header__title').classList.remove('header__title--change-color')
	    		menu_count = 0
	    	}
	    	that.should_open = !that.should_open
	    };
	   	for(const item of menu.querySelectorAll('.menu-item')) {
		    item.onclick = function() {
		    	menu.classList.remove('menu--open')
	    		document.querySelector('.header__title').classList.remove('header__title--change-color')
	    		menu_count = 0
		    	that.should_open = true
	    	}
		}
	    document.querySelector('.header__title').onclick = function() {
	    	menu.classList.remove('menu--open')
    		document.querySelector('.header__title').classList.remove('header__title--change-color')
    		menu_count = 0
	    	that.should_open = true
	    }

			document.querySelector('.menu__nav').style.width = document.querySelector('.header__title').getBoundingClientRect().left + 200 + 'px'
			  window.onresize = function() {
				document.querySelector('.menu__nav').style.width = document.querySelector('.header__title').getBoundingClientRect().left + 200 + 'px'
			  }

		$(document).on('click', function(e) {
			if ($(e.target).closest('.menu').length === 0) {
				$('.menu').removeClass('menu--open')
				that.should_open = true

			}
		})

	  }

	}
</script>
