<script setup lang="ts">
import { reactive } from 'vue';

import { TodoEvent } from '@/types/event.type';

const event = reactive<TodoEvent>({} as TodoEvent);

function onSubmit() {
  event.id = Math.floor(Math.random() * 100);
  console.log(event.id);
  console.log(event.title);
  console.log(event.date);
  console.log(event.time);
  console.log(event.img);
}
</script>

<template>
  <form v-on:submit.prevent="onSubmit" class="container p-14">
    <div class="mt-3">
      <input v-model="event.title" type="text" placeholder="title" class="input input-bordered w-full max-w-md" />
    </div>
    <div class="mt-3">
      <input v-model="event.date" type="text" placeholder="date" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="mt-3">
      <input v-model="event.time" type="text" placeholder="time" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="mt-3">
      <input v-model="event.img" type="text" placeholder="img" class="input input-bordered w-full max-w-lg" />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Button</button>
  </form>
</template>
