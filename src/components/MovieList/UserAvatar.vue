<template>
  <div class="mb-7 flex items-center">
    <div
      class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-slate-400"
    >
      <img
        v-if="hasAvatar()"
        :src="userStore.user.avatar"
        alt="User avatar"
        class="h-full w-full object-cover"
      />
      <img
        v-else
        src="@/assets/images/default-profile-photo.png"
        alt="Default avatar"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="ml-4">
      <p v-if="userStore.user">{{ userStore.user.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();

function hasAvatar() {
  return (
    userStore.user &&
    userStore.user.avatar.length >
      (import.meta.env.VITE_BACKEND_BASE_URL + "storage/").length
  );
}
</script>
