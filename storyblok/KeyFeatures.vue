<template>
  <section class="base-wrapper lg:grid grid-cols-3 gap-12 my-20 lg:my-24">
    <Feature
      v-for="feature in blok.features"
      :key="feature._uid"
      :feature="feature"
      class="mb-24 lg:mb-0"
    />
  </section>
</template>

<script>
import Feature from "~/components/atoms/Feature";

export default {
  name: "KeyFeatures",
  components: {
    Feature,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
