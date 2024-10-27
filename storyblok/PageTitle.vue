<template>
  <div class="base-wrapper text-center my-12 lg:mt-24 lg:mb-16">
    <BaseHeading class="text-primary-dark mb-8" size="h2" tag="h1">{{
      blok.heading
    }}</BaseHeading>

    <BaseText v-if="blok.text" class="lg:max-w-2xl mx-auto">{{
      blok.text
    }}</BaseText>
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
