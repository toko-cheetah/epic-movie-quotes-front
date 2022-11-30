<template>
  <div
    class="absolute xl:fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm backdrop-brightness-50"
  >
    <div
      class="w-full min-h-full xl:w-[37.5rem] xl:min-h-0 py-[4.563rem] px-[8%] xl:py-[3.313rem] xl:px-[7.5rem] bg-custom-dark-gradient xl:bg-none xl:bg-[#222030] text-white text-center"
    >
      <slot></slot>
    </div>
  </div>
</template>
