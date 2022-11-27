<template>
  <BaseLayout>
    <TheHeading>{{ $t("auth.create_account") }}</TheHeading>
    <p class="font-normal text-base text-custom-gray">
      {{ $t("auth.start_journey") }}!
    </p>

    <Form class="mt-7 flex flex-col" @submit="submit">
      <label name="name" class="font-normal text-base text-left mb-2">
        {{ $t("auth.name") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="text"
        name="name"
        @input="signUpData.name = $event.target.value"
        rules="required|min:3|max:15|lower_alpha_num"
        :placeholder="$t('auth.min_max_and_lower_case', { min: 3, max: 15 })"
      />
      <ErrorMessage
        class="font-normal text-sm text-[#DC3545] text-left -mt-4 -mb-1"
        name="name"
      />

      <label name="email" class="font-normal text-base text-left mb-2">
        {{ $t("auth.email") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="email"
        name="email"
        @input="signUpData.email = $event.target.value"
        rules="required|email"
        :placeholder="$t('auth.enter_email')"
      />
      <ErrorMessage
        class="font-normal text-sm text-[#DC3545] text-left -mt-4 -mb-1"
        name="email"
      />

      <label name="password" class="font-normal text-base text-left mb-2">
        {{ $t("auth.password") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="password"
        name="password"
        :use-password-icon="true"
        @input="signUpData.password = $event.target.value"
        rules="required|min:8|max:15|lower_alpha_num"
        :placeholder="$t('auth.min_max_and_lower_case', { min: 8, max: 15 })"
      />
      <ErrorMessage
        class="font-normal text-sm text-[#DC3545] text-left -mt-4 -mb-1"
        name="password"
      />

      <label
        name="password_confirmation"
        class="font-normal text-base text-left mb-2"
      >
        {{ $t("auth.password_confirmation") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="password"
        name="password_confirmation"
        :use-password-icon="true"
        @input="signUpData.password_confirmation = $event.target.value"
        rules="required|confirmed:@password"
        :placeholder="$t('auth.password_confirmation')"
      />
      <ErrorMessage
        class="font-normal text-sm text-[#DC3545] text-left -mt-4 -mb-1"
        name="password_confirmation"
      />

      <RedBtn class="mt-2 mb-4">{{ $t("landing_page.get_started") }}</RedBtn>
    </Form>

    <a :href="authGoogleUrl">
      <LinearBtn class="relative w-full">
        {{ $t("auth.sign_up_with_google") }}

        <GoogleIcon
          class="absolute top-1/2 -translate-y-1/2"
          :class="$i18n.locale === 'ka' ? 'left-10' : 'left-16'"
        />
      </LinearBtn>
    </a>

    <div class="mt-8 flex justify-center">
      <p class="font-normal text-base text-custom-gray">
        {{ $t("auth.already_have_an_account") }}? &nbsp;
      </p>

      <router-link :to="{ name: 'login' }">
        <BlueLink>{{ $t("common.log_in") }}</BlueLink>
      </router-link>
    </div>
  </BaseLayout>
</template>

<script setup>
import TheHeading from "@/components/LandingPage/TheHeading.vue";
import BaseLayout from "@/components/LandingPage/BaseLayout.vue";
import VeeField from "@/components/form/VeeField.vue";
import RedBtn from "@/components/buttons/RedBtn.vue";
import LinearBtn from "@/components/buttons/LinearBtn.vue";
import BlueLink from "@/components/LandingPage/BlueLink.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import { Form, ErrorMessage } from "vee-validate";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "@/config/axios/index.js";

const router = useRouter();

const authGoogleUrl =
  import.meta.env.VITE_BACKEND_BASE_URL + "api/auth/google/redirect";

const signUpData = reactive({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
});

function submit() {
  axios
    .post("/register", signUpData)
    .then(() =>
      router.push({
        name: "verification_notice",
        query: { email: signUpData.email },
      })
    )
    .catch((err) => alert(err.response.data.message));
}
</script>
