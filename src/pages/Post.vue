<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import axios from 'axios';

const router = useRouter();
const postId = ref(null);
const post = ref({});
const author = ref({});

const fetchPost = async () => {
    try {
        postId.value = router.currentRoute.value.params.id;
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
        post.value = postResponse.data;

        const authorResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.value.userId}`);
        author.value = authorResponse.data;
    } catch (error) {
        console.error('Error fetching post:', error);
    }
};

onMounted(fetchPost);

</script>

<template>
    <div class="breadcrumbs">
        <router-link to="/">Главная</router-link>
        /
        <router-link to="/posts">Список постов</router-link>
        / Пост №&#8239;{{ postId }}
    </div>

    <div class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>

        <div class="author-info">
            <h3>Об авторе</h3>
            <p><strong>Имя пользователя:</strong> {{ author.name }}</p>
            <p><strong>Email:</strong> {{ author.email }}</p>
            <p><strong>Телефон:</strong> {{ author.phone }}</p>
            <p><strong>Website:</strong> {{ author.website }}</p>
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

.post {
    margin-top: 20px;

    h2 {
        color: #333;
        font-size: 28px;
    }

    p {
        color: #555;
        font-size: 16px;
        line-height: 1.6;
    }

    .author-info {
        margin-top: 15px;

        h3 {
            color: #333;
            font-size: 20px;
        }

        p {
            font-size: 16px;
            margin-bottom: 5px;

            strong {
                color: #e74c3c;
            }
        }
    }
}
</style>
