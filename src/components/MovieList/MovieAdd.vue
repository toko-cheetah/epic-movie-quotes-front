<template>
  <BaseLayout class="z-[60]">
    <template #header>
      <div class="relative">
        <p class="text-xl font-medium xl:text-2xl">
          {{ $t("main.add_movie") }}
        </p>

        <router-link :to="{ name: 'movie_list' }">
          <XWhiteIcon
            class="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
          />
        </router-link>
      </div>
    </template>

    <template #main>
      <div>
        <UserAvatar />

        <Form class="text-left">
          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="text"
              name="name_en"
              id="name_en"
              rules="required"
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
              rules="required"
              placeholder="ფილმის სახელი"
            />
            <p class="absolute top-2 right-4 text-custom-gray">ქარ</p>
            <ErrorMessage name="name_ka" class="text-sm text-[#DC3545]" />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="text"
              name="genre"
              id="genre"
              rules="required"
              :placeholder="$t('main.genre')"
            />
            <ErrorMessage name="genre" class="text-sm text-[#DC3545]" />
          </div>

          <div class="relative mb-5">
            <Field
              class="w-full rounded-[0.3rem] border border-custom-gray bg-transparent py-2 pl-4 pr-14 placeholder-custom-gray"
              type="text"
              name="director_en"
              id="director_en"
              rules="required"
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
              rules="required"
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
              rules="required"
              hidden
            />
            <ErrorMessage name="poster" class="text-sm text-[#DC3545]" />
          </div>

          <RedBtn class="w-full">{{ $t("main.add_movie") }}</RedBtn>
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

import { Form, Field, ErrorMessage } from "vee-validate";

function clickInput(id) {
  return document.getElementById(id).click();
}

function dropFile(e) {
  const file = new DataTransfer();
  file.items.add(e.dataTransfer.files[0]);
  document.getElementById("poster").files = file.files;
}
</script>
