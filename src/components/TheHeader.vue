<template>
  <header
    class="z-50 flex w-screen items-center justify-between bg-dark-blue py-6 text-base"
    :class="authStore.authenticated ? 'fixed' : ''"
  >
    <SideMenuIcon v-if="showIcon()" @click="showSideMenu" />
    <p v-else class="font-montserrat font-medium uppercase text-beige">
      Movie quotes
    </p>

    <div class="flex flex-row items-center">
      <SearchIcon v-if="showIcon()" class="mr-4" />
      <BellIcon v-if="authStore.authenticated" />

      <div class="relative">
        <select
          class="mx-4 appearance-none bg-transparent py-[0.438rem] pl-[0.688rem] pr-[1.875rem] text-white"
          v-model="$i18n.locale"
          @change="setLocale($event.target.value)"
        >
          <option value="en" :selected="$i18n.locale === 'en'">Eng</option>
          <option value="ka" :selected="$i18n.locale === 'ka'">ქარ</option>
        </select>

        <DropDownIcon class="absolute top-1/2 right-6 -translate-y-1/2" />
      </div>

      <router-link :to="{ name: 'sign_up' }">
        <RedBtn class="mr-4 hidden py-2 px-6 xl:block">
          {{ $t("common.sign_up") }}
        </RedBtn>
      </router-link>

      <router-link :to="{ name: 'login' }" v-if="!authStore.authenticated">
        <LinearBtn class="xl:py-2">{{ $t("common.log_in") }}</LinearBtn>
      </router-link>

      <LinearBtn class="xl:py-2" v-if="authStore.authenticated" @click="logout">
        {{ $t("common.log_out") }}
      </LinearBtn>
    </div>

    <SideMenu v-if="authStore.authenticated" id="side-menu" />
  </header>
</template>

<script setup>
import LinearBtn from "@/components/buttons/LinearBtn.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import DropDownIcon from "@/components/icons/DropDownIcon.vue";
import SideMenuIcon from "@/components/icons/SideMenuIcon.vue";
import BellIcon from "@/components/icons/BellIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SideMenu from "@/components/SideMenu.vue";

import axios from "@/config/axios/index.js";
import { setLocale } from "@vee-validate/i18n";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const router = useRouter();
const authStore = useAuthStore();

function logout() {
  axios
    .get("/logout")
    .then(
      () => (authStore.authenticated = false),
      router.push({ name: "landing_page" })
    )
    .catch((err) => alert(err.response.data.message));
}

function showIcon() {
  return authStore.authenticated && screen.width < 1280;
}

function showSideMenu() {
  return document.getElementById("side-menu").classList.toggle("hidden");
}
</script>
