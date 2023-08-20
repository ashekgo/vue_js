<script setup>
import { ref} from 'vue'
import ChildComponent from './ChildComponent.vue';
const message = 'Message From Parent'
const customMessage = 'Life Is Beautiful, Believe That & Work Hard To Make It.'
const messageEmitted = ref('')
</script>

<template>
    <div class="">
        
        <ChildComponent
        :message="message" 
        :customMessage = "customMessage" 
        v-model:messageEmitted="messageEmitted"></ChildComponent>

        <p class="text-5xl py-5 text-center text-black-900 font-bold antialiased">{{ messageEmitted }}</p>

    </div>
</template>
