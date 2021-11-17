import Vue from "vue";
import VueRouter from "vue-router";
//import FindLocation from "@views/FindLocation.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login.vue"),
      callback: false,
      home: false
  },

  

    {
    path: "/drivers",
    name: "drivers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "drivers" */ "@/views/drivers.vue"),
   
      meta:
      {requiresAuth:false}
  },
 

  
  {
    path: "/user",
    name: "user",
    component: () =>
      import("@/views/user.vue"),
      meta: {
        requiresAuth: false
    }
  },
  {
    path: "/FindLocation",
    name: "FindLocation",
    component: () =>
      import("@/views/FindLocation.vue"),
      meta: {
        requiresAuth: false
    }
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.user) {
      next({
        name: 'login',
       
      })
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});*/
 router.beforeEach((to, from, next) => {
    const authenticatedUser = null;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && ! authenticatedUser) next('/')
    
    else next();
});
export default router

