<script setup>
import { ref, reactive } from 'vue';
const user = reactive([
  {
    email : '',
    pass : '',
    pass2 : ''
  }
])

const hiddenLogin = ref(false)
const hiddenRegistration = ref(true)
const homeIntro = ref(false)
const hiddenDashboard = ref(true)

function registrationShow() {
  hiddenRegistration.value = false
  hiddenLogin.value = true
}

function loginShow() {
  hiddenLogin.value = false
  hiddenRegistration.value = true
}

const mailformat = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 

function loginUser() {
  if(user.email === 'mail@example.com' && user.email.match(mailformat) && user.pass === '1234') {
    alert("Login Success")
    hiddenLogin.value = true
    homeIntro.value = true
    hiddenDashboard.value = false
  }
  else if (user.email === undefined){
    alert("E-mail cannot be empty.\nReload and try again.")
  }
  else if (!user.email.match(mailformat)){
    alert("E-Mail is in invalid format.\nReload and try again.")
  }
  else if (user.pass === undefined){
    alert("Password cannot be empty.\nReload and try again.")
  }
  else if (user.email !== 'mail@example.com'){
    alert("E-mail cannot match.\nReload and try again.")
  }
  else if (user.pass !== '1234'){
    alert("Password cannot match.\nReload and try again.")
  }
  else {
    alert("Login Failed")
  }
}

function registerUser() {
  if (user.email !== undefined && user.email.match(mailformat)  && user.pass !== undefined  && user.pass2 !== undefined  && user.pass === user.pass2) {
    alert("Registration Success")
    hiddenRegistration.value = true
    homeIntro.value = true
    hiddenDashboard.value = false
  }
  else if (user.email === undefined){
    alert("E-mail cannot be empty.\nReload and try again.")
  }
  else if (user.pass === undefined || user.pass2 === undefined){
    alert("Password cannot be empty.\nReload and try again.")
  }
  else if (user.pass !== user.pass2) {
    alert("Password should be the same.\nReload and try again.")
  }
  else if (user.email !== mailformat){
    alert("E-Mail is in invalid format.\nReload and try again.")
  }
  else {
    alert("Registration Failed.\nReload and try again.")
  }
}


</script>

<template>
  <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
    <div class="container h-full p-10">
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div class="w-full">

          <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div class="g-0 lg:flex lg:flex-wrap">
              <!-- Left column container-->
              <div class="px-4 md:px-0 lg:w-6/12">
                <div class="md:mx-6">

                  <form class="md:p-12"  :class="{'hidden' : hiddenLogin}">

                    <img class="mx-auto w-14 h-18 my-8"
                      src="https://cdn-icons-png.flaticon.com/512/2050/2050106.png"
                      alt="logo" />

                    <p class="mb-4">Please login to your account</p>

                    <!--Username input-->
                    <div>
                      <input v-model="user.email" 
                        type="text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="E-Mail" />
                        
                        <input v-model="user.pass"
                        type="password" class="my-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Password">

                        <button @click="loginUser()"
                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style="
                          background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                        ">
                        Log in
                      </button>
                    </div>

                    <!--Register button-->
                    <div class="flex items-center justify-between pb-6">
                      <p class="mb-0 mr-2">Don't have an account?</p>
                      <button @click="registrationShow()"
                        type="button"
                        class="bg-transparent hover:bg-red-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded">
                        Register
                      </button>
                    </div>
                  </form>


                  <form class="md:p-12"   :class="{'hidden' : hiddenRegistration}">
                                        
                    <img class="mx-auto w-14 h-18 my-8"
                      src="https://cdn-icons-png.flaticon.com/512/2050/2050106.png"
                      alt="logo" />

                    <p class="mb-4">Please register for your account</p>

                    <!--Username input-->
                    <div>
                      <input v-model="user.email" 
                        type="text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="E-Mail" />
                        
                        <input v-model="user.pass"
                        type="password" class="my-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Password">

                        <input v-model="user.pass2"
                        type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Password Again">

                        <button @click="registerUser()"
                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style="
                          background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                        ">
                        Log in
                      </button>
                    </div>

                    <!--Register button-->
                    <div class="flex items-center justify-between pb-6">
                      <p class="mb-0 mr-2">Already have an account?</p>
                      <button @click="loginShow()"
                        type="button"
                        class="bg-transparent hover:bg-red-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded">
                        Login
                      </button>
                    </div>
                  </form>


                </div>
              </div>

              <!-- Right column container with background and description-->
              <div :class="{'hidden' : homeIntro}"
                class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 class=" default mb-6 text-3xl font-semibold">
                    DEFAULT LOGIN <br>
                    mail@example.com<br>Password : 1234
                  </h4>
                  
                  <p class="text-xl">
                    Here you can login/register for a temporary account. Where you can see the dashboard. It is developed by simple concept of Vue usign only class 'hidden' property. My guru Hasin Hyder always tells that keep it simple as a begineer. Don't try to make things complex. 
                  </p>
                </div>
              </div>


              <div :class="{'hidden' : hiddenDashboard}"
                class="flex rounded"
                style="">
                <div class="px-4 py-6 text-black">
                  <h4 class="mb-6 text-5xl font-semibold">
                    Welcome to Dashboard
                  </h4>
                  <p class="text-3xl">
                    Ostad is a skill development platform focusing on live learning. We have 30,000+ users on our platform and 4500+ learners who graduated and are still learning in Ostad. We provide skill development opportunities to university students, job holders, job seekers, and freelancers who want to learn or develop skills from the best instructors. Develop your skill with the best industry experts through live learning, task-based curriculum, and track your progress through our progress tracking dashboard. Get all the resources easily and get access to one of the richest talentpools. Trade licence number- 164424.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.default {
  font-size: 40px;
  color: wheat;
  text-align: center;
}
</style>
