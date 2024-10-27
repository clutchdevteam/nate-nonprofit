<template>
  <div class="base-wrapper my-24 lg:my-36">
    <p class="text-lg lg:text-2xl text-primary-dark font-bold lg:text-center">
      {{ blok.text }}
    </p>
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
