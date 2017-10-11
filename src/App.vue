<template>
  <div>
    <div id="app" class="main-wrapper">
      <menuTemplate></menuTemplate>
        <transition>
          <router-view></router-view>
        </transition>   
    </div>
    <Footer_component></Footer_component>  
  </div>


</template>

<script>
import niceScroll from  'jquery.nicescroll'

import menuTemplate from './components/Menu.vue'
import Footer_component from './components/Footer.vue'

export default {
  name: 'app',
  mounted: function() {
  	
		      $("body").niceScroll({
				    scrollspeed: 90, // scrolling speed 
				    mousescrollstep: 70,		      	
		      })  	
          $('body').getNiceScroll().resize()

  },
  components: {
  	menuTemplate,
    Footer_component
  },  
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}

.v-enter-active {
  transition-delay: .3s;
}

.v-enter, .v-leave-active {
  opacity: 0
}

</style>

<style lang="scss" src="./assets/css/main.scss"></style>
