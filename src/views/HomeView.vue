<template>
  <div class="xl:w-1/2 m-auto pt-20 xl:pt-28">
    <div class="flex items-center">
      <div
        class="main flex-grow flex items-center py-8 xl:py-4 xl:bg-dark-blue rounded-xl"
      >
        <PencilSquareIcon />
        <p class="ml-3">{{ $t("main.write_new_quote") }}</p>
      </div>

      <div v-if="showSearch()" class="flex items-center ml-6">
        <SearchIcon />
        <input
          class="bg-transparent ml-3 w-28"
          type="text"
          :placeholder="$t('main.search_by')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PencilSquareIcon from "@/components/icons/PencilSquareIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";

function showSearch() {
  return screen.width >= 1280;
}
</script>
