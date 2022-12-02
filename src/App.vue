<template>
  <div
    class="m-auto font-normal"
    :class="
      $i18n.locale === 'ka' ? 'font-helvetica-neue-lt-geo' : 'font-montserrat'
    "
  >
    <TheHeader v-if="$route.name !== 'forbidden'" />

    <main
      class="min-h-screen bg-custom-dark-gradient text-base text-white xl:text-xl"
    >
      <RouterView />
    </main>

    <TheFooter v-if="$route.name !== 'forbidden'" />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
