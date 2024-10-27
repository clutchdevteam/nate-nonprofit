<template>
  <div>
    <FooterCallToAction v-if="footerContent" :blok="footerContent.footerCTA" />

    <footer class="py-12 bg-gray-light border-t-4 border-primary-light">
      <div class="flex flex-col items-center space-y-10">
        <div class="w-44">
          <BaseImage
            v-if="footerContent.logo"
            :src="footerContent.logo.filename"
            :alt="footerContent.logo.alt"
          />
        </div>

        <nav class="uppercase text-primary-dark font-bold lg:text-lg">
          <ul
            class="flex flex-col lg:flex-row text-center lg:text-left space-y-8 lg:space-x-12 lg:space-y-0"
          >
            <li v-for="menu in footerContent?.footerNav" :key="menu.id">
              <BaseLink
                classes="border-b-2 border-transparent p-1"
                :href="menu.slug.cached_url"
              >
                {{ menu.title }}
              </BaseLink>
            </li>
          </ul>
        </nav>

        <div class="flex space-x-6 text-primary-dark">
          <a
            v-for="item in contact"
            :key="item.id"
            class="flex items-center p-2"
            :href="item.link.url"
            target="_blank"
          >
            <span class="mr-3 text-primary-light">
              <BaseIcon class="h-5 w-5" :file="item.icon" :alt="item.icon" />
            </span>
            <div class="">
              <p class="text-sm font-semibold">{{ item.Heading }}</p>
              <p class="text-xs">{{ item.Subheading }}</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import FooterCallToAction from "@/storyblok/FooterCallToAction";

defineProps({
  footerContent: {
    type: Object,
    default: () => {},
  },
  contact: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply border-primary-light;
}
</style>
