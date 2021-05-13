export default (to, from, next) => {
    if (to.meta.authenticated && localStorage.getItem("token")) {
        return next();
    }
    if (to.meta.guest && localStorage.getItem("token")) {
        next("/");
        return;
    }

    if (!to.meta.authenticated) {
        return next();
    }

    next("/login");
};