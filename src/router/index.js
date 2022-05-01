import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

const requiredAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      leading: true,
      icon: "t2ico-notification",
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    beforeEnter: requiredAuth,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "My Profile",
      icon: "t2ico-setting",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
    beforeEnter: requiredAuth,
  },
  {
    path: "/logout",
    name: "LogOut",
    component: () =>
      import(/* webpackChunkName: "logout" */ "@/views/Logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "My Report",
      icon: "t2ico-filter",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "@/views/Report.vue"),
    beforeEnter: requiredAuth,
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "My Budget",
      leading: false,
      icon: "t2ico-wallet",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "@/views/Budget.vue"),
    beforeEnter: requiredAuth,
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "Add Transaction",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "@/views/NewTransaction.vue"
      ),
    beforeEnter: requiredAuth,
  },
  {
    path: "/categories",
    name: "Categories",
    meta: {
      text: "Categories",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "categories" */ "@/views/Category.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
