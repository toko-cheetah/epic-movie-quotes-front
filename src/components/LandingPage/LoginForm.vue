<template>
  <BaseLayout>
    <h1>Login</h1>

    <router-link :to="{ name: 'password_request' }">
      <BlueLink>{{ $t("auth.forgot_password") }}?</BlueLink>
    </router-link>

    <div class="mt-8 flex justify-center">
      <p class="font-normal text-base text-custom-gray">
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
import BlueLink from "@/components/LandingPage/BlueLink.vue";
</script>
