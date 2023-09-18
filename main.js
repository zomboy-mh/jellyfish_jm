import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uni_modules/uview-ui/index.js";

Vue.use(uView);
Vue.config.productionTip = false
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