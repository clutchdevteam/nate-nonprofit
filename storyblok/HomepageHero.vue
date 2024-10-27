<template>
  <section class="relative h-screen flex w-full justify-center items-center">
    <BaseImage
      class="absolute z-[-1] object-none object-center lg:object-cover h-full w-full"
      :src="blok.backgroundImage.filename"
      :alt="blok.backgroundImage.alt"
    />
    <div class="overlay absolute inset-0 bg-primary-dark z-0" />

    <div class="flex flex-col items-center -mt-40 lg:-mt-24 z-20">
      <BaseHeading size="h1" class="text-white">{{ blok.title }}</BaseHeading>
      <div>
        <BaseButton :href="blok.btn[0].link.cached_url">{{
          blok.btn[0].btnText
        }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.overlay {
  background: linear-gradient(
    180deg,
    rgba(11, 54, 105, 0.75) 0%,
    rgba(0, 212, 255, 0) 32%
  );
}
</style>
