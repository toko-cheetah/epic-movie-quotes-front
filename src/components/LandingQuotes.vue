<template>
  <div
    class="main h-[26.875rem] xl:h-screen pt-[30%] xl:pt-[15%] text-white flex gap-2 xl:gap-4 text-xl xl:text-5xl xl:leading-normal font-bold"
  >
    <span>&#8212;</span>

    <div>
      <p class="w-[19rem] xl:w-[62.5rem] mb-4">“{{ $t(quote) }}”</p>

      <span class="text-base xl:text-3xl text-[#D9D9D9]">
        {{ $t(movie) }}, {{ year }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});
</script>
