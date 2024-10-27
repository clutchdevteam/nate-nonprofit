<template>
  <section
    class="flex flex-col justify-center items-center base-wrapper mt-20 lg:mt-28"
  >
    <BaseHeading size="h1" tag="h2" class="text-primary-dark">
      {{ blok.title }}
    </BaseHeading>

    <BaseHeading
      size="h3"
      class="text-secondary-dark text-center uppercase font-bold -mt-4"
      v-if="blok.heading"
    >
      {{ blok.heading }}
    </BaseHeading>

    <BaseText class="mt-6 text-center max-w-screen-sm" v-if="blok.text">
      {{ blok.text }}
    </BaseText>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>
