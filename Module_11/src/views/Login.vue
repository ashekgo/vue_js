<script setup>
import {ref} from 'vue';
import { RouterLink } from 'vue-router';
import authStore from '../store/authStore';

const auth = authStore();
const email = ref('admin@ostad.app');
const password = ref('1234');
</script>

<template>    
    <div class="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div class="h-max mx-auto flex flex-col items-center">
            <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                <div>
                    <label class="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
                    <input v-model="email"  class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="admin@ostad.app">
                </div>
                <div>
                    <label class="text-gray-600 font-bold inline-block pb-2" for="password">Password</label>
                    <input v-model="password" class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="****">
                </div>
                <div>
                    <input @click="auth.login(email,password)"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Login" >
                </div>
            </div>
        </div>
    </div>
</template>