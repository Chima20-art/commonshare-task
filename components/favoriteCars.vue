<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-5">
      <h3 class="text-secondary-300 font-primary font-semibold">
        Favorite Cars
      </h3>
    </div>
    <div class="flex flex-col gap-[56px] items-center justify-center">
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
      >
        <NuxtLink
          class="flex items-center justify-center"
          v-for="(car, index) in cars"
          :key="car.id"
          :to="`/car/${car.id}`"
        >
          <Card
            :title="car.name"
            :type="car.type"
            :gasolineLiter="car.gasolineLiter"
            :kindOfTransition="car.kindOfTransition"
            :people="car.people"
            :pricePerDay="car.pricePerDay"
            :img="car.img"
            :size="size"
            :id="car.id"
            :discountedPrice="
              size === 'smaller' && (index === 0 || index == cars.length - 1)
                ? (pricePerDay / 90) * 100
                : null
            "
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCarStore } from "~/store/cars";
import { storeToRefs } from "pinia";
const carStore = useCarStore();

const { getCurrentPage, getMaxPage, isCarFavorite } = storeToRefs(carStore);
</script>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FavoriteCars",
  props: {
    cars: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      screenWidth: 0,
    };
  },
  mounted() {
    this.screenWidth = window?.innerWidth;
  },
  methods: {
    handleResize() {
      this.screenWidth = window?.innerWidth;
    },
    async loadMore() {
      alert("Can't load more cars because of cors policy in the api server");
    },
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.handleResize);
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    size() {
      return this.screenWidth < 370
        ? "smaller"
        : this.screenWidth < 1024
        ? "small"
        : "normal";
    },
  },
});
</script>
