<template>
  <label :for="name" class="font-normal text-base text-left mb-2">
    <slot></slot> <span v-if="required" class="text-[#DC3545]">*</span>
  </label>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: true,
  },
});
</script>
