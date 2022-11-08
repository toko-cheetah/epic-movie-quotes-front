<template>
  <footer
    class="bg-gradient-to-b from-[#181623] via-[#191725] to-[#0D0B14] text-beige uppercase font-medium text-[8px] xl:text-xs py-[10px] xl:py-[15px]"
    :class="$i18n.locale === 'ka' ? 'font-helvetica-neue-lt-geo-caps' : ''"
  >
    <p>© 2022 movie quotes. {{ $t("landing_page.all_rights_reserved") }}.</p>
  </footer>
</template>

<script setup></script>
