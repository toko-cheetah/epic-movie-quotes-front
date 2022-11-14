<template>
  <Field
    class="rounded-[4px] py-[7px] px-[13px] mb-4 font-normal text-base bg-[#CED4DA] text-dark-cyan-blue placeholder-[#6C757D]"
    :class="useFieldError(name).value ? 'invalid' : ''"
    :type="type"
    :name="name"
    :rules="rules"
    :placeholder="placeholder"
  />
</template>

<script setup>
import { Field, useFieldError } from "vee-validate";

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
});
</script>

<style scoped>
.invalid,
.valid {
  background-repeat: no-repeat;
  background-position: right 7px center;
}
.invalid {
  border: 1px solid #e31221;
  background-image: url("@/assets/icons/invalid.svg");
}

.valid {
  border: 1px solid #198754;
  background-image: url("@/assets/icons/valid-icon.svg");
}
</style>
