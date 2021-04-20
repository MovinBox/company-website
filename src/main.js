import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入页面
import Index from './pages/Index'
import AboutUs from './pages/AboutUs'
import CorporateBusiness from './pages/CorporateBusiness'
import News from './pages/News'
import CooperativePartner from './pages/CooperativePartner'
import ContactUs from './pages/ContactUs'
import DetailsPage from './pages/DetailsPage'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    routes: [
      {
        path: "/" ,
        meta:{
          title: "首页",
        },
        component: Index,
      },
      {
        path: "/AboutUs",
        meta:{
          title: "关于我们",
        },
        component: AboutUs,
      },
      {
        path: "/CorporateBusiness",
        meta:{
          title: "公司业务",
        },
        component: CorporateBusiness,
      },
      {
        path: "/News",
        meta:{
          title: "新闻资讯",
        },
        component: News,
      },
      {
        path: "/CooperativePartner",
        meta:{
          title: "合作伙伴",
        },
        component: CooperativePartner,
      },
      {
        path: "/ContactUs",
        meta:{
          title: "联系我们",
        },
        component: ContactUs,
      },
      {
        path: "/DetailsPage",
        meta:{
          title: "详情页",
        },
        component: DetailsPage,
      },
    ],
  }),
  template: '<App/>',
})
