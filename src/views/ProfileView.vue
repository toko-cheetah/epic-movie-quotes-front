<template>
  <div class="xl:w-1/2 m-auto pt-28">
    <router-link :to="{ name: 'home' }">
      <LeftArrowIcon class="xl:hidden mb-6 ml-[7.5%]" />
    </router-link>

    <p class="hidden xl:block ml-16 font-medium text-2xl">
      {{ $t("main.my_profile") }}
    </p>

    <div
      class="main xl:min-h-[33.438rem] py-6 xl:mt-32 rounded-xl bg-dark-blue"
    >
      <div class="xl:-mt-28 mb-10 text-center">
        <div
          class="w-48 h-48 m-auto mb-2 bg-slate-400 rounded-full flex justify-center items-center"
        >
          <img src="@/assets/images/default-profile-photo.png" alt="" />
        </div>

        <p class="cursor-pointer">{{ $t("main.upload_new_photo") }}</p>
      </div>

      <div>
        <label name="name" class="font-normal text-base text-left mb-2">
          {{ $t("auth.name") }}
        </label>
        <div
          class="flex items-center justify-between xl:justify-start mb-8 border-b border-b-custom-gray xl:border-none"
        >
          <VeeField
            class="w-9/12 xl:w-7/12 xl:border-b border-b-custom-gray"
            type="text"
            name="name"
          />
          <p class="mb-4 xl:ml-8">
            {{ $t("common.edit") }}
          </p>
        </div>

        <label name="email" class="font-normal text-base text-left mb-2">
          {{ $t("auth.email") }}
        </label>
        <div
          class="relative flex items-center justify-between xl:justify-start mb-8"
        >
          <VeeField class="w-9/12 xl:w-7/12" type="email" name="email" />
          <CheckCircleFillIcon
            class="absolute top-3 left-[68%] xl:left-[54%]"
          />
          <p
            v-if="userStore.user && !userStore.user.google_id"
            class="mb-4 xl:ml-8 capitalize"
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
            class="font-normal text-base text-left pt-8 mb-2 block xl:w-7/12 border-t border-t-custom-gray"
          >
            {{ $t("auth.password") }}
          </label>
          <div class="flex items-center justify-between xl:justify-start mb-8">
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
</script>
