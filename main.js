import App from './App'
import VueLazyload from'vue-lazyload'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uni_modules/uview-ui/index.js";

Vue.use(uView);
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的高度比例
  error: 'assets/images/fulltime.png', // 图片加载失败时显示的占位图
  loading: 'assets/images/loading.png', // 图片加载过程中显示的占位图
  attempt: 1 // 加载错误后最大尝试次数
})

App.mpType = 'app'
import {
	VUE_APP_API_URL,
	formalUrl,
	formalUrlUat,
	imageUrl
} from "config/index.js";
const app = new Vue({
		...App
})
app.$mount()
//
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif