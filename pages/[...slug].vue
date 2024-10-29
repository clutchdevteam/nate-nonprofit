<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
import { onMounted } from "vue";

const { slug } = useRoute().params;

const { global, setGlobals } = useGlobal();

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  { version: process.env.VERSION }
);

const globalData = await useAsyncStoryblok("global", {
  version: process.env.VERSION,
});

setGlobals(globalData.value.content);
</script>
