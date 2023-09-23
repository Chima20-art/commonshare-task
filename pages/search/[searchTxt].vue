<template>
  <div
    class="max-w-[1440px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8"
  >
    <SearchResults
      :cars="cars"
      :searchTxt="searchTxt"
      :withoutLoadMore="true"
    />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

let searchTxt = route.params.searchTxt;

const res = await useFetch(
  "https://dm-assignment-commonshare.koyeb.app/api/cars?q=" + searchTxt
);

let data: any = res.data;
let cars = data._rawValue.data;
</script>
