<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

//Carousel Implementation Start
const items = ref([
  'https://images.unsplash.com/photo-1621193793262-4127d9855c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1620503292890-c597f62cce8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1619963258837-b83f3406cfcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
])

const showCarousel = ref(true)
let carousel = null

onMounted(()=>{
  carousel = new Flickity('#carousel',{})
})

function hideCarousel () {
    showCarousel.value = false
    return showCarousel
}

onBeforeUnmount(() => {
  hideCarousel()
  carousel.destroy()
})
//Carousel Implementation End


//Chart Implementation Start
let chart = null
const showChart = ref(true)

const dataset = [30, 20, 10,20,20]

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Blue'],
  datasets: [{
    label: 'My First Dataset',
    data: dataset,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(43, 105, 86)',
      'rgb(21, 21, 186)',
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,
};

onMounted(() => {
  const ctx = document.getElementById('chart')
  chart = new Chart(ctx, config)
})

function hideChart () {
    showChart.value = false
    return showChart
}

onBeforeUnmount(() => {
  hideChart()
  Chart.destroy()
})
//Chart Implementation End
</script>

<template>
  <!-- Carousel Section Strat -->
  <div class="my-5">
    <button class="bg-red-400 text-white" @click="hideCarousel">01. Hide Carousel & Destroy Before Unmount</button>
  </div>

  <div v-if="showCarousel" class="mx-auto items" id="carousel">
    <div :style="`background-image:url(${item})`" class="item" v-for="item, index in items" :key="item">{{ index + 1 }}</div>
  </div>

  <!-- Carousel Section End -->


  <hr class="my-10">


  <!-- Chart Section Strat -->
  <div class="my-5">
    <button class="bg-red-400 text-white" @click="hideChart">02. Hide Chart & Destroy Before Unmount</button>
  </div>

  <div v-if="showChart" class=" mx-auto w-[400px] h-[400px] bg-gray-400">
    <canvas id="chart">
    </canvas>
  </div>
  
  <!-- Carousel Section End -->
</template>

<style scoped>
.items {
  width: 600px;
  height: 400px;
}

.item {
  width: 600px;
  height: 400px;
  background-color: #ccc;
  background-size: cover;
}
</style>
