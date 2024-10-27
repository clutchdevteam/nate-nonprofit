<template>
  <div class="flex flex-col items-start space-y-6">
    <BaseIcon class="h-10 w-auto text-secondary-light" :file="feature.icon" alt="feature.icon" />

    <BaseHeading size="h3" tag="h2" class="text-primary-dark uppercase">
      {{ feature.heading }}
    </BaseHeading>

    <div class="w-14 h-1 bg-primary-light"></div>

    <BaseText>{{ feature.text }}</BaseText>
  </div>
</template>

<script>
  export default {
    name: 'Feature',
    props: {
      feature: {
        type: Object,
        required: true,
      },
    },
  }
</script>
