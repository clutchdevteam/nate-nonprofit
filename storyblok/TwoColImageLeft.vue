<template>
  <section class="base-wrapper my-20 lg:my-24">
    <BaseTwoCol>
      <template v-slot:left>
        <div class="relative">
          <BaseImage :src="blok.image.filename" :alt="blok.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 right-0 mb-[-10%] mr-[-4%] lg:mb-[-20%] lg:mr-[-10%] w-24 h-24 lg:w-1/2 lg:h-1/2 ${blok.theme}`"
          />
        </div>
      </template>

      <template v-slot:right>
        <div :class="{ 'mt-8': blok.heading }">
          <BaseHeading
            v-if="blok.heading"
            class="text-primary-dark font-bold mb-6"
            size="h3"
          >
            {{ blok.heading }}
          </BaseHeading>

          <div class="lg:w-3/4">
            <BaseRichText :content="blok.text" />
          </div>
        </div>
      </template>
    </BaseTwoCol>
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
.decor-square {
  mix-blend-mode: multiply;

  &.primary {
    @apply bg-primary-light;
  }

  &.secondary {
    @apply bg-secondary-light;
  }
}
</style>
