<template>
  <div v-html="articleContent" />
</template>

<script setup>
const props = defineProps({
  content: Object,
  required: true,
});

const articleContent = computed(() => renderRichText(props.content));
</script>

<style lang="postcss" scoped>
/deep/ p,
/deep/ li,
/deep/ ol,
/deep/ h1,
/deep/ h2,
/deep/ h3,
/deep/ h4,
/deep/ h5,
/deep/ h6,
/deep/ blockquote,
/deep/ code,
/deep/ hr {
  @apply mb-5 leading-relaxed;
}

/deep/ h1,
/deep/ h2,
/deep/ h3,
/deep/ h4,
/deep/ h5,
/deep/ h6 {
  @apply font-bold text-primary-dark;
}

/deep/ p,
/deep/ li,
/deep/ ol {
  @apply opacity-75;
}

/deep/ ul,
/deep/ ol {
  @apply ml-5 opacity-100;
}

/deep/ ul {
  @apply list-disc;
}

/deep/ ol {
  @apply list-decimal;
}

/deep/ blockquote {
  @apply border-l-2 border-secondary-light pl-4 py-2 ml-2;
}

/deep/ blockquote p {
  @apply mb-0;
}

/deep/ a {
  @apply underline text-primary-darker font-bold;
}

@screen md {
  /deep/ p {
    @apply text-base;
  }
}
</style>
