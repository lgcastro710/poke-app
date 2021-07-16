<template>
  <div class="snack-bar flex justify-center" v-if="visible">
    <p>Copying to Clipboard</p>
  </div>
</template>

<script>
export default {
  name: "SnackBar",
  setup() {},
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped>
.snack-bar p {
  bottom: 35px;
  position: absolute;
  z-index: 2;
  background: rgb(106 177 25);
  border: 1px solid #35948b;
  border-radius: 26px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
}
</style>
