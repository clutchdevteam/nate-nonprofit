<template>
  <div class="relative px-4 lg:px-0 max-w-2xl mx-auto my-24 lg:my-36">
    <BaseIcon file="QuotesIcon" class="w-12 h-12" alt="" />
    <p class="text-lg opacity-75 pt-6 lg:ml-16">{{ blok.quote }}</p>
    <p class="float-right mt-6 text-primary-dark font-bold">
      - {{ blok.author }}
    </p>
  </div>
</template>

<script>
import BaseIcon from "~/components/base/BaseIcon.vue";
export default {
  components: { BaseIcon },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
