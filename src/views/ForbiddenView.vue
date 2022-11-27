<template>
  <div
    class="w-screen h-screen px-[8%] flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#181623] via-[#191725] to-[#0D0B14] text-white"
  >
    <GandolfIcon />

    <TheHeading>{{ $t("error.you_shall_not_pass") }}!</TheHeading>

    <p class="mb-8 font-normal text-base">
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
