<template>
  <button
    class="open-button"
    @click="openModal"
    ref="openButtonRef"
    type="button"
  >
    <slot name="button" />
    <Teleport v-if="isOpen" to="body">
      <div class="modal-wrapper" @keydown.esc="closeModal">
        <div class="modal-content">
          <button @click="closeModal" ref="closeButtonRef" type="button">
            Close Modal
          </button>
          <slot name="content" />
        </div>
      </div>
    </Teleport>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState("global", ["pageHasModalOpen"]),
  },
  methods: {
    async closeModal() {
      this.isOpen = false;
      await this.$store.commit("modal/isModalOpen", false);
      await this.$nextTick();
      await this.$nextTick();
      this.$refs.openButtonRef?.focus();
    },
    async openModal() {
      this.isOpen = true;
      await this.$store.commit("modal/isModalOpen", true);
      await this.$nextTick();
      await this.$nextTick();
      this.$refs.closeButtonRef?.focus();
    },
  },
};
</script>

<style lang="postcss" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 3rem;
}

.open-button:focus,
.modal-content button:focus {
  background-color: red;
  color: white;
}
</style>
