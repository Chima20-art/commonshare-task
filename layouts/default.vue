<template>
  <div class="min-h-screen w-screen flex flex-col bg-primaryBg">
    <Header />

    <div class="bg-primaryBg flex-1 w-full max-[1440px]:px-6">
      <slot />
    </div>
    <Footer />
  </div>
</template>
