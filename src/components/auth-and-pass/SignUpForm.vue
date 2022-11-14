<template>
  <BaseLayout>
    <TheHeading>{{ $t("auth.create_account") }}</TheHeading>
    <GrayText>{{ $t("auth.start_journey") }}!</GrayText>

    <VeeForm @submit="submit">
      <TheLabel name="name" :required="true">{{ $t("auth.name") }}</TheLabel>
      <VeeField
        type="text"
        name="name"
        v-model="signUpStore.signUpData.name"
        rules="required|min:3|max:15|lower_alpha_num"
        :placeholder="$t('auth.at_least_3_max_15')"
      />
      <VeeError name="name" />

      <TheLabel name="email" :required="true">{{ $t("auth.email") }}</TheLabel>
      <VeeField
        type="email"
        name="email"
        v-model="signUpStore.signUpData.email"
        rules="required|email"
        :placeholder="$t('auth.enter_email')"
      />
      <VeeError name="email" />

      <TheLabel name="password" :required="true">
        {{ $t("auth.password") }}
      </TheLabel>
      <VeeField
        class="password"
        type="password"
        name="password"
        v-model="signUpStore.signUpData.password"
        rules="required|min:8|max:15|lower_alpha_num"
        :placeholder="$t('auth.at_least_8_max_15')"
      />
      <VeeError name="password" />

      <TheLabel name="confirm_password" :required="true">
        {{ $t("auth.confirm_password") }}
      </TheLabel>
      <VeeField
        class="password"
        type="password"
        name="confirm_password"
        rules="required|confirmed:@password"
        :placeholder="$t('auth.confirm_password')"
      />
      <VeeError name="confirm_password" />

      <RedBtn class="mt-2 mb-4">{{ $t("landing_page.get_started") }}</RedBtn>
    </VeeForm>

    <LinearBtn class="w-full">
      <img src="/src/assets/icons/google.svg" class="inline-block mr-2" />
      {{ $t("auth.sign_up_with_google") }}
    </LinearBtn>

    <BottomDiv>
      <GrayText>{{ $t("auth.already_have_an_account") }}? &nbsp;</GrayText>
      <BlueLink>{{ $t("common.log_in") }}</BlueLink>
    </BottomDiv>
  </BaseLayout>
</template>

<script setup>
import GrayText from "./assets/GrayText.vue";
import TheHeading from "./assets/TheHeading.vue";
import BaseLayout from "./assets/BaseLayout.vue";
import TheLabel from "../form/TheLabel.vue";
import VeeField from "../form/VeeField.vue";
import RedBtn from "../buttons/RedBtn.vue";
import LinearBtn from "../buttons/LinearBtn.vue";
import BottomDiv from "./assets/BottomDiv.vue";
import BlueLink from "./assets/BlueLink.vue";
import VeeForm from "../form/VeeForm.vue";
import VeeError from "../form/VeeError.vue";

import { useSignUpStore } from "@/stores/sign-up.js";

const signUpStore = useSignUpStore();

function submit() {
  console.log(signUpStore.signUpData);
}
</script>

<style>
.password {
  background-image: url("/src/assets/icons/password-icon.svg");
  background-repeat: no-repeat;
  background-position: right 7px center;
}
</style>
