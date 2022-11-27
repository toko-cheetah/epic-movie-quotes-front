<template>
  <header class="py-6 flex justify-between items-center bg-dark-blue text-base">
    <p class="text-beige font-montserrat font-medium uppercase">Movie quotes</p>

    <div class="flex flex-row items-center">
      <div class="relative">
        <select
          class="py-[0.438rem] pl-[0.688rem] pr-[1.875rem] mx-4 appearance-none bg-transparent text-white"
          v-model="$i18n.locale"
          @change="setLocale($event.target.value)"
        >
          <option value="en" :selected="$i18n.locale === 'en'">Eng</option>
          <option value="ka" :selected="$i18n.locale === 'ka'">ქარ</option>
        </select>

        <DropDownIcon class="absolute top-1/2 -translate-y-1/2 right-6" />
      </div>

      <router-link :to="{ name: 'sign_up' }">
        <RedBtn class="hidden xl:block mr-4 py-2 px-6">
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
  </header>
</template>

<script setup>
import LinearBtn from "@/components/buttons/LinearBtn.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import { setLocale } from "@vee-validate/i18n";
import DropDownIcon from "@/components/icons/DropDownIcon.vue";
import axios from "@/config/axios/index.js";
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
</script>
