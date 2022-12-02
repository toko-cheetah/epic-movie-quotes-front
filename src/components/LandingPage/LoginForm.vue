<template>
  <BaseLayout>
    <TheHeading>{{ $t("auth.log_in_to_your_account") }}</TheHeading>
    <p class="text-base font-normal text-custom-gray">
      {{ $t("auth.welcome_please_enter_details") }}.
    </p>

    <Form class="mt-7 flex flex-col" @submit="submit">
      <label name="name" class="mb-2 text-left text-base font-normal">
        {{ $t("auth.name") }} / {{ $t("auth.email") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="text"
        name="name"
        @input="loginData.name = $event.target.value"
        rules="required|min:3"
        :placeholder="$t('auth.name') + ' / ' + $t('auth.email')"
      />
      <ErrorMessage
        class="-mt-4 -mb-1 text-left text-sm font-normal text-[#DC3545]"
        name="name"
      />

      <label name="password" class="mb-2 text-left text-base font-normal">
        {{ $t("auth.password") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="password"
        name="password"
        :use-password-icon="true"
        @input="loginData.password = $event.target.value"
        rules="required"
        :placeholder="$t('auth.password')"
      />
      <ErrorMessage
        class="-mt-4 -mb-1 text-left text-sm font-normal text-[#DC3545]"
        name="password"
      />

      <div class="flex justify-between">
        <label name="remember" class="mb-2 text-left text-base font-normal">
          <input
            type="checkbox"
            name="remember"
            @click="loginData.remember = $event.target.checked ? '1' : null"
          />
          {{ $t("auth.remember_me") }}
        </label>

        <router-link :to="{ name: 'password_request' }">
          <BlueLink>{{ $t("auth.forgot_password") }}?</BlueLink>
        </router-link>
      </div>

      <RedBtn class="mt-2 mb-4">{{ $t("common.log_in") }}</RedBtn>
    </Form>

    <LinearBtn class="relative w-full" @click="authGoogleRedirect">
      {{ $t("auth.log_in_with_Google") }}

      <GoogleIcon class="absolute top-1/2 left-20 -translate-y-1/2" />
    </LinearBtn>

    <div class="mt-8 flex justify-center">
      <p class="text-base font-normal text-custom-gray">
        {{ $t("auth.dont_have_an_account") }}? &nbsp;
      </p>

      <router-link :to="{ name: 'sign_up' }">
        <BlueLink>{{ $t("common.sign_up") }}</BlueLink>
      </router-link>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/LandingPage/BaseLayout.vue";
import TheHeading from "@/components/LandingPage/TheHeading.vue";
import BlueLink from "@/components/LandingPage/BlueLink.vue";
import VeeField from "@/components/form/VeeField.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import LinearBtn from "@/components/buttons/LinearBtn.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import axios from "@/config/axios/index.js";
import { Form, ErrorMessage } from "vee-validate";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const router = useRouter();
const authStore = useAuthStore();

const loginData = reactive({
  name: null,
  password: null,
  remember: null,
});

function submit() {
  axios
    .post("/login", loginData)
    .then(() => router.push({ name: "home" }), (authStore.authenticated = true))
    .catch((err) => alert(err.response.data));
}

function authGoogleRedirect() {
  axios
    .get("/auth/google/redirect")
    .then((res) => (window.location.href = res.data))
    .catch((err) => alert(err.response.data.message));
}
</script>
