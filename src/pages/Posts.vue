<script setup lang="ts">

import {ref, onMounted} from 'vue';
import {useRouter} from "vue-router";
import axios from 'axios';

const router = useRouter();
const posts = ref([]);

const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

const goToPost = (postId) => {
    router.push(`/posts/${postId}`);
};

const deletePost = (postId) => {
    const index = posts.value.findIndex(post => post.id === postId);
    if (index !== -1) {
        posts.value.splice(index, 1);
    }
};

onMounted(fetchPosts);

</script>

<template>
    <div class="breadcrumbs">
        <router-link to="/">Главная</router-link>
        / Список постов
    </div>

    <div class="post-list">
        <div
            v-for="post in posts"
            :key="post.id"
            @click="goToPost(post.id)"
            @contextmenu.prevent="deletePost(post.id)"
            class="post-item"
        >
            {{ post.id }}. {{ post.title }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
    margin-bottom: 15px;
    color: #555;
}

.breadcrumbs a {
    color: #3498db;
    transition: color 0.3s ease;

    &:hover {
        color: #2980b9;
    }
}

.post-list {
    display: flex;
    flex-direction: column;
}

.post-item {
    cursor: pointer;
    margin-bottom: 5px;
    padding: 10px;
    background-color: #ecf0f1;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d2d7db;
    }
}
</style>
