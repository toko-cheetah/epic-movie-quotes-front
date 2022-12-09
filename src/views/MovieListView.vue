<template>
  <div class="py-28 pl-8 pr-8 xl:pl-[26.875rem] xl:pr-16">
    <div class="mb-8 flex justify-between xl:mb-14">
      <div class="flex flex-col gap-2 font-medium xl:flex-row xl:gap-3">
        <p class="text-2xl">{{ $t("main.my_list_of_movies") }}</p>
        <p class="text-base xl:text-2xl">({{ $t("common.total") }} 0)</p>
      </div>

      <div
        class="flex flex-col-reverse items-end gap-3 xl:flex-row xl:items-center"
      >
        <div class="flex items-center">
          <SearchIcon />
          <input
            class="ml-3 w-20 bg-transparent xl:w-28"
            type="text"
            :placeholder="$t('main.search_by')"
          />
        </div>

        <router-link :to="{ name: 'movie.add' }" class="relative">
          <RedBtn class="m-0 pl-10 pr-4">{{ $t("main.add_movie") }}</RedBtn>
          <PlusIcon
            class="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
          />
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import RedBtn from "@/components/buttons/RedBtn.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>
