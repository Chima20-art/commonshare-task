import { defineStore } from "pinia";

import Car from "~/types/car";

export const useCarStore = defineStore({
  id: "Cars",
  state: () => {
    return {
      polpularCars: [] as Car[],
      recomandedCars: [] as Car[],
      favoriteCars: [] as Car[],
      page: 2,
      maxPage: 1000,
    };
  },
  actions: {
    setPolpularCars(cars: Car[]) {
      this.polpularCars = cars;
    },
    setRecomandedCars(cars: Car[]) {
      this.recomandedCars = cars;
    },
    setFavoriteCars(cars: Car[]) {
      this.favoriteCars = cars;
    },
    addReconmendedCars(cars: Car[]) {
      this.recomandedCars.push(...cars);
    },
    toggleFavoriteCar(car: Car) {
      //check if favorite remove it else add it
      let index = this.favoriteCars.findIndex((c) => c.id === car.id);
      if (index > -1) {
        this.favoriteCars.splice(index, 1);
      } else {
        this.favoriteCars.push(car);
      }
    },

    async loadRecomandedCars() {
      try {
        const res = await useFetch(
          "https://dm-assignment-commonshare.koyeb.app/api/cars?page=" +
            this.page
        );

        let data: any = res.data;

        if (data?._rawValue?.meta?.last_page) {
          this.maxPage = data?._rawValue?.meta?.last_page;
        }
        //if (this.page < this.maxPage) this.page = this.page + 1;
        this.addReconmendedCars(data._rawValue.data);
      } catch (err) {
        console.log("error loading Recomanded Cars");
        console.log(err);
      }
    },
    async loadPopularCars() {
      try {
        const res = await useFetch(
          "https://dm-assignment-commonshare.koyeb.app/api/cars"
        );

        let data: any = res.data;

        this.setPolpularCars(data._rawValue.data);
      } catch (err) {
        console.log("error loading Recomanded Cars");
        console.log(err);
      }
    },
  },
  getters: {
    getPolpularCars: (state) => state.polpularCars,
    getRecomandedCars: (state) => state.recomandedCars,
    getFavoriteCars: (state) => state.favoriteCars,
    getCurrentPage: (state) => state.page,
    getMaxPage: (state) => state.maxPage,
    isCarFavorite: (state) => (carId: String) => {
      console.log("isCarFavorite called");
      return state.favoriteCars.findIndex((c) => c.id === carId) > -1;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
