<template>
  <BaseLayout class="z-[60]">
    <template #header>
      <div class="relative">
        <p class="text-xl font-medium xl:text-2xl">
          {{ $t("main.edit_movie") }}
        </p>

        <router-link :to="{ name: 'movie.get', query: { id: route.query.id } }">
          <XWhiteIcon
            class="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
          />
        </router-link>
      </div>
    </template>

    <template #main>
      <div>
        <UserAvatar />

        <Form class="text-left" id="form" @submit="submit">
          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="text"
              name="name_en"
              id="name_en"
              :value="movieStore.movie && movieStore.movie.movie.name.en"
              rules="required|alpha_num_spaces"
              placeholder="Movie name"
            />
            <p class="absolute top-2 right-4 text-custom-gray">Eng</p>
            <ErrorMessage name="name_en" class="text-sm text-[#DC3545]" />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="text"
              name="name_ka"
              id="name_ka"
              :value="movieStore.movie && movieStore.movie.movie.name.ka"
              rules="required|geo_num_spaces"
              placeholder="ფილმის სახელი"
            />
            <p class="absolute top-2 right-4 text-custom-gray">ქარ</p>
            <ErrorMessage name="name_ka" class="text-sm text-[#DC3545]" />
          </div>

          <div class="mb-5">
            <ul
              class="flex w-full flex-wrap justify-around rounded-[0.3rem] border border-custom-gray bg-transparent p-2"
            >
              <li
                v-for="(genre, index) in movieStore.genres"
                :key="genre"
                class="text-center"
              >
                <Field
                  class="w-full"
                  type="checkbox"
                  name="genre"
                  :id="'genre' + index"
                  :value="genre"
                  @click="addToGenreArray"
                />{{ genre }}
              </li>
            </ul>
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="text"
              name="director_en"
              id="director_en"
              :value="movieStore.movie && movieStore.movie.movie.director.en"
              rules="required|alpha_num_spaces"
              placeholder="Director"
            />
            <p class="absolute top-2 right-4 text-custom-gray">Eng</p>
            <ErrorMessage name="director_en" class="text-sm text-[#DC3545]" />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="text"
              name="director_ka"
              id="director_ka"
              :value="movieStore.movie && movieStore.movie.movie.director.ka"
              rules="required|geo_num_spaces"
              placeholder="რეჟისორი"
            />
            <p class="absolute top-2 right-4 text-custom-gray">ქარ</p>
            <ErrorMessage name="director_ka" class="text-sm text-[#DC3545]" />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="number"
              name="budget"
              id="budget"
              :value="movieStore.movie && movieStore.movie.movie.budget"
              rules="required"
              :placeholder="$t('main.budget')"
            />
            <p class="absolute top-2 right-4 text-custom-gray">$</p>
            <ErrorMessage name="budget" class="text-sm text-[#DC3545]" />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="number"
              min="1800"
              max="2099"
              name="release_year"
              id="release_year"
              :value="movieStore.movie && movieStore.movie.movie.release_year"
              rules="required|between:1800,2099"
              :placeholder="$t('main.release_year')"
            />
            <ErrorMessage name="release_year" class="text-sm text-[#DC3545]" />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              as="textarea"
              name="description_en"
              id="description_en"
              :value="movieStore.movie && movieStore.movie.movie.description.en"
              rules="required"
              placeholder="Movie description"
            />
            <p class="absolute top-2 right-4 text-custom-gray">Eng</p>
            <ErrorMessage
              name="description_en"
              class="text-sm text-[#DC3545]"
            />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              as="textarea"
              name="description_ka"
              id="description_ka"
              :value="movieStore.movie && movieStore.movie.movie.description.ka"
              rules="required"
              placeholder="ფილმის აღწერა"
            />
            <p class="absolute top-2 right-4 text-custom-gray">ქარ</p>
            <ErrorMessage
              name="description_ka"
              class="text-sm text-[#DC3545]"
            />
          </div>

          <div class="relative mb-5">
            <div
              class="flex w-full items-center gap-3 rounded-[0.3rem] border border-custom-gray py-2 pl-4 pr-14 text-white"
              @dragover.prevent
              @drop.prevent="dropFile"
            >
              <CameraPhotoIcon />
              <p class="text-center">
                {{ $t("main.drag_drop_image_here_or") }}
              </p>
              <p
                class="cursor-pointer rounded bg-[#9747FF] bg-opacity-40 p-2 text-center"
                @click="clickInput('poster')"
              >
                {{ $t("main.choose_file") }}
              </p>
            </div>
            <Field
              type="file"
              name="poster"
              id="poster"
              v-model="fileInputValue"
              @input="fileName = $event.target.files[0].name"
              hidden
            />
            <p class="break-words text-sm">{{ fileName }}</p>
          </div>

          <RedBtn class="w-full">{{ $t("main.edit_movie") }}</RedBtn>
        </Form>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/MovieList/BaseLayout.vue";
import XWhiteIcon from "@/components/icons/XWhiteIcon.vue";
import UserAvatar from "@/components/MovieList/UserAvatar.vue";
import CameraPhotoIcon from "@/components/icons/CameraPhotoIcon.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";

import axios from "@/config/axios/index.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { useMovieStore } from "@/stores/movie.js";
import { useRoute, useRouter } from "vue-router";

const movieStore = useMovieStore();
const route = useRoute();
const router = useRouter();

const fileName = ref(movieStore.movie ? movieStore.movie.movie.poster : null);
const fileInputValue = ref(null);
const genreArray = ref([]);

function clickInput(id) {
  return document.getElementById(id).click();
}

function dropFile(e) {
  const file = new DataTransfer();
  file.items.add(e.dataTransfer.files[0]);
  document.getElementById("poster").files = file.files;
  fileName.value = document.getElementById("poster").files[0].name;
  fileInputValue.value = document.getElementById("poster").files[0].name;
}

function addToGenreArray(e) {
  return genreArray.value.includes(e.target.value)
    ? genreArray.value.splice(genreArray.value.indexOf(e.target.value), 1)
    : genreArray.value.push(e.target.value);
}

function submit() {
  const formData = new FormData(document.getElementById("form"));
  formData.set("poster", document.getElementById("poster").files[0]);
  formData.set("genre", genreArray.value);
  formData.append("_method", "PUT");

  axios
    .post("/movies/" + route.query.id, formData)
    .then(
      () => movieStore.incrementKey(),
      router.push({ name: "movie.get", query: { id: route.query.id } })
    )
    .catch((err) => alert(err));
}
</script>
