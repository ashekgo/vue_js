<script setup>
import {reactive} from 'vue';
import todoStore from '../store/todoStore';
const todo = todoStore();

const formData = reactive({
    todo: '',
    completed: false,
    userId: 1
})

function add(){
    todo.action.add(formData);
    formData.todo = '';
}

const doneFormData = {
    completed:true
}

</script>

<template>
    <div class="min-h-screen w-screen flex flex-col gap-2 p-10 items-center">
        <div class="max-w-2xl w-full bg-white p-2 rounded-sm shadow-lg">
            <form enctype="multipart/form-data" class="grid grid-cols-12 gap-2">
                <div class="col-span-9">
                    <input v-model="formData.todo" class="w-full p-2 border focus:outline-none focus:border-green-200 focus:shadow-lg" type="text" name="task" placeholder="New To-Do">
                </div>
                <div class="col-span-3 flex items-center">
                    <input @click.prevent="add()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" name="submit" value="New To-Do">
                </div>
            </form>
        </div>

        <div class="max-w-2xl w-full bg-white p-2 raounded-sm shadow-lg">
            <table class="w-full table-fixed border-collapse border-slate-950 hover:border-blue-950">
                <thead>
                    <tr>
                        <th class="p-2 border border-slate-300">To-Do</th>
                        <th class="p-2 border border-slate-300">Check/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="todo.totalPending == 0">
                        <td colspan="2">No pending task available</td>
                    </tr>
                    <tr v-for="(pending, index) in todo.pending" :key="index">
                        <td class="p-2 border border-slate-300">
                        {{ pending.todo }}
                        </td>
                        <td class="p-2 border border-slate-300 flex gap-1 justify-end">
                            <form enctype="multipart/form-data">
                                <input @click.prevent="todo.action.update(pending.id, doneFormData)" type="submit" name="submit" value="Check" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            </form>

                            <form  enctype="multipart/form-data">
                                <input @click.prevent="todo.action.delete(pending.id)" type="submit" name="submit" value="Remove" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            </form>
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    </div>
</template>