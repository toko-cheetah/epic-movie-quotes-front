<template>
  <BaseLayout>
    <div class="flex flex-col items-center py-20">
      <SendCheckFill />

      <TheHeading class="mt-4 mb-6">{{ $t("auth.thank_you") }}!</TheHeading>

      <p class="mb-8 font-normal text-base">
        {{ $t("auth.please_check_your_email") }}.
      </p>

      <a :href="'https://www.' + userEmailEnding" target="_blank">
        <RedBtn class="px-10">{{ $t("auth.go_to_my_email") }}</RedBtn>
      </a>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/auth-and-pass/BaseLayout.vue";
import SendCheckFill from "@/components/icons/SendCheckFill.vue";
import TheHeading from "@/components/auth-and-pass/TheHeading.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userEmailEnding = route.query.email
  ? route.query.email.slice(route.query.email.indexOf("@") + 1)
  : "gmail.com";
</script>
