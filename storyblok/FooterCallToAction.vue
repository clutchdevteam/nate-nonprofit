<template>
  <section class="w-full bg-primary-dark">
    <div
      class="base-wrapper flex flex-col lg:flex-row lg:justify-around lg:items-center py-14 lg:py-6"
    >
      <h2
        class="text-white text-4xl leading-relaxed uppercase font-bold w-1/12 lg:w-1/2 pb-8 lg:p-0"
      >
        {{ blok.text }}
      </h2>

      <div>
        <BaseButton
          v-if="blok?.button"
          :href="blok?.button[0]?.link.cached_url"
          class="w-full lg:w-auto"
        >
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
};
</script>
