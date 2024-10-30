<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const config = useRuntimeConfig();
const { slug } = useRoute().params;
const { global, setGlobals } = useGlobal();

const url = slug && slug.length > 0 ? slug.join("/") : "home";
const isPreview = config.public.isPreview;
const version = isPreview ? "draft" : "published";

const { data: story } = await useAsyncData(
  slug && slug.length > 0 ? slug.join("/") : "home",
  async () => {
    const { data } = await useStoryblokApi().get(`cdn/stories/${url}`, {
      version,
    });

    return data.story;
  }
);

const globalData = await useAsyncStoryblok("global", {
  version,
});

if (globalData.value) {
  setGlobals(globalData.value.content);
}

if (!isPreview) {
  if (!story.value) {
    showError({ statusCode: 404, statusMessage: "Page not found" });
  }
}

onMounted(() => {
  if (isPreview) {
    if (story.value && story.value.id) {
      useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
    }

    if (globalData.value && global.value.id) {
      useStoryblokBridge(global.value.id, (globalStory) =>
        setGlobals(globalStory)
      );
    }
  }
});
</script>
