<template>
  <header
    :class="`z-[51] absolute w-full flex items-center justify-between ${
      !isHomePage ? 'shadow-md bg-white' : ''
    }`"
  >
    <div class="bg-secondary-light p-4 z-50">
      <BaseLink href="/" :inert="global?.isMobileMenuOpen">
        <BaseImage
          class="h-10 lg:h-12"
          v-if="logo"
          :src="logo?.filename"
          :alt="logo?.alt"
        />
      </BaseLink>
    </div>

    <nav
      :class="`absolute z-40 hidden lg:flex items-center justify-center w-full h-full font-semibold ${
        isHomePage ? 'text-white' : 'text-primary-dark'
      }`"
    >
      <ul class="flex uppercase mr-6 xl:mr-0">
        <li v-for="(menu, index) in nav" :key="menu.id">
          <BaseMenu
            :id="`${menu.title.toLowerCase().replace(' ', '-')}-${index}`"
            classes="w-32 xl:w-40 text-center py-2 border-t-2 border-transparent hover:border-primary-light"
            :menu="menu"
            :depth="0"
          />
        </li>
      </ul>
    </nav>

    <div
      :class="`hidden lg:flex space-x-6 mr-6 z-50 origin-right scale-90 xl:transform-none ${
        isHomePage ? 'text-white' : 'text-primary-dark'
      }`"
    >
      <a
        v-for="item in contact"
        :key="item.id"
        class="flex items-center opacity-75 hover:opacity-100 p-1"
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

    <div class="mobile lg:hidden">
      <button
        :class="`p-4 ${isHomePage ? 'text-white' : 'text-primary-dark'}`"
        ref="openButtonRef"
        @click="openMobileMenu"
        type="button"
        :inert="global?.isMobileMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <BaseIcon class="w-8 h-8" file="MenuIcon" alt="Open Menu" />

        <Teleport to="body">
          <div
            :class="`z-[52] fixed lg:hidden inset-0 bg-black transition duration-150 ${
              global?.isMobileMenuOpen
                ? 'bg-opacity-75'
                : 'bg-opacity-0 pointer-events-none'
            }`"
            :inert="!global?.isMobileMenuOpen"
            @keydown.esc="closeMenu"
          >
            <div
              :class="`flex transform transition-transform duration-150 ease-in-out ${
                global?.isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`"
            >
              <div @click="closeMenu">
                <button
                  class="flex justify-center items-center bg-white rounded-full ml-4 mr-4 mt-4 h-12 w-12"
                  ref="closeButtonRef"
                  @click="closeMenu"
                  type="button"
                >
                  <span class="sr-only">Close menu</span>
                  <BaseIcon class="w-6 h-6" file="CloseIcon" alt="Close menu" />
                </button>
              </div>

              <div
                class="flex flex-col justify-between h-screen w-full bg-white"
              >
                <nav class="text-primary-dark" role="navigation">
                  <ul>
                    <li v-for="menu in nav" :key="menu.id">
                      <BaseMenu
                        classes="py-6 px-4 border-b border-gray-300"
                        :menu="menu"
                        :depth="0"
                      />
                    </li>
                  </ul>
                </nav>

                <div class="px-3 py-6">
                  <BaseLink href="/">
                    <BaseImage
                      v-if="logo"
                      :src="logo.filename"
                      :alt="logo.alt"
                    />
                  </BaseLink>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";

const global = useGlobal();

const route = useRoute();
const isHomePage = computed(
  () => route.fullPath === "/" || route.fullPath === "/home"
);

const props = defineProps({
  nav: {
    type: Array,
    required: true,
  },
  logo: {
    type: Object,
    required: true,
    default: () => {},
  },
  contact: {
    type: Array,
    default: () => [],
  },
});

watch(route, () => {
  closeMenu();
});

async function openMobileMenu() {
  await toggleMobileMenu(true);
}

async function closeMenu() {
  await toggleMobileMenu(false);
}
</script>

<style lang="postcss">
nav ul li div a {
  @apply uppercase font-semibold tracking-wider;
}

.nuxt-link-exact-active {
  @apply border-primary-light opacity-100;
}
</style>
