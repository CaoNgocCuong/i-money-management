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
      text: "Hey, Cao Ngọc Cường",
      leading: true,
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
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
      leading: false,
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
      leading: false,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "@/views/Report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "My Budget",
      leading: false,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "@/views/Budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "Add Transaction",
      leading: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "@/views/NewTransaction.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
