<script setup lang="ts">
import { TodoEvent } from "@/types/event.type";

const props = defineProps<{
  event: TodoEvent;
}>();
const { id, title, date, time, img } = props.event;
</script>

<template>
  <router-link v-bind:to="{ name: 'EventDetail', params: { id: id } }">
    <div class="card card-compact mb-3 w-96 bg-base-100 shadow-xl">
      <figure class="mt-4">
        <img v-bind:src="img" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <div class="text-center">
          <span class="mr-3 badge badge-outline text-lg text-blue-500">{{
            date
          }}</span>
          <span class="badge badge-outline text-lg text-purple-500">
            {{ time }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>
