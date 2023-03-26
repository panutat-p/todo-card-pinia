<script setup lang="ts">
defineProps<{
  id: number;
  title: string;
  date: string;
  time: string;
  img: string;
}>();
</script>

<template>
  <router-link v-bind:to="{ name: 'EventDetail', params: { id: id } }">
    <div class="card card-compact mb-3 w-96 bg-base-100 shadow-xl">
      <figure class="mt-4">
        <img v-bind:src="img" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ date }} {{ time }}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  </router-link>
</template>
