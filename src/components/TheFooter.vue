<template>
  <footer
    class="bg-custom-dark-gradient text-beige uppercase font-medium text-[0.5rem] xl:text-xs py-[0.625rem] xl:py-[0.938rem]"
    :class="$i18n.locale === 'ka' ? 'font-helvetica-neue-lt-geo-caps' : ''"
  >
    <p>© 2022 movie quotes. {{ $t("landing_page.all_rights_reserved") }}.</p>
  </footer>
</template>

<script setup></script>
