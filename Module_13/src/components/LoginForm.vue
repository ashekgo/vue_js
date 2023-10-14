<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import {usersData} from '../data/credentials'

const router = useRouter()

const users = reactive(usersData)

let email = ''
let password = ''

const login = () => {
  const user = users.find(user => user.email === email && user.password === password)
  
  if (user) {
    router.push('/dashboard')
  }
}
</script>


<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://cdn-icons-png.flaticon.com/512/152/152532.png" alt="Logo">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Login Form</h2>
      <p class="mt-6 text-center text-3xl font-extrabold text-gray-900">E-Mail : admin@ostad.com</p>
      <p class="mt-6 text-center text-3xl font-extrabold text-gray-900">Password : 1234</p>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="login">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password">
        </div>
      </div>

      <div>
        <button type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          </span>
          Login
        </button>
      </div>
    </form>
  </div>
</div>
</template>
