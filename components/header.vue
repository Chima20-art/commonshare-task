<template>
  <div
    class="bg-primaryBg lg:bg-primary-0 w-full max-lg:mt-8 lg:h-[124px] lg:border lg:border-b lg:border-secondary-400/40"
  >
    <div
      class="w-full h-full max-w-[1440px] mx-auto flex items-center max-[1440px]:px-6 flex-wrap max-lg:justify-between"
    >
      <div class="w-[108px] lg:w-[148px] text-left lg:text-center order-1">
        <Logo />
      </div>

      <div
        class="flex w-full lg:flex-1 bg-primary-0 max-lg:mt-4 lg:ml-16 lg:mr-8 py-3 lg:py-2.5 px-6 lg:px-5 rounded-[10px] lg:rounded-full border border-primaryBorder/40 order-3 lg:order-2"
      >
        <div
          class="mr-2 lg:mr-5 hover:scale-110 hover:cursor-pointer active:scale-90"
          @click="searchRedirect"
        >
          <SearchIcon />
        </div>
        <input
          class="flex-1 outline-none text-secondary-400 text-sm font-medium font-primary"
          placeholder="Search something here"
          v-model.trim="search"
          @keyup.enter="searchRedirect"
        />
      </div>

      <NuxtLink
        class="fill-secondary-400 rounded-full border border-primaryBorder/40 p-2.5 order-2 lg:order-3 hover:scale-110 hover:cursor-pointer active:scale-90"
        to="/favorites"
      >
        <HeartIcon />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",

  data() {
    return {
      search: "",
    };
  },

  methods: {
    searchRedirect() {
      if (this.search != "") {
        this.$router.push(`/search/${this.search}`);
        this.search = "";
      }
    },
  },
});
</script>
