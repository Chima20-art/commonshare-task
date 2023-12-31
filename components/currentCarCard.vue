<template>
  <div>
    <div class="flex flex-col lg:flex-row gap-6 max-lg:w-full max-lg:mx-auto">
      <div class="flex flex-col w-full lg:w-1/3">
        <div
          class="relative flex-1 bg-primary-500 drop-shadow flex flex-col p-6 rounded-xl lg:max-w-[492px] w-full"
        >
          <div class="flex flex-col">
            <h1
              class="capitalize text-primary-0 font-primary lg:text-3xl text-base font-semibold lg:max-w-[372px] max-w-[260px]"
            >
              Sports car with the best design and acceleration
            </h1>
            <p
              class="text-primary-0 font-primary lg:text-sm text-xs mt-4 mb-5 lg:max-w-[284px] max-w-[240px]"
            >
              Safety and comfort while driving a futuristic and elegant sports
              car
            </p>
          </div>
          <div
            class="w-full flex flex-row justify-center max-h-[80px] sm:max-h-[150px] lg:h-[200px]"
          >
            <img :src="car.img" key="car2 png" class="object-contain z-10" />
          </div>
          <img
            src="/bg1.svg"
            key="bg1 svg"
            class="absolute inset-0 w-full h-full object-cover -z-1"
          />
        </div>
        <div
          class="flex flex-row justify-between h-[64px] sm:h-[124px] gap-6 mt-6"
        >
          <div
            class="relative flex-1 bg-primary-500 flex justify-center rounded-lg cursor-pointer"
          >
            <img
              :src="car.img"
              key="car2 png"
              class="h-full w-full p-2 object-contain rounded-lg cursor-pointer"
            />
            <img
              src="/bg1.svg"
              key="bg1 svg"
              class="absolute inset-0 w-full h-full object-cover -z-1"
            />
          </div>
          <div class="flex-1">
            <img
              :src="car.images[0].url"
              alt="url1"
              class="h-full w-full object-cover rounded-lg cursor-pointer"
            />
          </div>
          <div class="flex-1">
            <img
              :src="car.images[1].url"
              alt="url2"
              class="h-full w-full object-cover rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-primary-0 drop-shadow lg:rounded rounded-xl flex flex-col p-6 max-lg:mt-8 flex-1 justify-between text-secondary-500"
      >
        <div>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <h1 class="lg:text-2xl text-xl font-bold">{{ car.name }}</h1>
              <div class="flex flex-row items-center mt-2.5">
                <div class="flex items-center justify-between">
                  <div class="relative mr-[88px]">
                    <NuxtRating
                      :rating-size="'16px'"
                      :read-only="true"
                      :ratingValue="4"
                    />
                  </div>

                  <p
                    class="lg:text-secondary-400 text-secondary-300 lg:text-sm text-xs font-medium"
                  >
                    440+ Reviewer
                  </p>
                </div>
              </div>
            </div>
            <div class="items-top ml-2">
              <ClientOnly>
                <FavoriteIcon
                  :isFavortie="carStore.isCarFavorite(car.id)"
                  @click.prevent="
                    carStore.toggleFavoriteCar({
                      id: car.id,
                      name: car.name,
                      type: car.type,
                      gasolineLiter: car.gasolineLiter,
                      kindOfTransition: car.kindOfTransition,
                      people: car.people,
                      pricePerDay: car.pricePerDay,
                      img: car.img,
                    })
                  "
                  class="hover:scale-110 hover:cursor-pointer active:scale-90"
                />
              </ClientOnly>
            </div>
          </div>
          <p
            class="font-primary lg:text-xl text-xs lg:text-secondary-400 text-secondary-300 tracking-tight my-8 lg:leading-10"
          >
            {{ car.description }}
          </p>
          <div
            class="max-w-[740px] gap-x-11 flex flex-wrap lg:text-xl text-xs font-primary"
          >
            <div class="flex flex-row justify-between flex-1">
              <div class="font-primary text-secondary-300">Type Car</div>
              <div class="flex-shrink-0 font-bold">{{ car.type }}</div>
            </div>
            <div class="flex justify-between flex-1">
              <div class="font-primary text-secondary-300">Capacity</div>
              <div class="flex-shrink-0 font-bold">{{ car.people }} Person</div>
            </div>
            <div class="flex justify-between flex-1">
              <div class="font-primary text-secondary-300">Gasoline</div>
              <div class="flex-shrink-0 font-bold">
                {{ car.gasolineLiter }}L
              </div>
            </div>
          </div>
          <div
            class="w-full max-w-[740px] pt-4 gap-x-11 flex flex-wrap lg:text-xl text-xs font-primary"
          >
            <div class="flex flex-row justify-between w-full max-w-[217px]">
              <div class="font-primary text-secondary-300">Steering</div>
              <div class="flex-shrink-0 font-bold">
                {{ car.kindOfTransition }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-row justify-self-end w-full justify-between items-center mt-8 lg:mt-16"
        >
          <p class="text-seconday-500 font-primary font-bold lg:text-[28px]">
            ${{ car.pricePerDay.toFixed(2) }}/
            <span class="text-secondary-300 ml-1 text-xs lg:text-sm">day</span>
          </p>
          <button
            class="bg-primary-500 text-primary-0 px-5 rounded-[10px] hover:scale-110 hover:cursor-pointer active:scale-90 h-full w-[116px] min-h-[44px] text-base font-semibold"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCarStore } from "~/store/cars";
import { storeToRefs } from "pinia";
const carStore = useCarStore();
const { getFavoriteCars, isCarFavorite } = storeToRefs(carStore);
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
});
</script>
