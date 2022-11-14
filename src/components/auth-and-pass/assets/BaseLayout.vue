<template>
  <div
    class="absolute xl:fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-brightness-50"
  >
    <div
      class="absolute top-0 left-0 xl:top-1/2 xl:-translate-x-1/2 xl:left-1/2 xl:-translate-y-1/2 w-full min-h-full xl:w-[600px] xl:min-h-0 py-[73px] px-[8%] xl:py-[53px] xl:px-[120px] bg-gradient-to-b from-[#181623] via-[#191725] to-[#0D0B14] xl:bg-none xl:bg-[#222030] text-white text-center"
    >
      <slot></slot>
    </div>
  </div>
</template>
