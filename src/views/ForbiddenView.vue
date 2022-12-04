<template>
  <div
    class="flex h-screen w-screen flex-col items-center justify-center bg-custom-dark-gradient px-[8%] text-center text-white"
  >
    <GandolfIcon />

    <TheHeading>{{ $t("error.you_shall_not_pass") }}!</TheHeading>

    <p class="mb-8 text-base font-normal">
      {{ $t("error.you_dont_have_permission") }}
    </p>

    <router-link :to="{ name: 'landing_page' }">
      <RedBtn class="px-7">{{ $t("error.return_home") }}</RedBtn>
    </router-link>
  </div>
</template>

<script setup>
import GandolfIcon from "@/components/icons/GandolfIcon.vue";
import TheHeading from "@/components/LandingPage/TheHeading.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
</script>
