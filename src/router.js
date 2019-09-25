import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import jianzhi from './views/jianzhi.vue'
import message from './views/message.vue'
import mine from './views/mine.vue'

Vue.use(Router)

export default new Router({
	// mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
	base: '/wap/',
	routes: [{
			path: '/',
			name: '首页',
			component: Home,
    meta: {
      keepAlive: true // 需要缓存
    }
		},
		{
			path: '/jianzhi',
			name: '间职',
			component: () =>
				import('./views/jianzhi.vue'),
      meta: {
        keepAlive: true // 不需要缓存
      }
			//				children: [{
			//				path: '/jianzhi/details',
			//				component: () =>
			//					import('./views/jianzhi/jianzhiDeatils.vue'),
			//			}, ],
		}, {
			path: '/message',
			name: '消息',
			component: () =>
				import('./views/message.vue')
		},
		{
			path: '/jianzhi/details',
			name: '间职详情',
			component: () =>
				import('./views/jianzhi/jianzhiDeatils.vue')
		},
		{
			path: '/mine',
			name: '我的',
			component: () =>
				import('./views/mine.vue'),

		}, {
			path: '/part-time',
			name: '发布兼职',
			component: () =>
				import('./views/part-time/part-time.vue'),
				children: [{
					path: '/',
					name: '发布兼职',
					component: () =>
						import('./views/part-time/release-one.vue'),
				}, {
					path: 'releasetwo',
					name: '发布兼职',
					component: () =>
						import('./views/part-time/release-two.vue'),
				},],

		}, {
			path: '/search',
			name: '搜索',
			component: () =>
				import('./views/search.vue')
		}, {
			path: '/city',
			name: '城市查询',
			component: () =>
			import('./views/city.vue')
		}
	]
})
