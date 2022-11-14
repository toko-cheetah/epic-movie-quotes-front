<template>
  <BaseLayout>
    <TheHeader />

    <main>
      <RouterView />
    </main>

    <TheFooter />
  </BaseLayout>
</template>

<script setup>
import { RouterView } from "vue-router";
import BaseLayout from "./components/BaseLayout.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>
