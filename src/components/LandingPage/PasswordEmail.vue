<template>
  <BaseLayout>
    <div class="flex flex-col items-center py-20">
      <SendCheckFillIcon />

      <TheHeading class="mt-4 mb-6">
        {{ $t("auth.check_your_email") }}
      </TheHeading>

      <p class="mb-8 text-base font-normal">
        {{ $t("auth.We_sent_password_recover_email") }}.
      </p>

      <a :href="'https://www.' + userEmailEnding" target="_blank">
        <RedBtn class="px-10">{{ $t("auth.go_to_my_email") }}</RedBtn>
      </a>

      <router-link :to="{ name: 'home' }">
        <p class="mt-8 ml-3 text-base font-normal text-custom-gray">
          {{ $t("auth.i_confirm_later") }}
        </p>
      </router-link>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/LandingPage/BaseLayout.vue";
import SendCheckFillIcon from "@/components/icons/SendCheckFillIcon.vue";
import TheHeading from "@/components/LandingPage/TheHeading.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userEmailEnding = route.query.email
  ? route.query.email.slice(route.query.email.indexOf("@") + 1)
  : "gmail.com";
</script>
