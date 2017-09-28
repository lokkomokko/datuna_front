import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  // if (to.matched.some(m => m.meta.scrollToTop)) {
    return {x:0, y:0}
  // }
}

export default new Router({
	mode: 'history',
	scrollBehavior,
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
	}
	]
})
