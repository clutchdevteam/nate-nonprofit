<template>
  <div class="grid lg:grid-cols-2 gap-16 lg:gap-20">
    <div>
      <slot name="left" />
    </div>

    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped></style>
