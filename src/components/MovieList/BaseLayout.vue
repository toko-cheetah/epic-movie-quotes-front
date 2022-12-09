<template>
  <div
    class="absolute top-0 left-0 flex h-full w-full items-start justify-center backdrop-blur-sm backdrop-brightness-50 xl:fixed"
  >
    <div
      class="min-h-full w-full overflow-scroll bg-custom-dark-gradient p-8 text-center text-white xl:mt-20 xl:max-h-[85%] xl:min-h-0 xl:w-[60rem] xl:rounded-xl"
    >
      <slot name="header"></slot>

      <div
        class="my-8 -ml-8 w-screen border border-custom-gray border-opacity-20 xl:w-[60rem]"
      ></div>

      <slot name="main"></slot>
    </div>
  </div>
</template>
