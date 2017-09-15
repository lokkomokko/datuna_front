<template>
	<!-- start wrap	 -->
	<div>
		<!-- menu -->
		<div class="menu">
			<div class="menu__icon" v-html="menu"></div>
		</div>
		<div class="wrapper-header">
			<!-- sticky top part -->
			<header class="header">
				<p class="header__title title-usual">DAVID DATUNA</p>			
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
		
		<div class="world-block container container--gray">
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum molestias repudiandae voluptate aperiam doloremque nemo voluptates facere doloribus tenetur molestiae, porro eius quis. Totam quas possimus qui est aliquid perspiciatis.</div>
			<div>Minus dolore magnam molestias a reiciendis laudantium totam veritatis distinctio quos, delectus, eveniet nobis accusamus! Maiores excepturi nisi culpa eaque omnis ipsam voluptates facilis dolorum. Dicta iure quos ipsam corrupti.</div>
			<div>Fugit, excepturi. Saepe nobis animi asperiores perferendis error explicabo harum, quia alias ratione itaque accusamus cupiditate cum praesentium, distinctio sed optio repellendus. Eos doloribus omnis quo eveniet placeat, porro enim.</div>
			<div>Esse sunt facere tenetur animi, fugit nesciunt debitis mollitia dolorem explicabo dignissimos temporibus, ab itaque obcaecati nisi, error, nemo quam! Voluptates quae laudantium, corporis eius impedit et harum itaque explicabo.</div>
			<div>Asperiores maiores quibusdam omnis deserunt voluptate accusantium dolore sit et maxime molestias officiis quisquam tempore corrupti sunt alias esse vel voluptates recusandae aperiam eius dolorem cupiditate quos, autem. Asperiores, non.</div>
			<div>At exercitationem architecto similique modi quos esse nisi ducimus est dolorum! Necessitatibus amet excepturi consectetur, possimus mollitia pariatur ab architecto nesciunt assumenda quia, doloribus fugit. Similique repellat explicabo est illum.</div>
			<div>Minima maiores quo aspernatur cumque a. Quia perspiciatis adipisci sapiente porro corporis animi illo eum vitae architecto autem? Temporibus molestiae ut vel aliquid explicabo suscipit itaque odio. Harum, voluptate consequatur.</div>
			<div>Molestias dolor nam, dolores, voluptate expedita corporis dolore ratione! Maiores provident hic dignissimos voluptates culpa ducimus necessitatibus aut cumque numquam a error, facere accusantium, excepturi quibusdam quis? Possimus, optio, odit.</div>
			<div>Soluta expedita molestiae magni, labore esse sit aliquam enim officia voluptatibus, perspiciatis omnis voluptatum tempora placeat atque rerum. Quia officiis sed a veritatis ipsa. Vitae reprehenderit, voluptas a provident! Illum!</div>
			<div>Voluptas quaerat, molestias consectetur iste! Delectus sed ipsa ratione laudantium, doloribus perferendis quae sit, maxime minus temporibus similique vitae ipsum magnam quam accusantium a accusamus officia autem illo eligendi itaque!</div>
		</div>


	</div>

</template>



<script>

// import svg
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import menu from '../assets/img/svg/menu.svg'
import logo from '../assets/img/svg/logo.svg'

let i = 1;
export default {
	name: 'Home',
	data () {
		return {
			// svg
			btn_arrow: render_svg(btn_arrow), 
			menu: render_svg(menu),
			logo: render_svg(logo),

			// scroll
			needScroll: false
		}
	},

	mounted: function() {

		// paralax main page top sect	
		const header_image = document.querySelector('.header__image'),
			separate_block = document.querySelector('.separate-block'),
			bottom_block = document.querySelector('.header__bottom-block-wrapper')

	    window.onscroll = function(e) {
	        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	        header_image.style.transform = `translateY(${scrolled * -0.5}px)`;
	        console.log(scrolled, separate_block.offsetHeight)

			if (scrolled >= separate_block.offsetHeight) {
				bottom_block.classList.add('header__bottom-block-wrapper--static')

			}	        
			else {
				bottom_block.classList.remove('header__bottom-block-wrapper--static')
			}
	    };  




	}
}
</script>

<style lang="scss">
	@import "../assets/css/settings.scss";

	body {
		// background-color: $blue;
	}

</style>

