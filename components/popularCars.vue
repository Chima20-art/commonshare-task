<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-5">
      <h3 class="text-secondary-300 font-primary font-semibold">Popular Car</h3>
      <h5
        class="text-primary-500 font-primary font-semibold hover:scale-110 hover:cursor-pointer active:scale-90"
      >
        View All
      </h5>
    </div>
    <div class="">
      <Carousel v-bind="settings" :breakpoints="breakpoints" class="">
        <Slide v-for="car in cars" :key="car.id">
          <div class="carousel__item">
            <a :href="`/car/${car.id}`">
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
              />
            </a>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PopularCars",

  //add a prop of cars with type of array
  props: {
    cars: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1.2,
      snapAlign: "start",
      wrapAround: false,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      1370: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      // 1024 and up
      1075: {
        itemsToShow: 3,
        snapAlign: "start",
      },

      1023: {
        itemsToShow: 2.8,
        snapAlign: "start",
      },

      991: {
        itemsToShow: 4,
        snapAlign: "start",
      },

      874: {
        itemsToShow: 3.5,
        snapAlign: "start",
      },

      767: {
        itemsToShow: 3,
        snapAlign: "start",
      },

      700: {
        itemsToShow: 2.8,
        snapAlign: "start",
      },

      633: {
        itemsToShow: 2.5,
        snapAlign: "start",
      },

      590: {
        itemsToShow: 2.3,
        snapAlign: "start",
      },

      550: {
        itemsToShow: 2.1,
        snapAlign: "start",
      },

      500: {
        itemsToShow: 1.9,
        snapAlign: "start",
      },

      410: {
        itemsToShow: 1.7,
        snapAlign: "start",
      },

      386: {
        itemsToShow: 1.5,
        snapAlign: "start",
      },
    },
    screenWidth: 0,
  }),
  mounted() {
    this.screenWidth = window?.innerWidth;
  },
  methods: {
    handleResize() {
      this.screenWidth = window?.innerWidth;
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
      return this.screenWidth > 1024 ? "normal" : "smaller";
    },
  },
});
</script>

<style scoped>
.carousel {
  /* Make the width 100% plus the width of the gap between slides */
  width: calc(100% + 32px);

  /* replace 0.625rem with half of the gap between slides */
  transform: translateX(-16px);
}

/deep/ .carousel__slide {
  /* Once again, replace 0.625rem with half of the width you want the gap to be */
  padding-left: 16px;
  padding-right: 16px;
  padding-block: 1px;
}
</style>
