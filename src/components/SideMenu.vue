<template>
  <div
    class="absolute top-0 left-0 hidden h-[35rem] w-96 bg-dark-blue p-10 text-xl text-white xl:top-28 xl:left-auto xl:block xl:h-auto xl:w-auto xl:bg-transparent xl:p-0 xl:text-2xl"
  >
    <router-link
      :to="{ name: 'profile' }"
      @click="hideSideMenu"
      class="flex cursor-pointer items-center"
    >
      <div
        class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-slate-400"
        :class="route.name === 'profile' ? 'border border-custom-red' : ''"
      >
        <img
          v-if="hasAvatar()"
          :src="userStore.user.avatar"
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

      <div class="ml-4">
        <p v-if="userStore.user">{{ userStore.user.name }}</p>
        <p class="text-sm text-custom-gray xl:text-base">
          {{ $t("main.edit_your_profile") }}
        </p>
      </div>
    </router-link>

    <router-link
      :to="{ name: 'home' }"
      @click="hideSideMenu"
      class="mt-5 flex cursor-pointer items-center"
    >
      <HouseIcon
        class="ml-2"
        :class="route.name === 'home' ? 'stroke-custom-red' : ''"
      />
      <p class="ml-8">{{ $t("main.news_feed") }}</p>
    </router-link>

    <router-link
      to="#"
      @click="hideSideMenu"
      class="mt-5 flex cursor-pointer items-center"
    >
      <CameraReelsIcon
        class="ml-2"
        :class="route.name === 'movie_list' ? 'stroke-custom-red' : ''"
      />
      <p class="ml-8">{{ $t("main.list_of_movies") }}</p>
    </router-link>

    <LeftArrowIcon class="mt-20 scale-150 xl:hidden" @click="hideSideMenu" />
  </div>
</template>

<script setup>
import HouseIcon from "@/components/icons/HouseIcon.vue";
import CameraReelsIcon from "@/components/icons/CameraReelsIcon.vue";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";

import { useUserStore } from "@/stores/user.js";
import { useRoute } from "vue-router";

const route = useRoute();
const userStore = useUserStore();

function hideSideMenu() {
  return document.getElementById("side-menu").classList.toggle("hidden");
}

function hasAvatar() {
  return (
    userStore.user &&
    userStore.user.avatar.length >
      (import.meta.env.VITE_BACKEND_BASE_URL + "storage/").length
  );
}
</script>
