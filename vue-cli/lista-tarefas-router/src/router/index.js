import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultView.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "/perfil",
        name: "PerfilView",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/PerfilView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("../layouts/BlankView.vue"),
    children: [
      {
        path: "/login",
        name: "LoginView",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
