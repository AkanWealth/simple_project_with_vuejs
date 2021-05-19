import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user: null,
        course: null,
    },
    getters: {
        user: (state) => {
            return state.user;
        },
        course: (state) => {
            return state.course;
        },
        isAuthenticated: (state) => {
            return !!state.user;
        },
    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        course(state, course) {
            state.course = course;
        },
    },
    actions: {
        user(context, user) {
            context.commit("user", user);
        },
        course(context, course) {
            context.commit("course", course);
        },
    },
    modules: {},
});