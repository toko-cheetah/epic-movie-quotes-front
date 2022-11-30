<template>
  <div class="main xl:w-1/2 m-auto pt-28">
    <router-link :to="{ name: 'home' }">
      <LeftArrowIcon class="xl:hidden" />
    </router-link>

    <p class="mt-5">Profile</p>
  </div>
</template>

<script setup>
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";
</script>
