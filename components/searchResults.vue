<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-5">
      <h3 class="text-secondary-300 font-primary font-semibold">
        Search Results for "{{ searchTxt }}"
      </h3>
    </div>
    <div
      v-if="cars.length > 0"
      class="flex flex-col gap-[56px] items-center justify-center"
    >
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
      >
        <a
          class="flex items-center justify-center"
          v-for="(car, index) in cars"
          :key="car.id"
          :href="`/car/${car.id}`"
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
        </a>
      </div>
      <button
        v-if="getCurrentPage < getMaxPage && !withoutLoadMore"
        @click="loadMore"
        class="w-fit px-5 text-primary-0 font-primary font-semibold h-[44px] rounded-[4px] bg-primary-500 hover:scale-110 hover:cursor-pointer active:scale-90"
      >
        Show more cars
      </button>
    </div>
    <div v-else>
      <h1 class="text-2xl font-primary w-full text-center text-primary-400">
        No Results Found
      </h1>
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
  name: "SearchResults",
  props: {
    cars: {
      type: Array,
      required: true,
    },
    withoutLoadMore: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchTxt: {
      type: String,
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
