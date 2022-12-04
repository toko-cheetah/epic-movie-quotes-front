<template>
  <div
    class="main flex h-[26.875rem] gap-2 pt-[30%] text-xl font-bold text-white xl:h-screen xl:gap-4 xl:pt-[15%] xl:text-5xl xl:leading-normal"
  >
    <span>&#8212;</span>

    <div>
      <p class="mb-4 w-[19rem] xl:w-[62.5rem]">“{{ $t(quote) }}”</p>

      <span class="text-base text-[#D9D9D9] xl:text-3xl">
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
