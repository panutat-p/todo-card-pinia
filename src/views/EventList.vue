<script setup lang="ts">
import { useEventList } from "@/stores/event-list";

import EventCard from "@/components/EventCard.vue";

const eventListStore = useEventList();
eventListStore.fill();
</script>

<template>
  <h1 class="text-5xl text-center">
    {{ eventListStore.numberOfEvents }} Events
  </h1>
  <div class="events">
    <div class="mb-10"></div>
    <EventCard
      v-for="event in eventListStore.eventList"
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
