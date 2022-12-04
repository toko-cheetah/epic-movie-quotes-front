<template>
  <div>
    <label
      name="current_password"
      class="mb-2 block border-t border-t-custom-gray pt-8 text-left text-base font-normal xl:w-7/12"
    >
      {{ $t("auth.password") }}
    </label>
    <div class="mb-8 flex items-center justify-between xl:justify-start">
      <VeeField
        class="w-9/12 xl:w-7/12"
        type="password"
        name="current_password"
      />
      <p
        v-if="showEditButtonIf"
        class="mb-4 cursor-pointer xl:ml-8"
        @click="clickEditBtn"
      >
        {{ $t("common.edit") }}
      </p>
    </div>

    <div v-if="canEditPasswordIf" class="w-9/12 xl:w-7/12">
      <div class="mb-10 rounded border border-custom-gray p-6">
        <p>{{ $t("main.passwords_should_contain") }}:</p>

        <ul class="mt-4 list-disc pl-4">
          <li>{{ $t("main.min_or_more_characters", { min: 8 }) }}</li>
          <li>{{ $t("main.num_lowercase_character", { num: 15 }) }}</li>
        </ul>
      </div>

      <label name="password" class="mb-2 text-left text-base font-normal">
        {{ $t("main.new_password") }}
      </label>
      <ErrorMessage
        class="block text-left text-sm font-normal text-[#DC3545]"
        name="password"
      />
      <VeeField
        type="password"
        name="password"
        :use-password-icon="true"
        rules="required|min:8|max:15|lower_alpha_num"
      />

      <label
        name="password_confirmation"
        class="mb-2 text-left text-base font-normal"
      >
        {{ $t("main.confirm_new_password") }}
      </label>
      <ErrorMessage
        class="block text-left text-sm font-normal text-[#DC3545]"
        name="password_confirmation"
      />
      <VeeField
        type="password"
        name="password_confirmation"
        :use-password-icon="true"
        rules="required|confirmed:@password"
      />
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
  canEditPasswordIf: {
    type: Boolean,
    required: true,
  },
  clickEditBtn: {
    type: Function,
    required: true,
  },
});
</script>
