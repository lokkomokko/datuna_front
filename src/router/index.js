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
import Foundation from '@/components/Foundation'
import Foundation_projects from '@/components/Foundation_projects'
import Foundation_project from '@/components/Foundation_project'
import Awards from '@/components/Awards'
import Bio from '@/components/Bio'
import Awards_project from '@/components/Awards_project'
import page404 from '@/components/404'

Vue.use(Router)

// const scrollBehavior = (to, from, savedPosition) => {
//   // if (to.matched.some(m => m.meta.scrollToTop)) {
//     return {x:0, y:0}
//   // }
// }

export default new Router({
	mode: 'history',
	// scrollBehavior,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,


		},
		{
			path: '/confirmation/:id',
			name: 'Home1',
			component: Home,
		},		
		{
			path: '/works',
			name: 'Works',
			component: Works,
		},
		{
			path: '/special-projects',
			name: 'Special_projects',
			component: Special_projects,
		},
		{
			path: '/works/:workName',
			name: 'Works_categories',
			component: Works_categories,
		
		},
		{
			path: '/works/:workName/:workId',
			name: 'Work_page',
			component: Work_page,
		},
		{
			path: '/special-projects/:projId',
			name: 'Special_project',
			component: Special_project,
		},
		{
			path: '/news',
			name: 'News',
			component: News,
		},
		{
			path: '/news/:newId',
			name: 'New_page',
			component: New_page,
		},
		{
			path: '/media',
			name: 'Media',
			component: Media,
		},
		{
			path: '/media/photos',
			name: 'Photos',
			component: Photos,
		},
		{
			path: '/media/photos/:photoId',
			name: 'Gallery',
			component: Gallery,
		},
		{
			path: '/videos',
			name: 'Video',
			component: Video,
		},
		{
			path: '/movie',
			name: 'Movie',
			component: Movie,
		},
		{
			path: '/foundation',
			name: 'Foundation',
			component: Foundation,
		},
		{
			path: '/foundation/projects',
			name: 'Foundation_projects',
			component: Foundation_projects,
		},
		{
			path: '/foundation/projects/:projId',
			name: 'Foundation_project',
			component: Foundation_project,
		},		
		{
			path: '/foundation/awards',
			name: 'Awards',
			component: Awards,
		},
		{
			path: '/foundation/awards/:awId',
			name: 'Awards_project',
			component: Awards_project,
		},		
		{
			path: '/bio',
			name: 'Bio',
			component: Bio,
		},

		{
			path: '/foundation-preview',
			name: 'founation1',
			component: Foundation_project,
		},
		{
			path: '/new-preview',
			name: 'New_page1',
			component: New_page,
		},

		{
			path: '/special_projects-preview',
			name: 'Special-projects1',
			component: Special_project,
		},		
		// {
		// 	path: '/work-preview',
		// 	name: 'Work_page1',
		// 	component: Work_page,
		// },		


		{
			path: '*',
			name: 'page404',
			component: page404,
		},										

	]
})
