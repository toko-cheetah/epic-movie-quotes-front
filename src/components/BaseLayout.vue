<template>
  <div
    class="m-auto font-normal"
    :class="
      $i18n.locale === 'ka' ? 'font-helvetica-neue-lt-geo' : 'font-montserrat'
    "
  >
    <slot></slot>
  </div>
</template>

<script setup></script>
