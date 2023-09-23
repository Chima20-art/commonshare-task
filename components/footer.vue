<template>
  <div class="bg-primary-0 w-full">
    <div
      class="w-full h-full max-w-[1440px] mx-auto pt-4 md:pt-20 px-[24px] md:px-[60px] pb-[60px] flex flex-col gap-[36px]"
    >
      <div class="flex flex-col lg:flex-row gap-8 justify-between">
        <div class="flex flex-col gap-4 flex-1">
          <div>
            <div class="w-[108px] lg:w-[148px] text-left lg:text-left order-1">
              <Logo />
            </div>
          </div>
          <p
            class="font-primary text-secondary-300 text-xs md:text-base font-medium max-w-[292px]"
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div
          class="flex justify-between lg:gap-[60px] flex-wrap gap-y-[60px] md:flex-nowrap"
        >
          <div class="flex flex-col gap-4 order-1">
            <p class="font-primary text-secondary-500 text-xl font-semibold">
              About
            </p>
            <div class="flex flex-col gap-2.5">
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >How it works</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Featured</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Partnership</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Bussiness Relation</NuxtLink
              >
            </div>
          </div>
          <div class="flex flex-col gap-4 order-2 md:order-3">
            <p class="font-primary text-secondary-500 text-xl font-semibold">
              Socials
            </p>
            <div class="flex flex-col gap-2.5">
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >How it works</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Featured</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Partnership</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Bussiness Relation</NuxtLink
              >
            </div>
          </div>
          <div class="flex flex-col gap-4 order-3 md:order-2">
            <p class="font-primary text-secondary-500 text-xl font-semibold">
              Community
            </p>
            <div class="flex flex-col gap-2.5">
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Events</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Blog</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Podcast</NuxtLink
              >
              <NuxtLink
                class="text-secondary-300 font-primary font-medium"
                to="/"
                >Invite a friend</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex bg-gray-800/50 h-px w-full"></div>
      <div class="flex flex-col gap-y-8 md:flex-row">
        <p
          class="order-2 md:order-1 flex-1 text-secondary-500 text-xs md:text-base font-primary font-semibold"
        >
          ©2022 DM. All rights reserved
        </p>
        <div class="order-1 md:order-2 md:gap-[60px] flex justify-between">
          <NuxtLink
            class="text-secondary-500 text-xs md:text-base font-primary font-semibold"
            to="/"
            >Privacy & Policy</NuxtLink
          >
          <NuxtLink
            class="text-secondary-500 text-xs md:text-base font-primary font-semibold"
            to="/"
            >Terms & Condition</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
