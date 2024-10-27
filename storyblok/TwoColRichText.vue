<template>
  <section class="base-wrapper my-24 lg:my-36">
    <BaseTwoCol>
      <template v-slot:left>
        <BaseRichText :content="blok.leftContent" />
      </template>
      <template v-slot:right>
        <BaseRichText :content="blok.rightContent" />
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
