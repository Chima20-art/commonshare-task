<template>
  <div
    class="max-w-[1440px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8"
  >
    <ClientOnly>
      <FavoriteCars :cars="getFavoriteCars" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useCarStore } from "~/store/cars";
import { storeToRefs } from "pinia";
const carStore = useCarStore();
const { getFavoriteCars, isCarFavorite } = storeToRefs(carStore);
</script>
