<template>
  <div>
    <label name="name" class="mb-2 text-left text-base font-normal">
      {{ $t("auth.name") }}
    </label>
    <ErrorMessage
      class="block w-9/12 text-left text-sm font-normal text-[#DC3545] xl:w-7/12"
      name="name"
    />
    <div
      class="mb-8 flex items-center justify-between border-b border-b-custom-gray xl:justify-start xl:border-none"
    >
      <VeeField
        class="w-9/12 border-b-custom-gray xl:w-7/12 xl:border-b"
        type="text"
        name="name"
        rules="required|min:3|max:15|lower_alpha_num"
      />
      <p
        v-if="showEditButtonIf"
        class="mb-4 cursor-pointer xl:ml-8"
        @click="clickEditBtn"
      >
        {{ $t("common.edit") }}
      </p>
    </div>
  </div>
</template>

<script setup>
import VeeField from "@/components/form/VeeField.vue";
import { ErrorMessage } from "vee-validate";

defineProps({
  showEditButtonIf: {
    type: Boolean,
    required: true,
  },
  clickEditBtn: {
    type: Function,
    required: true,
  },
});
</script>
