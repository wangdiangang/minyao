import Vue from 'vue'
import Router from 'vue-router'

let Home = () => import("../components/home")
let Singer = () => import("../components/Singer")
let Mine = () => import("../components/Mine")
let Videos = () => import("../components/Videos")
let SingerPaihang = () => import("../components/SingerPaihang")
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {path: '/home', name: 'home', component: Home,meta:{keepAlive:true}},
    {path: '*', name: 'home', component: Home},
    {
      path: "/singer", name: "singer", component: Singer,meta:{keepAlive:true}, children: [
        {path:"/singerPaihang",component:SingerPaihang}
      ]

    },
    {path: "/mine", name: "mine", component: Mine,meta:{keepAlive:true}},
    {path: "/videos", name: "videos", component: Videos,meta:{keepAlive:true}},

  ],

})
