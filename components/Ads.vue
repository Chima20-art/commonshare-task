<template>
  <div class="flex flex-row w-full md:gap-8 max-md:justify-center">
    <div
      class="relative md:flex-1 bg-information-500 md:flex flex-col p-6 rounded-xl overflow-hidden"
    >
      <div class="flex flex-col max-w-[272px] z-20">
        <h1
          class="capitalize text-primary-0 font-primary text-3xl font-semibold z-20"
        >
          The best Platform for car rental
        </h1>
        <p class="text-primary-0 font-primary text-sm mt-4 mb-5 z-20">
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </p>
        <button
          class="bg-primary-500 text-primary-0 font-primary rounded w-28 h-11 z-20 hover:scale-110 hover:cursor-pointer active:scale-90"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full flex flex-row justify-center h-[106px]">
        <img src="/car1.png" key="car1 png" class="object-contain z-10" />
      </div>
      <div class="absolute inset-0 h-full w-full z-0 top-28 -left-24">
        <img
          src="/bg2.svg"
          alt="bg2 svg"
          class="w-full h-full scale-[2.25] opacity-25 z-0"
        />
      </div>
    </div>
    <div
      class="relative flex-1 bg-primary-500 md:flex hidden flex-col p-6 rounded-xl overflow-hidden"
    >
      <div class="flex flex-col max-w-[272px] z-20w">
        <h1 class="capitalize text-primary-0 font-primary text-3xl">
          Easy way to rent a car at a low price
        </h1>
        <p class="text-primary-0 font-primary text-sm mt-4 mb-5">
          Providing cheap car rental services and safe and comfortable
          facilities.
        </p>
        <button
          class="bg-information-500 text-primary-0 z-20 font-primary rounded w-28 h-11 cursor-pointer hover:scale-110 hover:cursor-pointer active:scale-90"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full flex flex-row justify-center h-[100px]">
        <img src="/car2.png" key="car2 png" class="object-contain z-10" />
      </div>
      <div class="absolute inset-0 w-full h-full">
        <img
          src="/bg1.svg"
          alt="bg1 svg"
          class="object-cover w-full h-full lg:h-fit -z-1"
        />
      </div>
    </div>
  </div>
</template>
