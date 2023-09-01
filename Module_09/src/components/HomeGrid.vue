<script setup>
import axios from 'axios'
import { ref } from 'vue'

const HomeGrid = ref([])

async function getData() {
    const response = await axios.get("https://basic-blog.teamrabbil.com/api/post-newest")
    HomeGrid.value = response.data
}

getData()

</script>

<template>
    <div class="px-5 flex justify-center flex-wrap">
        <div v-for="post in HomeGrid" :key="post.id" class="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg" :src="post['img']" alt="" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post['title'] }}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post['short'] }}</p>
            </div>
        </div>
    </div>
</template>

