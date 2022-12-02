<template>
  <div
    class="absolute top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-sm backdrop-brightness-50 xl:fixed"
  >
    <div
      class="min-h-full w-full bg-custom-dark-gradient py-[4.563rem] px-[8%] text-center text-white xl:min-h-0 xl:w-[37.5rem] xl:bg-[#222030] xl:bg-none xl:py-[3.313rem] xl:px-[7.5rem]"
    >
      <slot></slot>
    </div>
  </div>
</template>
