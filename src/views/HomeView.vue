<template>
  <div class="m-auto pt-20 xl:w-1/2 xl:pt-28">
    <div class="flex items-center">
      <div
        class="main flex flex-grow items-center rounded-xl py-8 xl:bg-dark-blue xl:py-4"
      >
        <PencilSquareIcon />
        <p class="ml-3">{{ $t("main.write_new_quote") }}</p>
      </div>

      <div v-if="showSearch()" class="ml-6 flex items-center">
        <SearchIcon />
        <input
          class="ml-3 w-28 bg-transparent"
          type="text"
          :placeholder="$t('main.search_by')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PencilSquareIcon from "@/components/icons/PencilSquareIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";

import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/user.js";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  axios
    .get("/me")
    .then(
      (res) => (
        (userStore.user = res.data.user),
        (userStore.user.avatar = res.data.avatar)
      )
    )
    .catch((err) => alert(err.response.data.message));
});

function showSearch() {
  return screen.width >= 1280;
}
</script>
