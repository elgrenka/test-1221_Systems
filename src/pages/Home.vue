<script setup lang="ts">

</script>

<template>
    <h1>Приятного чтения</h1>
    <nav>
        <router-link to="/posts">
            <button>Список постов</button>
        </router-link>
    </nav>
</template>

<style lang="scss" scoped>
h1 {
    color: #333;
    font-size: 24px;
    text-align: center;
    margin-top: 0;
}

nav {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
        background-color: #3498db;
        font-weight: bold;
        color: #fff;
        padding: 10px 20px;
        margin: 0 10px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #2980b9;
        }
    }
}
</style>
