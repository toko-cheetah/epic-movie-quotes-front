<template>
  <div class="relative">
    <Field
      class="readonly mb-4 w-full rounded-[0.25rem] bg-[#CED4DA] py-[0.438rem] px-[0.813rem] text-base font-normal text-dark-cyan-blue placeholder-[#6C757D]"
      :class="useFieldError(name).value ? 'border border-custom-red' : ''"
      :type="type"
      :name="name"
      :id="name"
      :rules="rules"
      :placeholder="placeholder"
    />

    <InvalidIcon
      v-if="useFieldError(name).value"
      class="absolute top-3 right-1"
    />

    <PasswordIcon
      v-if="usePasswordIcon && !useFieldError(name).value"
      class="absolute top-3 right-1"
    />
  </div>
</template>

<script setup>
import { Field, useFieldError } from "vee-validate";
import InvalidIcon from "@/components/icons/InvalidIcon.vue";
import PasswordIcon from "@/components/icons/PasswordIcon.vue";

defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: [String, Object],
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  usePasswordIcon: {
    type: Boolean,
    required: false,
  },
});
</script>
