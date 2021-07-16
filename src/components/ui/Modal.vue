<template>
  <div class="opacity-modal flex justify-center">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  setup() {},
};
</script>

<style scoped>
.opacity-modal {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  min-height: 85vh;
  width: 100%;
  margin-top: -35px;
  left: 0;
  z-index: 1;
}
.modal {
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 506px;
  margin: 153px 30px;
  max-width: 570px;
  overflow: hidden;
}
</style>
