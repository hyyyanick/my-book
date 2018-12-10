import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from "./components/Dashboard";
import QuestionDetail from "./components/QuestionDetail";

const routes = [
    { path: "/", component: Dashboard },
    { path: "/question-detail/:id", name: 'question-detail', component: QuestionDetail }
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;