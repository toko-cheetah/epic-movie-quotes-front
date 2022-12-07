<template>
  <ul class="w-9/12 xl:w-7/12">
    <li v-for="(email, index) in secondaryEmails" :key="index" class="mb-8">
      <label
        :name="'email' + index"
        class="mb-2 text-left text-base font-normal"
      >
        {{ $t("auth.email") }}
      </label>

      <div class="relative">
        <input
          class="mb-4 w-full rounded-[0.25rem] py-[0.438rem] px-[0.813rem] text-base font-normal"
          :class="
            !email.email_verified_at
              ? 'border border-[#EC9524] bg-[#EC9524] bg-opacity-20 text-white'
              : 'bg-[#CED4DA] text-dark-cyan-blue'
          "
          type="email"
          :name="'email' + index"
          :id="'email' + index"
          :value="email.secondary_email"
          readonly
        />
        <InfoCircleFillIcon
          v-if="!email.email_verified_at"
          class="absolute top-3 right-2 xl:right-3"
        />
      </div>

      <div class="flex justify-between">
        <p v-if="!email.email_verified_at" class="text-[#EC9524]">
          {{ $t("main.not_verified") }}
        </p>
        <p v-else class="cursor-pointer" @click="makePrimary('email' + index)">
          {{ $t("main.make_this") }} {{ $t("main.primary") }}
        </p>

        <p class="cursor-pointer" @click="deleteEmail('email' + index, index)">
          {{ $t("common.remove") }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup>
import InfoCircleFillIcon from "@/components/icons/InfoCircleFillIcon.vue";

import axios from "@/config/axios/index.js";
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();
const secondaryEmails = ref(null);

onMounted(() => {
  axios
    .get("/secondary-emails")
    .then((res) => (secondaryEmails.value = res.data.secondary_emails))
    .catch((err) => alert(err.response.data.message));
});

function deleteEmail(id, index) {
  axios
    .delete("/secondary-emails/" + document.getElementById(id).value)
    .then(() => secondaryEmails.value.splice(index, 1))
    .catch((err) => alert(err.response.data.message));
}

function makePrimary(id) {
  axios
    .get("/secondary-email/primary/" + document.getElementById(id).value)
    .then(() => userStore.incrementKey())
    .catch((err) => alert(err.response.data.message));
}
</script>
