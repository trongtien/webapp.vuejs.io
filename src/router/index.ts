import Vue from "vue";
import VueRouter from "vue-router";
import TeampClient from "../views/client/TeampClient.vue";
import TeampAdmin from "../views/admin/TeampAdmin.vue";
import Auth from "../views/Auth.vue";

// component client
import HomeClient from "../components/pages/client/Home.vue";

// component Admin
import Dashboare from "../components/pages/admin/Dashboare.vue";
import User from "../components/pages/admin/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: TeampClient,
    children: [
      {
        path: "/",
        name: "Home",
        component: HomeClient
      }
    ]
  },
  {
    path: "/auth",
    name: "Login",
    component: Auth
  },
  {
    path: "/admin",
    component: TeampAdmin,
    children: [
      {
        path: '/admin',
        name: "Dashboare",
        component: Dashboare
      },
      {
        path: '/admin/user',
        name: "user",
        component: User
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
