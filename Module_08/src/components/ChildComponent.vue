<script setup>
defineProps(['customMessage', 'message', 'messageEmitted'])
defineEmits(['update:messageEmitted'])
</script>

<template>

    <div class="px-4 mx-auto text-center">

        <p class="text-5xl py-5 text-black-900 font-bold antialiased">{{ message }}</p>

        <button @click="$emit('update:messageEmitted',customMessage)" class="px-3 py-2 font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-3xl">Display Message</button>

    </div>
</template>