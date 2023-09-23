<script setup lang="ts">
import { useCarStore } from "~/store/cars";
import { storeToRefs } from "pinia";
const carStore = useCarStore();

const { getPolpularCars, getRecomandedCars } = storeToRefs(carStore);
//console.log("polpularCars", getPolpularCars);
carStore.loadRecomandedCars();
carStore.loadPopularCars();
</script>

<template>
  <div
    class="max-w-[1440px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8"
  >
    <Ads />
    <PopularCars :cars="getPolpularCars" />
    <RecomendationCar :cars="getRecomandedCars" />
  </div>
</template>
