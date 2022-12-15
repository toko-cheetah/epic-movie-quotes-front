<template>
  <div
    class="py-28 pl-8 pr-8 xl:pl-[26.875rem] xl:pr-16"
    :key="movieStore.movieGetKey"
  >
    <p class="mb-8 text-2xl font-medium xl:mb-14">
      {{ $t("main.movie_discription") }}
    </p>

    <div v-if="movieStore.movie" class="mb-8 flex flex-wrap gap-6 xl:mb-11">
      <div
        class="flex h-[18.875rem] w-[22.375rem] items-center justify-center overflow-hidden rounded-xl border border-gray-800 xl:h-[27.563rem] xl:w-[50.563rem]"
      >
        <img
          v-if="movieStore.movie.movie.poster"
          :src="posterLink(movieStore.movie.movie.poster)"
          alt="Movie poster"
          class="h-full w-full object-cover"
        />
        <p v-else>{{ $t("main.no_photo") }}</p>
      </div>

      <div class="max-w-[50.563rem] flex-grow">
        <div
          class="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3"
        >
          <p class="text-2xl font-medium text-beige">
            {{ movieStore.movie.movie.name[$i18n.locale] }}
            ({{ movieStore.movie.movie.release_year }})
          </p>

          <div class="flex gap-x-10 rounded-md bg-dark-blue py-3 px-7">
            <router-link
              :to="{ name: 'movie.edit', query: { id: route.query.id } }"
            >
              <PencilIcon class="cursor-pointer" />
            </router-link>

            <TrashIcon class="cursor-pointer" @click="remove" />
          </div>
        </div>

        <ul class="mb-5">
          <li
            v-for="genre in movieStore.movie.genre"
            :key="genre.id"
            class="mr-2 inline-block rounded bg-gray-500 py-2 px-4 text-lg font-bold last:mr-0"
          >
            {{ genre.name }}
          </li>
        </ul>

        <p class="mb-5 text-lg font-bold text-gray-300">
          {{ $t("main.director") }}:&emsp;

          <span class="text-white">
            {{ movieStore.movie.movie.director[$i18n.locale] }}
          </span>
        </p>

        <p class="mb-5 text-lg font-bold text-gray-300">
          {{ $t("main.budget") }}:&emsp;

          <span class="text-white">
            {{ movieStore.movie.movie.budget }}
          </span>
        </p>

        <p class="text-lg text-gray-300">
          {{ movieStore.movie.movie.description[$i18n.locale] }}
        </p>
      </div>
    </div>

    <div class="mb-14 flex items-center gap-x-10 gap-y-4">
      <p>{{ $t("main.quotes") }} ({{ $t("common.total") }} 0)</p>

      <div class="relative">
        <RedBtn class="pl-10 pr-4">{{ $t("main.add_quote") }}</RedBtn>
        <PlusIcon class="absolute top-1/2 left-4 -translate-y-1/2" />
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import PencilIcon from "@/components/icons/PencilIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

import axios from "@/config/axios/index.js";
import { useMovieStore } from "@/stores/movie.js";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const movieStore = useMovieStore();
const route = useRoute();
const router = useRouter();

const posterLink = (suffix) =>
  import.meta.env.VITE_BACKEND_BASE_URL + "storage/" + suffix;

onMounted(() => {
  axios
    .get("/movies/" + route.query.id)
    .then((res) => (movieStore.movie = res.data))
    .catch((err) => alert(err));
});

function remove() {
  axios
    .delete("/movies/" + route.query.id)
    .then(() => router.push({ name: "movie_list" }))
    .catch((err) => alert(err));
}
</script>
