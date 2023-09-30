<script setup>
import todoStore from '../store/todoStore';
const todo = todoStore();

const formData = {
    completed:false
}
</script>

<template>
    <div class="min-h-screen w-screen flex flex-col gap-2 p-10 items-center">
        <div class="max-w-4xl w-full bg-white p-2 raounded-sm shadow-lg">
            <table class="w-full table-fixed border-collapse border-slate-950 hover:border-blue-950">
                <thead>
                    <tr>
                        <th class="p-2 border border-slate-300">Completed</th>
                        <th class="p-2 border border-slate-300">Uncheck/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="todo.totalCompleted == 0">
                        <td colspan="2">No Completed task available</td>
                    </tr>

                    <tr v-for="(completed,index) in todo.completed" :key="index">
                        <td class="p-2 border border-slate-300 line-through">
                        {{ completed.todo }}
                        </td>
                        <td class="p-2 border border-slate-300 flex gap-1 justify-end">
                            <form enctype="multipart/form-data">
                                <input @click.prevent="todo.action.update(completed.id, formData)" type="submit" name="submit" value="Uncheck" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            </form>
                            <form enctype="multipart/form-data">
                                <input  @click.prevent="todo.action.delete(completed.id)" type="submit" name="submit" value="Remove" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>