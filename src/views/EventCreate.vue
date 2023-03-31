<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

import { TodoEvent } from '@/types/event.type';
import { useEventList } from '@/stores/event-list';

const router = useRouter();
const toast = useToast();
const eventListStore = useEventList();
const event = reactive<TodoEvent>({} as TodoEvent);

function onSubmit() {
  eventListStore.createNewEvent({
    id: Math.floor(Math.random() * 100),
    title: event.title,
    date: event.date,
    time: event.time,
    img: event.img,
  });
  toast.success('Success', {
    timeout: 1961,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false,
  });
  router.push({ name: 'EventList', params: { username: 'eduardo' } });
}
</script>

<template>
  <form v-on:submit.prevent="onSubmit" class="container p-14">
    <div class="mt-3">
      <input v-model="event.title" type="text" placeholder="title" class="input input-bordered w-full max-w-md" />
    </div>
    <div class="mt-3">
      <input v-model="event.date" type="date" placeholder="date" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="mt-3">
      <input v-model="event.time" type="time" placeholder="time" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="mt-3">
      <input v-model="event.img" type="text" placeholder="img" class="input input-bordered w-full max-w-lg" />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Button</button>
  </form>
</template>
