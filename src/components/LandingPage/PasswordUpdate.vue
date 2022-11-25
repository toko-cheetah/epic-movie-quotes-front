<template>
  <BaseLayout>
    <div class="flex flex-col items-center py-20">
      <TaskFilledIcon />

      <TheHeading class="mt-4 mb-6">{{ $t("auth.success") }}!</TheHeading>

      <p class="mb-8 font-normal text-base">
        {{ $t("auth.password_changed_successfully") }}.
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
</script>
