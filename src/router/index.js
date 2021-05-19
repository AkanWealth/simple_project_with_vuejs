import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact";
import Login from "../views/Login";
import Register from "../views/Register";
import Course from "../views/Course.vue";
import ViewCourse from "../views/ViewCourse.vue";
import NotFound from "../views/Errors/NotFound.vue";
import AuthenticationMiddleware from "./middleware/authentication";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            authenticated: false,
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/course",
        name: "Course",
        component: Course,
        meta: {
            authenticated: true,
        },
    },
    {
        path: "/course/view",
        name: "ViewCourse",
        component: ViewCourse,
        meta: {
            authenticated: false,
        },
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
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    // ...CourseRoutes,
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