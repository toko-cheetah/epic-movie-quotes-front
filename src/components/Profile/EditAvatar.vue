<template>
  <div class="mb-10 text-center xl:-mt-28">
    <div
      class="m-auto mb-2 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-slate-400"
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

    <p class="cursor-pointer" @click="clickInput('avatar')">
      {{ $t("main.upload_new_photo") }}
    </p>
    <input type="file" name="avatar" id="avatar" @change="sendAvatar" hidden />
  </div>
</template>

<script setup>
import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();

function clickInput(id) {
  return document.getElementById(id).click();
}

function sendAvatar(e) {
  const formData = new FormData();
  formData.append("avatar", e.target.files[0]);

  axios
    .post("/avatar", formData)
    .then((res) => (userStore.user.avatar = res.data.avatar))
    .catch((err) => alert(err.response.data.message));
}

function hasAvatar() {
  return (
    userStore.user &&
    userStore.user.avatar.length >
      (import.meta.env.VITE_BACKEND_BASE_URL + "storage/").length
  );
}
</script>
