import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import NotFound from "../views/Errors/NotFound.vue";
import AuthenticationMiddleware from "./middleware/authentication";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            authenticated: true,
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            guest: true,
        },
    },
    {
        path: "/signup",
        name: "Register",
        component: Register,
        meta: {
            guest: true,
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            authenticated: true,
        },
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(AuthenticationMiddleware);

export default router;