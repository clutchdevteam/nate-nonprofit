<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
import { onMounted } from "vue";

const { slug } = useRoute().params;

const { global, setGlobals } = useGlobal();

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  { version: "draft" }
);

const globalData = await useAsyncStoryblok("global", { version: "draft" });

setGlobals(globalData.value.content);
</script>
