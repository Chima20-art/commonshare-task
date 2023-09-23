<template>
  <div
    class="bg-primary-0 rounded-[10px] drop-shadow flex flex-col"
    :class="{
      'w-[304px] p-6  h-[360px] ': size === 'normal',
      'w-full h-full min-h-[240px] p-4': size === 'small',
      'w-full p-4 h-fit min-h-[300px] ': size === 'smaller',
    }"
  >
    <div class="w-full flex justify-between">
      <h3
        class="font-primary text-secondary-500 text-left font-bold"
        :class="{
          'text-lg': size === 'normal',
          'text-base': size === 'small',
          'text-base ': size === 'smaller',
        }"
      >
        {{ title }}
      </h3>
      <ClientOnly>
        <div @click.stop="">
          <FavoriteIcon
            :isFavortie="carStore.isCarFavorite(id)"
            @click.prevent="
              carStore.toggleFavoriteCar({
                id,
                name: title,
                type,
                gasolineLiter,
                kindOfTransition,
                people,
                pricePerDay,
                img,
              })
            "
            class="hover:scale-110 hover:cursor-pointer active:scale-90"
          />
        </div>
      </ClientOnly>
    </div>
    <h6
      class="font-primary text-xs lg:text-sm text-secondary-300 font-medium text-left"
    >
      {{ type }}
    </h6>
    <div
      class="flex flex-1 justify-between"
      :class="{
        'flex-col flex-1 ': size === 'normal',
        'flex-row ': size === 'small',
        'flex-col flex-1  ': size === 'smaller',
      }"
    >
      <div
        class="flex-1 flex items-center justify-center relative"
        :class="{
          'flex-1    ': size === 'normal',
          'flex-1 mr-5  ': size === 'small',
          'flex-1  ': size === 'smaller',
        }"
      >
        <img
          :src="img"
          class="flex-1 w-full object-contain"
          :class="{
            'flex-1  ': size === 'small',
          }"
        />
        <div
          class="absolute bg-gradient-to-b from-white/0 to-white w-full h-3/4 bottom-0"
        ></div>
      </div>
      <div
        class="flex justify-between max-h-[74px]"
        :class="{
          'flex-row ': size === 'normal',
          'flex-col ': size === 'small',
          'flex-row  ': size === 'smaller',
        }"
      >
        <div class="flex items-center">
          <GasolineLiterIcon :size="size" />
          <p
            class="font-primary font-medium text-secondary-300"
            :class="{
              'text-xs xl:text-sm ml-1  xl:ml-1.5 ': size === 'normal',
              'text-xs ml-1': size === 'small',
              'text-xs ml-1 ': size === 'smaller',
            }"
          >
            {{ gasolineLiter }}L
          </p>
        </div>
        <div class="flex items-center">
          <KindOfTransitionIcon :size="size" />
          <p
            class="font-primary font-medium text-secondary-300"
            :class="{
              'text-xs xl:text-sm ml-1  xl:ml-1.5': size === 'normal',
              'text-xs ml-1': size === 'small',
              'text-xs ml-1 ': size === 'smaller',
            }"
          >
            {{ kindOfTransition }}
          </p>
        </div>
        <div class="flex items-center">
          <PeopleIcon :size="size" />
          <p
            class="font-primary font-medium text-secondary-300"
            :class="{
              'text-xs xl:text-sm ml-1  xl:ml-1.5': size === 'normal',
              'text-xs ml-1': size === 'small',
              'text-xs ml-1 ': size === 'smaller',
            }"
          >
            {{ people }} People
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex justify-between items-center"
      :class="{
        'pt-[24px]': size === 'normal',
        '': size === 'small',
        'pt-[36px] ': size === 'smaller',
      }"
    >
      <div class="flex-1">
        <p
          class="text-seconday-500 font-primary font-bold"
          :class="{
            'text-lg xl:text-xl': size === 'normal',
            'text-base	': size === 'small',
            'text-base': size === 'smaller',
          }"
        >
          ${{ pricePerDay.toFixed(2) }}/
          <span
            class="text-secondary-300 ml-1"
            :class="{
              'text-xs xl:text-sm': size === 'normal',
              'text-xs	': size === 'small',
              'text-xs': size === 'smaller',
            }"
            >day</span
          >
        </p>
        <p
          v-if="discountedPrice"
          class="text-secondary-300 font-primary font-medium line-through"
          :class="{
            'text-sm': size === 'normal',
            'text-xs	': size === 'small',
            'text-xs': size === 'smaller',
          }"
        >
          ${{ discountedPrice.toFixed(2) }}
        </p>
      </div>
      <button
        class="bg-primary-500 text-primary-0 px-5 rounded-[10px] hover:scale-110 hover:cursor-pointer active:scale-90 h-full"
        :class="{
          'w-[116px] min-h-[44px] text-base	font-semibold	 ': size === 'normal',
          'w-[100px] text-xs	font-semibold min-h-[36.0px]	': size === 'small',
          'w-[100px] text-xs	font-semibold min-h-[36px]	': size === 'smaller',
        }"
      >
        Rent Now
      </button>
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
  name: "Card",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: "Toyota Camry",
    },
    type: {
      type: String,
      required: true,
      default: "Sedan",
    },
    gasolineLiter: {
      type: Number,
      required: true,
      default: 60,
    },
    kindOfTransition: {
      type: String,
      required: true,
      default: "Automatic",
    },
    people: {
      type: Number,
      required: true,
      default: 5,
    },
    pricePerDay: {
      type: Number,
      required: true,
      default: 50,
    },
    discountedPrice: {
      type: Number,
      required: false,
    },
    img: {
      type: String,
      required: true,
      default: "https://dm-assignment-commonshare.koyeb.app/img/6.png",
    },
    size: {
      type: String,
      required: false,
      default: "normal",
      validator: function (value: string) {
        return ["normal", "small", "smaller"].includes(value);
      },
    },
  },

  methods: {},
});
</script>
