<template>
	<footer class="footer">
		<div class="footer__wrapper">
			<div class="footer__container container">
				<div class="footer__col footer__nav-wrap">
					<nav class="footer__nav">
						<router-link class="footer__nav-item link-2" to="/works">works</router-link>
						<router-link class="footer__nav-item link-2" to="/special-projects">SPECIAL PROJECTS</router-link>	
						<!-- <router-link class="footer__nav-item link-2" to="/foundation">FOUNDATION</router-link>	 -->
						<router-link class="footer__nav-item link-2" to="/bio">BIO</router-link>	
						<router-link class="footer__nav-item link-2" to="/movie">MOVIE</router-link>	
						<router-link class="footer__nav-item link-2" to="/media">MEDIA</router-link>	
						<router-link class="footer__nav-item link-2" to="/news">PRESS</router-link>	
						<!-- <router-link class="footer__nav-item link-2" to="/shop">SHOP</router-link> -->
					</nav>
				</div>
				<div class="footer__col footer__sign-wrap">

<!-- Begin MailChimp Signup Form -->


<div id="mc_embed_signup">
<form action="https://facebook.us14.list-manage.com/subscribe/post?u=aa5326c8d40e6d75431091083&amp;id=a764893fdd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<p class="footer__sign-title">Sign up for the Datuna newsletter:</p>

<div class="mc-field-group">
	
	<input type="email" value="" name="EMAIL" class="footer__sign-input required email" id="mce-EMAIL" placeholder="Your e-mail address">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_aa5326c8d40e6d75431091083_a764893fdd" tabindex="-1" value=""></div>
    <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="footer__sign-button button">
    sign me up
	<span class="button__arrow" v-html="btn_arrow"></span>
    </button>
    </div>
</form>
</div>

<!--End mc_embed_signup-->				
					<!-- <div class="footer__sign-title">
						Sign up for the Datuna newsletter:
					</div>
					
					<input v-validate data-vv-rules="required|email"  name="email" type="text" placeholder="Your e-mail address" class="footer__sign-input">
					<div class="footer__sign-button button" href="">
						sign me up
						<span class="button__arrow" v-html="btn_arrow"></span>
					</div> -->					
				</div>
				<div class="footer__col footer__copy">
					© David Datuna 2017<br>
					<a href="http://hivr.ru">Designed and developed by x4</a>				
				</div>
		
			</div>			
		</div>
	</footer>
</template>

<script>
import render_svg from '../assets/js/render_svg.js'
import btn_arrow from '../assets/img/svg/btn-arrow.svg'
import domain from '../assets/js/config.js'

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

	export default {
		data() {
			return {
				btn_arrow: render_svg(btn_arrow), 
				email: '',
			}
		},
		name: 'Footer_component',
		mounted: function() {
			// var self = this
			// $('.footer__sign-button').click(function() {


			// 	if (self.errors.has('email') == false && $('.footer__sign-input').val() !== '') {

			// 			var id = makeid()
			// 			// self.$session.start()
			// 			self.$cookie.set('id', id)
			// 			self.$cookie.set('email', $('.footer__sign-input').val())

			// 			$.post(
			// 			  domain + 'subscribe-api',
			// 			  {
			// 			    email: $('.footer__sign-input').val(),
			// 			    id: id 
			// 			  },
			// 			  onAjaxSuccess
			// 			);
			// 			function onAjaxSuccess(data)
			// 			{
			// 				alert('Вам было выслано письмо для поддтверждения рассылки');	
			// 				$('.footer__sign-input').val('');

			// 			}					  					
			// 	}
			// 	else {
			// 		alert('The email field must be a valid email.')
			// 	}
			// })
		}
	}
</script>

