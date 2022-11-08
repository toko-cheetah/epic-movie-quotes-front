<template>
  <header class="py-6 flex justify-between items-center bg-dark-blue text-base">
    <p class="text-beige font-montserrat font-medium uppercase">Movie quotes</p>

    <div class="flex flex-row items-center">
      <select class="py-[7px] pl-[11px] pr-[30px] mx-4" v-model="$i18n.locale">
        <option value="en" :selected="$i18n.locale === 'en'">Eng</option>
        <option value="ka" :selected="$i18n.locale === 'ka'">ქარ</option>
      </select>

      <router-link to="#" class="hidden xl:block mr-4">
        <RedBtn class="py-2 px-6">{{ $t("header.sign_up") }}</RedBtn>
      </router-link>

      <router-link to="#">
        <LinearBtn>{{ $t("header.log_in") }}</LinearBtn>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import LinearBtn from "./buttons/LinearBtn.vue";
import RedBtn from "./buttons/RedBtn.vue";
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("../assets/icons/DropDown.svg") no-repeat 80% 53%;
  color: white;
}
</style>
