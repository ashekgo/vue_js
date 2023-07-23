<script setup>
import { ref } from "vue";
import { images } from "./assets/images.js"

const currentIndex = ref(0)
</script>

<template>
    <!-- Carousel -->
    <div class="relative">
      <!--Carousel Buttons-->
      <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" >
        <button @click="currentIndex = index" v-for="(image, index) in images" :key="index" type="button" class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50"></button>
        </div>

      <!--Carousel Images & Title-->
      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div class="relative float-left -mr-[100%] w-full" style="backface-visibility: hidden">
          <img :src="images[currentIndex].src" class="block w-full h-screen" alt="..." />
        </div>
        <div
          class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
          <h5 class="text-xl">{{images[currentIndex].title}}</h5>
        </div>
      </div>

      <!--Carousel Prev-->
      <button class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50" type="button" @click.prevent="(currentIndex == 0) ? (currentIndex = (images.length) - 1) : currentIndex--">
        <span class="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      <!--Carousel Next-->
      <button class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50" type="button" @click.prevent="(currentIndex == (images.length) - 1) ? (currentIndex = 0) : currentIndex++">
        <span class="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>

    </div>

    <!-- Footer -->
    <footer class="flex items-center justify-center h-16 bg-[#172554]">
        <p class="text-white text-lg">Made with ❤️️ in Bangladesh</p>
    </footer>
</template>