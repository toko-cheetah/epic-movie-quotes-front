<template>
  <AlertMessage
    v-if="show"
    :message="$t('main.new_email_verified_successfully')"
    :clickXIcon="() => (show = false)"
  />
</template>

<script setup>
import axios from "@/config/axios/index.js";
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import AlertMessage from "@/components/Profile/AlertMessage.vue";
import { ref } from "vue";

const show = ref(false);
const route = useRoute();
const router = useRouter();

onBeforeMount(() => {
  axios
    .get(
      "/secondary-email/verify/" +
        route.query.id +
        "?email=" +
        route.query.email
    )
    .then((res) =>
      res.status > 199 && res.status < 300
        ? ((show.value = true),
          setTimeout(() => {
            router.push({ name: "profile" });
          }, 3000))
        : alert(res.data)
    )
    .catch((err) => alert(err.response.data.message));
});
</script>
