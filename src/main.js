import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./service/Api";
// import axios from "axios";

// axios.interceptors.response.use(undefined, function(error) {
//     if (error) {
//         const originalRequest = error.config;
//         if (error.response.status === 403 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             // store.dispatch("user", null);
//             return router.push("/login");
//         }
//     }
// });

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");