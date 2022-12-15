<template>
  <div class="py-28 pl-8 pr-8 xl:pl-[26.875rem] xl:pr-16">
    <div class="mb-8 flex justify-between xl:mb-14">
      <div class="flex flex-col gap-2 font-medium xl:flex-row xl:gap-3">
        <p class="text-2xl">{{ $t("main.my_list_of_movies") }}</p>
        <p v-if="movieStore.movies" class="text-base xl:text-2xl">
          ({{ $t("common.total") }} {{ movieStore.movies.movies.length }})
        </p>
      </div>

      <div
        class="flex flex-col-reverse items-end gap-3 xl:flex-row xl:items-center"
      >
        <div class="flex items-center">
          <SearchIcon />
          <input
            class="ml-3 w-20 bg-transparent xl:w-28"
            type="text"
            :placeholder="$t('main.search_by')"
          />
        </div>

        <router-link :to="{ name: 'movie.add' }" class="relative">
          <RedBtn class="m-0 pl-10 pr-4">{{ $t("main.add_movie") }}</RedBtn>
          <PlusIcon
            class="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
          />
        </router-link>
      </div>
    </div>

    <ul
      v-if="movieStore.movies"
      class="flex flex-wrap justify-center gap-y-14 gap-x-12"
    >
      <li
        v-for="movie in movieStore.movies.movies"
        :key="movie.id"
        @click="router.push({ name: 'movie.get', query: { id: movie.id } })"
        class="cursor-pointer"
      >
        <div
          class="mb-4 flex h-[18.875rem] w-[22.375rem] items-center justify-center overflow-hidden rounded-xl border border-gray-800 xl:h-[23.188rem] xl:w-[27.5rem]"
        >
          <img
            v-if="movie.poster"
            :src="posterLink(movie.poster)"
            alt="Movie poster"
            class="h-full w-full object-cover"
          />
          <p v-else>{{ $t("main.no_photo") }}</p>
        </div>

        <p class="mb-4 text-2xl font-medium">
          {{ movie.name[$i18n.locale] }} ({{ movie.release_year }})
        </p>

        <div class="flex items-center">
          <p class="mr-3 text-xl font-medium">0</p>
          <ChatQuoteIcon />
        </div>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script setup>
import RedBtn from "@/components/buttons/RedBtn.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ChatQuoteIcon from "@/components/icons/ChatQuoteIcon.vue";

import axios from "@/config/axios/index.js";
import { onMounted } from "vue";
import { useMovieStore } from "@/stores/movie.js";
import { useRouter } from "vue-router";

const movieStore = useMovieStore();
const router = useRouter();

const posterLink = (suffix) =>
  import.meta.env.VITE_BACKEND_BASE_URL + "storage/" + suffix;

onMounted(() => {
  axios
    .get("/movies")
    .then((res) => (movieStore.movies = res.data))
    .catch((err) => alert(err));
});
</script>
