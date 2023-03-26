<script setup lang="ts">
import { useEventList } from '@/stores/event-list';

import EventCard from '@/components/EventCard.vue';

const eventListStore = useEventList();
</script>

<template>
  <h1 class="text-5xl text-center">{{ eventListStore.numberOfEvents }} Events</h1>
  <div class="events">
    <div class="mb-10"></div>
    <EventCard
      v-for="event in eventListStore.eventList"
      v-bind:event="event"
      class="transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none"
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
