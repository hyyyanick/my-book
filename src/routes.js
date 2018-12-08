import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from "./components/Dashboard";
import Questions from "./components/Questions";

const routes = [
    { path: "/", component: Dashboard },
    { path: "/question-list", component: Questions }
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;