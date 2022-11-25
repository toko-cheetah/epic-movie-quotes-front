<template>
  <BaseLayout v-if="showPage">
    <div class="flex flex-col items-center py-20">
      <TaskFilledIcon />

      <TheHeading class="mt-4 mb-6">{{ $t("auth.thank_you") }}!</TheHeading>

      <p class="mb-8 font-normal text-base">
        {{ $t("auth.account_activated") }}.
      </p>

      <router-link :to="{ name: 'home' }">
        <RedBtn class="px-10">{{ $t("auth.go_to_news_feed") }}</RedBtn>
      </router-link>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/LandingPage/BaseLayout.vue";
import TaskFilledIcon from "@/components/icons/TaskFilledIcon.vue";
import TheHeading from "@/components/LandingPage/TheHeading.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import axios from "@/config/axios/index.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showPage = ref(false);

onMounted(() => {
  axios
    .get("/email/verify/" + route.query.id + "?email=" + route.query.email)
    .then(() => (showPage.value = true))
    .catch((err) => alert(err.response.data.message));
});
</script>
