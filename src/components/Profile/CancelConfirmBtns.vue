<template>
  <div class="flex items-center justify-end">
    <p class="cursor-pointer" @click="clickCancelBtn">
      {{ $t("common.cancel") }}
    </p>

    <RedBtn class="ml-8 cursor-pointer px-5" @click="clickConfirmBtn">
      {{ $t("common.confirm") }}
    </RedBtn>
  </div>
</template>

<script setup>
import RedBtn from "@/components/buttons/RedBtn.vue";

defineProps({
  clickCancelBtn: {
    type: Function,
    required: true,
  },
  clickConfirmBtn: {
    type: Function,
    required: true,
  },
});
</script>
