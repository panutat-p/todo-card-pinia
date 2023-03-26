<script setup lang="ts">
import { ref } from "vue";

import EventCard from "@/components/EventCard.vue";

const events = ref([
  {
    id: 1,
    title: "aa",
    date: "2023-01-01",
    time: "18:00:00",
    img: "https://placehold.co/350x100/BBD6B8/white",
  },
  {
    id: 2,
    title: "bb",
    date: "2023-01-02",
    time: "19:00:00",
    img: "https://placehold.co/350x100/94AF9F/white",
  },
]);
</script>

<template>
  <div class="events mt-10">
    <EventCard
      v-for="event in events"
      v-bind:key="event.id"
      v-bind:id="event.id"
      v-bind:date="event.date"
      v-bind:time="event.time"
      v-bind:title="event.title"
      v-bind:img="event.img"
    />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
