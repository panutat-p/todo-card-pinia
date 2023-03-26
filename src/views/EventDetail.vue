<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

import { useEventList } from '@/stores/event-list';
import { TodoEvent } from '@/types/event.type';
import BackButton from '@/components/BackButton.vue';

const route = useRoute();
const event = reactive<TodoEvent>({
  id: 0,
  title: '_',
  date: '2000-01-01',
  time: '00:00:00',
  img: 'https://placehold.co/300x300/EEEEEE/white',
});

const eventListStore = useEventList();

const item = eventListStore.getEventByID(Number(route.params?.id));
if (item !== undefined) {
  event.id = item.id;
  event.title = item.title;
  event.date = item.date;
  event.time = item.time;
  event.img = item.img;
}
</script>

<template>
  <section class="hero min-h-screen bg-base-200">
    <article class="hero-content flex-col">
      <div>
        <h1 class="text-5xl font-bold mb-14">{{ event.title }}</h1>
        <article class="text-center mb-14">
          <span class="mr-3 badge badge-outline text-lg text-blue-500">{{ event.date }}</span>
          <span class="badge badge-outline text-lg text-purple-500">
            {{ event.time }}
          </span>
        </article>
      </div>
      <img v-bind:src="event.img" class="max-w-sm rounded-lg shadow-2xl" alt="event-image" />
      <BackButton class="mt-24"></BackButton>
    </article>
  </section>
</template>
