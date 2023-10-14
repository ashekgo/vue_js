<script setup>
import { ref, computed, watch } from 'vue'
import { usersData } from '../data/credentials'

const user = ref(usersData[0])
const editMode = ref(false)

const birthYear = computed(() => {
  const birthdateYear = new Date(user.value.birthdate).getFullYear()
  return isNaN(birthdateYear) ? '' : birthdateYear
})

const toggleEdit = () => {
  editMode.value = !editMode.value
}

const saveChanges = () => {
  toggleEdit()
}
  
const canVoteMessage = computed(() => {
  const birthdateYear = new Date(user.value.birthdate).getFullYear()
  const currentYear = new Date().getFullYear()
  return currentYear - birthdateYear >= 18
    ? 'You can legally vote.'
    : 'You are not of legal voting age.'
})
  
watch(() => user.value.birthdate, (newBirthdate) => {
  user.value.birthdate = newBirthdate
})
</script>

<template>
<div class="max-w-lg mx-auto text-left">
  <h1 class="py-10 text-3xl font-semibold mb-4 text-center">User Information</h1>


  <table class="w-full border-collapse border border-gray-300">
    <tr class="bg-gray-100">
      <td class="w-1/4 text-left p-2 font-bold border border-gray-300">E-mail :</td>
      <td class="w-3/4 p-2 border border-gray-300 text-left">
        <span v-if="!editMode">{{ user.email }}</span>
        <input v-if="editMode" v-model="user.email" type="email" class="w-full border rounded p-2">
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="w-1/4 text-left p-2 font-bold border border-gray-300">Password :</td>
      <td class="w-3/4 p-2 border border-gray-300 text-left">
        <span v-if="!editMode">{{ user.password }}</span>
        <input v-if="editMode" v-model="user.password" type="email" class="w-full border rounded p-2">
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="w-1/4 text-left p-2 font-bold border border-gray-300">Name :</td>
      <td class="w-3/4 p-2 border border-gray-300 text-left">
        <span v-if="!editMode">{{ user.name }}</span>
        <input v-if="editMode" v-model="user.name" placeholder="Name" class="w-full border rounded p-2">
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="w-1/4 text-left p-2 font-bold border border-gray-300">Image :</td>
      <td class="w-3/4 p-2 border border-gray-300 text-left">
        <span v-if="!editMode">
          <img :src="user.profileImage" class="w-10 h-10 rounded-full" alt="Profile Image" />
        </span>
        <input v-if="editMode" v-model="user.profileImage" placeholder="Profile Image URL" class="w-full border rounded p-2">
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="w-1/4 text-left p-2 font-bold border border-gray-300">Birth Date :</td>
      <td class="w-3/4 p-2 border border-gray-300 text-left">
        <span v-if="!editMode">{{ user.birthdate }}</span>
        <input v-if="editMode" v-model="user.birthdate" type="date" class="w-full border rounded p-2">
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="w-1/4 text-left p-2 font-bold border border-gray-300">Description :</td>
      <td class="w-3/4 p-2 border border-gray-300 text-left">
        <span v-if="!editMode">{{ user.description }}</span>
        <textarea v-if="editMode" v-model="user.description" placeholder="Description" class="w-full border rounded p-2"></textarea>
      </td>
    </tr>
  </table>
</div>

<table class="min-w-full border-collapse">
  <tr :class="{ 'hidden': editMode }">
    <td class="p-3 text-center border-b">
      <span class="text-lg font-semibold" v-if="!editMode">Birth year is {{ birthYear }}</span>
      <input
        v-else
        v-model="user['Birth Year']"
        class="w-full border rounded p-2"
        :placeholder="birthYear"
        :readonly="!editMode"
      />
    </td>
  </tr>
  <tr :class="{ 'hidden': editMode }">
    <td class="p-3 text-center border-b">
      <span class="text-lg font-semibold" v-if="!editMode">{{ canVoteMessage }}</span>
      <input
        v-else
        v-model="user['Vote Message']"
        class="w-full border rounded p-2"
        :placeholder="canVoteMessage"
        :readonly="!editMode"
      />
    </td>
  </tr>
</table>

<div class="mt-8 space-x-4 text-center">
  <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" @click="toggleEdit">
    {{ editMode ? 'Cancel' : 'Edit' }}
  </button>
  <button v-if="editMode" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" @click="saveChanges">
    Save
  </button>
</div>
</template>
