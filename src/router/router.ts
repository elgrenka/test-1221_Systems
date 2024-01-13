import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue";
import Post from "../pages/Post.vue";
import Posts from "../pages/Posts.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/posts', component: Posts },
    { path: '/posts/:id', component: Post, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
