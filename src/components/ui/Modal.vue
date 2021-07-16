<template>
  <div class="opacity-modal">
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
  position: absolute;
  min-height: 85vh;
  width: 100%;
  margin-top: -35px;
  left: 0;
}
.modal {
  background: #ffffff;
  border-radius: 5px;
  width: auto;
  height: 506px;
  margin: 153px 30px;
}
</style>