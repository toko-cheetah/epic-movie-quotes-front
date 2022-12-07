<template>
  <BaseLayout class="z-[60] max-[1280px]:fixed">
    <TheHeading class="mb-14 border-b border-b-custom-gray pb-5 text-left">{{
      $t("main.add_new_email")
    }}</TheHeading>

    <label name="new_email" class="mb-2 block text-left text-base font-normal">
      {{ $t("main.new_email") }}
    </label>
    <VeeField
      type="email"
      name="new_email"
      rules="required|email"
      :placeholder="$t('main.enter_new_email')"
    />
    <ErrorMessage
      class="-mt-4 -mb-1 block text-left text-sm font-normal text-[#DC3545]"
      name="new_email"
    />

    <div class="mt-10 flex items-center justify-end">
      <router-link :to="{ name: 'profile' }">
        {{ $t("common.cancel") }}
      </router-link>

      <RedBtn class="ml-8 cursor-pointer px-5" @click="addEmail">
        {{ $t("common.add") }}
      </RedBtn>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/LandingPage/BaseLayout.vue";
import TheHeading from "@/components/LandingPage/TheHeading.vue";
import VeeField from "@/components/form/VeeField.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";

import axios from "@/config/axios/index.js";
import { ErrorMessage, useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();
const router = useRouter();
const { values } = useForm();

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function addEmail() {
  axios
    .post("/secondary-email", { email: values.new_email })
    .then(
      () => userStore.incrementKey(),
      router.push({ name: "new_email.check" })
    )
    .catch((err) => alert(err.response.data.message));
}
</script>
