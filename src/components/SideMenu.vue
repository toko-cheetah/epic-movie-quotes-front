<template>
  <div
    class="hidden xl:block absolute top-0 xl:top-28 left-0 xl:left-auto w-96 xl:w-auto h-[35rem] xl:h-auto bg-dark-blue xl:bg-transparent text-white text-xl xl:text-2xl p-10 xl:p-0"
  >
    <router-link
      :to="{ name: 'profile' }"
      @click="hideSideMenu"
      class="flex items-center cursor-pointer"
    >
      <div
        class="w-14 h-14 bg-slate-400 rounded-full"
        :class="route.name === 'profile' ? 'border border-custom-red' : ''"
      >
        <img src="@/assets/images/default-profile-photo.png" alt="" />
      </div>

      <div class="ml-4">
        <p v-if="userStore.user">{{ userStore.user.name }}</p>
        <p class="text-sm xl:text-base text-custom-gray">
          {{ $t("main.edit_your_profile") }}
        </p>
      </div>
    </router-link>

    <router-link
      :to="{ name: 'home' }"
      @click="hideSideMenu"
      class="flex items-center mt-5 cursor-pointer"
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
      class="flex items-center mt-5 cursor-pointer"
    >
      <CameraReelsIcon
        class="ml-2"
        :class="route.name === 'movie_list' ? 'stroke-custom-red' : ''"
      />
      <p class="ml-8">{{ $t("main.list_of_movies") }}</p>
    </router-link>

    <LeftArrowIcon class="mt-20 xl:hidden scale-150" @click="hideSideMenu" />
  </div>
</template>

<script setup>
import HouseIcon from "@/components/icons/HouseIcon.vue";
import CameraReelsIcon from "@/components/icons/CameraReelsIcon.vue";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";

import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/user.js";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const userStore = useUserStore();

onMounted(() => {
  axios
    .get("/me")
    .then((res) => (userStore.user = res.data.user))
    .catch((err) => alert(err.response.data.message));
});

function hideSideMenu() {
  return document.getElementById("side-menu").classList.toggle("hidden");
}
</script>
