<template>
  <BaseLayout>
    <TheHeading>{{ $t("auth.create_new_password") }}</TheHeading>
    <p class="font-normal text-base text-custom-gray">
      {{ $t("auth.new_password_must_be_different") }}
    </p>

    <Form class="mt-7 flex flex-col" @submit="submit">
      <label name="password" class="font-normal text-base text-left mb-2">
        {{ $t("auth.password") }}
        <span class="text-[#DC3545]">*</span>
      </label>
      <VeeField
        type="password"
        name="password"
        :use-password-icon="true"
        @input="passUpdateData.password = $event.target.value"
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
        @input="passUpdateData.password_confirmation = $event.target.value"
        rules="required|confirmed:@password"
        :placeholder="$t('auth.password_confirmation')"
      />
      <ErrorMessage
        class="font-normal text-sm text-[#DC3545] text-left -mt-4 -mb-1"
        name="password_confirmation"
      />

      <RedBtn class="mt-2 mb-4">
        {{ $t("auth.reset_password") }}
      </RedBtn>
    </Form>

    <router-link
      class="mt-8 flex justify-center items-center"
      :to="{ name: 'login' }"
    >
      <LeftArrowIcon />

      <p class="font-normal text-base text-custom-gray ml-3">
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
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const passUpdateData = reactive({
  token: null,
  email: null,
  password: null,
  password_confirmation: null,
});

function submit() {
  passUpdateData.token = route.query.token;
  passUpdateData.email = atob(route.query.email);

  axios
    .post("/reset-password", passUpdateData)
    .then((res) =>
      res.status > 199 && res.status < 300
        ? router.push({ name: "password_update" })
        : alert(res.data)
    )
    .catch((err) => alert(err.response.data.message));
}
</script>
