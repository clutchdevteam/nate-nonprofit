<template>
  <section
    class="flex flex-col justify-center items-center relative py-16 bg-primary-dark overflow-hidden"
  >
    <BaseImage
      class="absolute opacity-10 object-cover h-full w-auto lg:h-auto lg:w-full z-0"
      :src="blok.background_image.filename"
      :alt="blok.background_image.alt"
    />

    <div
      class="base-wrapper flex flex-col justify-center lg:items-center opacity-100 z-10"
    >
      <h2
        :class="`leading-9 text-left font-bold text-white lg:text-center lg:leading-normal ${headingSize}`"
      >
        {{ blok.text }}
      </h2>
      <div class="flex flex-col items-center">
        <BaseButton class="w-full" :href="blok.button[0].link.cached_url">
          {{ blok.button[0].btnText }}
        </BaseButton>
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
  computed: {
    headingSize() {
      return this.blok.headingSize === "large"
        ? "text-2xl lg:text-4xl lg:max-w-2xl  mb-12"
        : "text-lg mb-8";
    },
  },
};
</script>
