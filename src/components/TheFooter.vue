<template>
  <footer
    class="bg-custom-dark-gradient py-[0.625rem] text-[0.5rem] font-medium uppercase text-beige xl:py-[0.938rem] xl:text-xs"
    :class="$i18n.locale === 'ka' ? 'font-helvetica-neue-lt-geo-caps' : ''"
  >
    <p>© 2022 movie quotes. {{ $t("landing_page.all_rights_reserved") }}.</p>
  </footer>
</template>

<script setup></script>
