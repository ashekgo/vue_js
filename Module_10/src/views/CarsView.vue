<script setup>
import {useRoute, useRouter} from "vue-router"
import {onMounted,ref} from "vue"
import cars from "../data.json"

const route = useRoute()
const router = useRouter()
const car = ref(null)
const {id} = route.params

onMounted(() => {
   const c = cars.find(c => c.id === parseInt(id));
   car.value = c
})

</script>

<template>
<div class="container mx-auto p-8">
  <div class="bg-white shadow-md rounded-lg overflow-hidden">

    <div v-if="car" class="p-4">
      <h1 class="text-xl font-semibold mb-4">Car Details</h1>
          <div class="h-40 relative">
      <img class="h-full w-full object-cover" :src="car.image" alt="Car Image" />
    </div>
      <table class="table-auto w-full">
        <tbody>
          <tr>
            <td class="px-4 py-2 font-semibold">Brand :</td>
            <td class="px-4 py-2">{{ car.brand }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2 font-semibold">Body :</td>
            <td class="px-4 py-2">{{ car.body }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2 font-semibold">Price :</td>
            <td class="px-4 py-2">{{ car.price }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2 font-semibold">Year :</td>
            <td class="px-4 py-2">{{ car.year }}</td>
          </tr>
        </tbody>
      </table>

<RouterView class="my-5"/>

</div>

<div class="p-4 mt-25">
<button @click="router.back()" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 text-sm px-4 py-2 transition-colors duration-300 w-full border-0 rounded-none">Go Home To See More Cars Information</button>
</div>

</div>
</div>

</template>