import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: {
        user: null,
        courses: null,
        isAuthenticated: false,
    },
    getters: {
        user: (state) => {
            return state.user;
        },
        courses: (state) => {
            return state.courses;
        },
        isAuthenticated: (state) => {
            return !!state.user;
        },
    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        courses(state, courses) {
            state.courses = courses;
        },
    },
    actions: {
        user(context, user) {
            context.commit("user", user);
        },
        courses(context, courses) {
            context.commit("courses", courses);
        },
    },
    modules: {},
});