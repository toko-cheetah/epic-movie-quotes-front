<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";
import axios from "@/config/axios/index.js";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  axios
    .get("/auth/google/callback?code=" + route.query.code)
    .then(() => router.push({ name: "home" }), (authStore.authenticated = true))
    .catch((err) => alert(err.response.data));
});
</script>
