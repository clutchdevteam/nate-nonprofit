<template>
  <div class="site-wrapper">
    <SiteHeader
      :nav="global?.mainNav"
      :logo="global?.logo"
      :contact="global?.contact"
      :inert="hasOpenMenu"
    />

    <main
      :class="`${!isHomePage ? 'mt-[66.36px] lg:mt-[74.94px]' : ''} ${
        lockScroll ? 'overflow-hidden' : ''
      }`"
      :inert="hasOpenMenu"
    >
      <slot />
    </main>

    <SiteFooter
      :footer-content="global?.footer"
      :contact="global?.contact"
      :inert="hasOpenMenu"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const { global } = useGlobal();
const route = useRoute();

const hasOpenMenu = computed(() => {
  return global.pageHasModalOpen || global?.isMobileMenuOpen;
});

const isHomePage = computed(() => {
  return route.fullPath === "/" || route.fullPath === "/home";
});

const lockScroll = computed(() => {
  return global.pageHasModalOpen || global?.isMobileMenuOpen;
});
</script>

<style lang="postcss" scoped>
body {
  overflow-x: hidden;
  margin: 0;
}

.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header,
footer {
  flex-grow: 0;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
