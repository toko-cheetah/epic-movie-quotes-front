<template>
  <div class="mb-10 text-center xl:-mt-28">
    <div
      class="m-auto mb-2 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-slate-400"
    >
      <img
        v-if="showUserAvatarIf"
        :src="userAvatarSrc"
        alt=""
        class="h-full w-full object-cover"
      />
      <img
        v-else
        src="@/assets/images/default-profile-photo.png"
        alt=""
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
defineProps({
  showUserAvatarIf: {
    type: Boolean,
    required: true,
  },
  userAvatarSrc: {
    type: String,
    required: true,
  },
  sendAvatar: {
    type: Function,
    required: true,
  },
});

function clickInput(id) {
  return document.getElementById(id).click();
}
</script>
