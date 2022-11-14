<template>
  <ErrorMessage
    class="font-normal text-sm text-[#DC3545] text-left -mt-4 -mb-1"
    :name="name"
  />
</template>

<script setup>
import { ErrorMessage } from "vee-validate";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
