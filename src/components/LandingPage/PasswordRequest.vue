<template>
  <BaseLayout>
    <TheHeading>{{ $t("auth.forgot_password") }}?</TheHeading>
    <p class="text-base font-normal text-custom-gray">
      {{ $t("auth.enter_email_we_send_instructions") }}
    </p>

    <Form class="mt-7 flex flex-col" @submit="submit">
      <label name="email" class="mb-2 text-left text-base font-normal">
        {{ $t("auth.email") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="email"
        name="email"
        @input="passResetData.email = $event.target.value"
        rules="required|email"
        :placeholder="$t('auth.enter_email')"
      />
      <ErrorMessage
        class="-mt-4 -mb-1 text-left text-sm font-normal text-[#DC3545]"
        name="email"
      />

      <RedBtn class="mt-2 mb-4">
        {{ $t("auth.send_instructions") }}
      </RedBtn>
    </Form>

    <router-link
      class="mt-8 flex items-center justify-center"
      :to="{ name: 'login' }"
    >
      <LeftArrowIcon />

      <p class="ml-3 text-base font-normal text-custom-gray">
        {{ $t("auth.back_to_log_in") }}
      </p>
    </router-link>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/LandingPage/BaseLayout.vue";
import TheHeading from "@/components/LandingPage/TheHeading.vue";
import VeeField from "@/components/form/VeeField.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";
import axios from "@/config/axios/index.js";
import { Form, ErrorMessage } from "vee-validate";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const passResetData = reactive({ email: null });

function submit() {
  axios
    .post("/forgot-password", passResetData)
    .then((res) =>
      res.status > 199 && res.status < 300
        ? router.push({
            name: "password_email",
            query: { email: passResetData.email },
          })
        : alert(res.data)
    )
    .catch((err) => alert(err.response.data.message));
}
</script>
