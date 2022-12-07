<template>
  <AlertMessage
    v-if="show"
    :message="$t('main.please_check_email_to_verify')"
    :clickXIcon="() => (show = false)"
  />
</template>

<script setup>
import AlertMessage from "@/components/Profile/AlertMessage.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const show = ref(true);
const router = useRouter();

setTimeout(() => {
  router.push({ name: "profile" });
}, 3000);
</script>
