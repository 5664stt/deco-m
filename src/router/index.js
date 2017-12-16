import Vue from "vue";
import VueRouter from "vue-router";

//通用组件 ----------↓----------↓----------↓----------
import AppFooter from "@/components/appHeader";

//页面组件 ----------↓----------↓----------↓----------

// - 默认页面（首页） Start
import Home from "@/components/home/home";//  √  √
// - 默认页面（首页） End

// - 案例页面 Start
import Demo from "@/components/demo/demo";//  √  √
// - 案例页面 End

// - 购物车页面 Start
import ShoppingCar from "@/components/shoppingCar/shoppingCar";
// - 购物车页面 End

// - 日记页面 Start
import Diary from "@/components/diary/diary";//  √
// - 日记页面 End

// - 我的页面（个人中心） Start
import My from "@/components/my/my";
// - 我的页面（个人中心） End

// - 搜索页面 Start
import Search from "@/components/search/search";
// - 搜索页面 End

// - 头条页面 Start
import HotNew from "@/components/hotNew/hotNew";
// - 头条页面 End

// - 视频直播页面 Start
import Live from "@/components/live/live";//  √  √
// - 视频直播页面 End

// - 百科页面 Start
import Encyclopedias from "@/components/encyclopedias/encyclopedias";//  √  √
// - 百科页面 End

// - 绿色建材页面 Start
import Materials from "@/components/materials/materials";//  √  √
// - 绿色建材页面 End

// - 智能家居页面 Start
import Capacity from "@/components/capacity/capacity";
// - 智能家居页面 End

// - 家居检测页面 Start
import Detection from "@/components/detection/detection";
// - 家居检测页面 End

// - 知名企业页面 Start
import Enterprise from "@/components/enterprise/enterprise";
// - 知名企业页面 End

// - VR页面 Start
import Designer from "@/components/designer/designer";
// - VR页面 End

// - VR页面 Start
import Vr from "@/components/vr/vr";
// - VR页面 End

// - 装修平台页面 Start
import Fitment from "@/components/fitment/fitment";
// - 装修平台页面 End

// - 登录页面 Start
import Login from "@/components/login/login";
import Register from "@/components/login/mobileRegister";//手机注册
// - 登录页面 End




Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    // 重定向
    {
        path: '/',
        redirect: '/home'
    },
    // 定义
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/demo",
      component: Demo,
    },
    {
      path: "/shoppingCar",
      component: ShoppingCar,
    },
    {
      path: "/diary",
      component: Diary,
    },
    {
      path: "/my",
      component: My,
    },
    {
      path: "/hotNew",
      component: HotNew,
    },
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/live",
      component: Live,
    },
    {
      path: "/encyclopedias",
      component: Encyclopedias,
    },
    {
      path: "/materials",
      component: Materials,
    },
    {
      path: "/capacity",
      component: Capacity,
    },
    {
      path: "/detection",
      component: Detection,
    },
    {
      path: "/enterprise",
      component: Enterprise,
    },
    {
      path: "/vr",
      component: Vr,
    },
    {
      path: "/designer",
      component: Designer,
    },
    {
      path: "/fitment",
      component: Fitment,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/mobileRegister",
      component: Register,
    },

  ],
  linkActiveClass: 'cur'
});
