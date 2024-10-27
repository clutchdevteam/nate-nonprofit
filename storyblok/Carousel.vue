<template>
  <section class="base-wrapper my-24 px-4 lg:px-0">
    <BaseCarousel hasPagination class="slider">
      <BaseCarouselSlide v-for="img in blok.images" :key="img.id" class="slide">
        <BaseImage :src="img.filename" :alt="img.alt" />
      </BaseCarouselSlide>
    </BaseCarousel>
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

<style lang="postcss">
.swiper-container {
  & .swiper-wrapper {
    height: 400px;

    & .swiper-slide {
      @apply flex flex-col justify-center;

      & img {
        @apply h-full object-cover;
      }
    }
  }
}

.swiper-pagination {
  @apply relative flex justify-center space-x-3 py-8;

  & .swiper-pagination-bullet-active {
    @apply bg-primary-dark;
  }
}

@screen lg {
  .swiper-container {
    & .swiper-wrapper {
      & .swiper-slide {
        & img {
          @apply w-full h-auto;
        }
      }
    }
  }
}
</style>
