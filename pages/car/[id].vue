<template>
  <div
    class="max-w-[1440px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8"
  >
    <CurrentCarCard :car="car" />
    <RecomendationCar :cars="getRecomandedCars" :withoutLoadMore="true" />
  </div>
</template>

<script setup lang="ts">
import { useCarStore } from "~/store/cars";
import { storeToRefs } from "pinia";
const carStore = useCarStore();

const { getPolpularCars, getRecomandedCars } = storeToRefs(carStore);
//console.log("polpularCars", getPolpularCars);
carStore.loadRecomandedCars();

const route = useRoute();
let id = route.params.id;

const res = await useFetch(
  "https://dm-assignment-commonshare.koyeb.app/api/cars/" + id
);

let data: any = res.data;
let car = data._rawValue;

// let car = {
//   name: "Toyota Camry",
//   type: "Sedan",
//   description:
//     "The Toyota Camry is a mid-size sedan that has been a popular choice for families and businesses for many years. It is known for its reliability, fuel efficiency, and comfortable ride. The Camry is available in a variety of trim levels, including the base LE, the sporty SE, and the luxurious XLE.",
//   gasolineLiter: 60,
//   kindOfTransition: "Automatic",
//   people: 5,
//   pricePerDay: 50,
//   id: "toyota-camry",
//   img: "https://dm-assignment-commonshare.koyeb.app/img/35.png",
//   images: [
//     {
//       url: "https://dm-assignment-commonshare.koyeb.app/img/car-image.jpg",
//     },
//     {
//       url: "https://dm-assignment-commonshare.koyeb.app/img/car-inside.jpg",
//     },
//   ],
// };
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarDetail",
});
</script>
