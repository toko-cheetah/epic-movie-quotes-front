<template>
  <div
    class="h-screen bg-gradient-to-b from-[#181623] via-[#191725] to-[#0D0B14]"
  ></div>
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
