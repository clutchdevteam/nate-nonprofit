<template>
  <section class="base-wrapper">
    <BaseTwoCol class="my-24 lg:my-36">
      <template v-slot:left>
        <div class="relative block lg:hidden">
          <BaseImage :src="blok.image.filename" :alt="blok.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 left-0 mb-[-10%] ml-[-4%] w-24 h-24 ${blok.theme}`"
          />
        </div>

        <div class="mt-24 lg:mt-0">
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

      <template v-slot:right>
        <div class="relative hidden lg:block">
          <BaseImage :src="blok.image.filename" :alt="blok.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 left-0 mb-[-15%] ml-[-10%]  w-1/2 h-1/2 ${blok.theme}`"
          />
        </div>

        <BaseButton
          :href="blok.button[0].link.cached_url"
          class="blok lg:inline-blok lg:mt-32"
          v-if="blok.button.length"
          :theme="blok.button[0].theme"
          >{{ blok.button[0].btnText }}</BaseButton
        >
      </template>
    </BaseTwoCol>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
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
