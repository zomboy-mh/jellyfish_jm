import Vue from 'vue';
// import Router from 'uni-simple-router';

import Logon from '@/pages/logon/logon.vue'
// Vue.use(Router)
const routes = [
	 {
	    path: '/pages/logon/logon', // 页面路径，与pages.json中的路径一致
	    name: 'logon',
	    component: Logon, // 对应页面的组件
	  }
]
const router = new Router({
  routes,
});

export default router;