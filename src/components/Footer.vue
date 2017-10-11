<template>
	<footer class="footer">
		<div class="footer__wrapper">
			<div class="footer__container container">
				<div class="footer__col footer__nav-wrap">
					<nav class="footer__nav">
						<router-link class="footer__nav-item link-2" to="/works">works</router-link>
						<router-link class="footer__nav-item link-2" to="/special-projects">SPECIAL PROJECTS</router-link>	
						<router-link class="footer__nav-item link-2" to="/foundation">FOUNDATION</router-link>	
						<router-link class="footer__nav-item link-2" to="/bio">BIO</router-link>	
						<router-link class="footer__nav-item link-2" to="/movie">MOVIE</router-link>	
						<router-link class="footer__nav-item link-2" to="/media">MEDIA</router-link>	
						<router-link class="footer__nav-item link-2" to="/press">PRESS</router-link>	
						<router-link class="footer__nav-item link-2" to="/shop">SHOP</router-link>
					</nav>
				</div>
				<div class="footer__col footer__sign-wrap">
					<div class="footer__sign-title">
						Sign up for the Datuna newsletter:
					</div>
					<input type="text" placeholder="Your e-mail address" class="footer__sign-input">
					<div class="footer__sign-button button" href="">
						sign me up
						<span class="button__arrow" v-html="btn_arrow"></span>
					</div>					
				</div>
				<div class="footer__col footer__copy">
					© David Datuna 2017 <br>
					Developed by x4				
				</div>
			</div>			
		</div>
	</footer>
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
		name: 'Footer_component',

	}
</script>

