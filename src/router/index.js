import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "../components/Schedule";
import Main from "../components/Main";
import About from "../components/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
