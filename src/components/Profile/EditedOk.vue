<template>
  <div
    class="absolute top-32 right-5 flex w-96 items-center justify-between rounded border border-[#BADBCC] bg-[#D1E7DD] p-2 text-base text-[#0F5132] xl:right-32"
  >
    <div class="flex items-center gap-2">
      <CheckCircleFillIcon />
      <p>{{ $t("main.changes_updated_successfully") }}</p>
    </div>

    <XIcon class="cursor-pointer opacity-50" @click="clickXIcon" />
  </div>
</template>

<script setup>
import CheckCircleFillIcon from "@/components/icons/CheckCircleFillIcon.vue";
import XIcon from "@/components/icons/XIcon.vue";

defineProps({
  clickXIcon: {
    type: Function,
    required: true,
  },
});
</script>
