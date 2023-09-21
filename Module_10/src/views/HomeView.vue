<script setup>
import c from "../data.json"
import {useRoute, useRouter} from "vue-router"
import { onMounted, ref, watch } from "vue";
import BottomSectionView from './BottomSectionView.vue'

const router = useRouter()
const route = useRoute()
const cars = ref(c)
const make = ref("")
const price = ref("")

onMounted(() => {
  make.value = route.query.make;
  price.value = route.query.price
})

</script>

<template>

<section class="bg-white text-gray-700 sm:py-16 lg:py-20">

<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
  <div :class="'mt-3 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-3'">
    
  <article v-for="car in cars" @click="router.push(`/car/${car.id}`)" class="relative flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg border border-gray-200">
      <div class="aspect-square overflow-hidden relative">
        <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-105" :src="car.image" alt="" />
      </div>
      <div class="absolute top-2 left-2">
        <p class="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">Sale</p>
      </div>
      <div class="my-4 mx-4 flex flex-col items-start">
        <div class="mb-2">
          <h3 class="text-lg font-semibold text-gray-800">{{car.brand}} - {{ car.body }}</h3>
        </div>
        <div class="mb-2">
          <p class="text-sm text-gray-600">${{car.price}}</p>
        </div>
        <div class="w-full">
          <button @click="router.push(`/car/${car.id}`)" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 text-sm px-4 py-2 transition-colors duration-300 w-full border-0 rounded-none">View Details</button>
        </div>
      </div>
  </article>

  </div>
</div>

</section>
<BottomSectionView/>
</template>


