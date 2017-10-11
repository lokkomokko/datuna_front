import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Works from '@/components/Works'
import Special_projects from '@/components/Special_projects'
import Works_categories from '@/components/Works_categories'
import Work_page from '@/components/Work_page'
import Special_project from '@/components/Special_project'
import News from '@/components/News'
import New_page from '@/components/New_page'
import Media from '@/components/Media'
import Photos from '@/components/Photos'
import Gallery from '@/components/Gallery'
import Video from '@/components/Video'
import Movie from '@/components/Movie'


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
		},
		{
			path: '/works',
			name: 'Works',
			component: Works
		},
		{
			path: '/special-projects',
			name: 'Special_projects',
			component: Special_projects
		},
		{
			path: '/works-categories',
			name: 'Works_categories',
			component: Works_categories
		},
		{
			path: '/work-page',
			name: 'Work_page',
			component: Work_page
		},
		{
			path: '/special-project',
			name: 'Special_project',
			component: Special_project
		},
		{
			path: '/news',
			name: 'News',
			component: News
		},
		{
			path: '/new-page',
			name: 'New_page',
			component: New_page
		},
		{
			path: '/media',
			name: 'Media',
			component: Media
		},
		{
			path: '/photos',
			name: 'Photos',
			component: Photos
		},
		{
			path: '/gallery',
			name: 'Gallery',
			component: Gallery
		},
		{
			path: '/videos',
			name: 'Video',
			component: Video
		},
		{
			path: '/movie',
			name: 'Movie',
			component: Movie
		}																													
	]
})
