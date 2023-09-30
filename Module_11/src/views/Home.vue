<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>        
    <div class="bg-neutral-50 py-24 px-6 text-center dark:bg-neutral-900">
        <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        Simple To-Do
        </h1>
        <router-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/todo" role="button">Login</router-link>
    </div>
</template>
