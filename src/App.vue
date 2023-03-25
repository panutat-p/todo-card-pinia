<script setup lang="ts">
import Hamburger from "@/components/Hamburger.vue";
import TripleDot from "@/components/Meatballs.vue";
</script>

<template>
  <nav class="navbar bg-base-100">
    <div class="flex-none">
      <Hamburger />
    </div>
    <div class="">
      <router-link
        v-bind:to="{ name: `Home` }"
        class="btn btn-ghost normal-case text-xl"
        >Home</router-link
      >
    </div>
    <div class="">
      <router-link
        v-bind:to="{ name: `About` }"
        class="btn btn-ghost normal-case text-xl"
        >About</router-link
      >
    </div>
    <div class="flex-none">
      <TripleDot />
    </div>
  </nav>
  <main class="md:container md:mx-auto">
    <router-view />
  </main>
</template>
