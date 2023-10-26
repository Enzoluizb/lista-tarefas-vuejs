import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "../plugins/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultView.vue"),
    meta: {
      requiresAuth: true
    },
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router;
