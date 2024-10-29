<template>
  <div
    v-if="blok.imageRight"
    class="base-wrapper my-20 lg:my-24 grid lg:grid-cols-3 lg:gap-20"
  >
    <BaseImage
      class="mb-6 lg:mb-0 col-span-1 lg:order-last"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />

    <div class="col-span-2 lg:text-right">
      <BaseHeading
        class="text-primary-dark font-bold mb-6"
        size="h4"
        tag="h2"
        >{{ blok.name }}</BaseHeading
      >
      <BaseRichText class="text-xs" :content="blok.bio" />
    </div>
  </div>

  <div v-else class="base-wrapper my-20 lg:my-24 grid lg:grid-cols-3 lg:gap-20">
    <BaseImage
      class="mb-6 lg:mb-0 col-span-1"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />

    <div class="col-span-2">
      <BaseHeading
        class="text-primary-dark font-bold mb-6"
        size="h4"
        tag="h2"
        >{{ blok.name }}</BaseHeading
      >
      <BaseRichText class="text-xs" :content="blok.bio" />
    </div>
  </div>
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

<style lang="scss" scoped></style>
