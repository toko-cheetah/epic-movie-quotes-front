<template>
  <div class="m-auto pt-28 xl:w-1/2">
    <router-link :to="{ name: 'home' }">
      <LeftArrowIcon class="mb-6 ml-[7.5%] xl:hidden" />
    </router-link>

    <p class="ml-16 hidden text-2xl font-medium xl:block">
      {{ $t("main.my_profile") }}
    </p>

    <div
      class="main rounded-xl bg-dark-blue py-6 xl:mt-32 xl:min-h-[33.438rem]"
    >
      <div class="mb-10 text-center xl:-mt-28">
        <div
          class="m-auto mb-2 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-slate-400"
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

        <p class="cursor-pointer" @click="clickInput('avatar')">
          {{ $t("main.upload_new_photo") }}
        </p>
        <input
          type="file"
          name="avatar"
          id="avatar"
          @change="sendAvatar"
          hidden
        />
      </div>

      <div>
        <label name="name" class="mb-2 text-left text-base font-normal">
          {{ $t("auth.name") }}
        </label>
        <div
          class="mb-8 flex items-center justify-between border-b border-b-custom-gray xl:justify-start xl:border-none"
        >
          <VeeField
            class="w-9/12 border-b-custom-gray xl:w-7/12 xl:border-b"
            type="text"
            name="name"
          />
          <p class="mb-4 xl:ml-8">
            {{ $t("common.edit") }}
          </p>
        </div>

        <label name="email" class="mb-2 text-left text-base font-normal">
          {{ $t("auth.email") }}
        </label>
        <div
          class="relative mb-8 flex items-center justify-between xl:justify-start"
        >
          <VeeField class="w-9/12 xl:w-7/12" type="email" name="email" />
          <CheckCircleFillIcon
            class="absolute top-3 left-[68%] xl:left-[54%]"
          />
          <p
            v-if="userStore.user && !userStore.user.google_id"
            class="mb-4 capitalize xl:ml-8"
          >
            {{ $t("main.primary") }}
          </p>
        </div>

        <div
          v-if="userStore.user && !userStore.user.google_id"
          class="relative mb-8"
        >
          <LinearBtn class="pl-9 xl:pl-9">
            {{ $t("main.add_new_email") }}
          </LinearBtn>
          <PlusIcon class="absolute top-3 left-3 cursor-pointer" />
        </div>

        <div v-if="userStore.user && !userStore.user.google_id">
          <label
            name="password"
            class="mb-2 block border-t border-t-custom-gray pt-8 text-left text-base font-normal xl:w-7/12"
          >
            {{ $t("auth.password") }}
          </label>
          <div class="mb-8 flex items-center justify-between xl:justify-start">
            <VeeField
              class="w-9/12 xl:w-7/12"
              type="password"
              name="password"
            />
            <p class="mb-4 xl:ml-8">
              {{ $t("common.edit") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";
import CheckCircleFillIcon from "@/components/icons/CheckCircleFillIcon.vue";
import LinearBtn from "@/components/buttons/LinearBtn.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import VeeField from "@/components/form/VeeField.vue";
import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/user.js";
import { useForm } from "vee-validate";
import { onMounted } from "vue";

const userStore = useUserStore();
const { setValues } = useForm();

setValues({
  name: userStore.user ? userStore.user.name : null,
  email: userStore.user ? userStore.user.email : null,
  password: "dummypass",
});

onMounted(() => {
  return document
    .querySelectorAll(".readonly")
    .forEach((el) => el.setAttribute("readonly", true));
});

function sendAvatar(e) {
  const formData = new FormData();
  formData.append("avatar", e.target.files[0]);

  axios
    .post("/avatar", formData)
    .then((res) => (userStore.user.avatar = res.data.avatar))
    .catch((err) => alert(err.response.data.message));
}

function clickInput(id) {
  return document.getElementById(id).click();
}

function hasAvatar() {
  return (
    userStore.user &&
    userStore.user.avatar.length >
      (import.meta.env.VITE_BACKEND_BASE_URL + "storage/").length
  );
}
</script>
