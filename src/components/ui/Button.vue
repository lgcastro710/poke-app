<template>
  <button
    v-on:click.prevent="handledClick()"
    class="btn flex justify-center items-center"
    :style="color ? 'background-color:' + color : 'background-color: #f22539'"
  >
    <SvgIcon
      v-if="icon"
      :name="icon"
      color="white"
      style="margin-right: 10px"
    />
    <slot></slot>
  </button>
</template>

<script>
import SvgIcon from "../ui/SvgIcon";

export default {
  name: "Button",
  props: {
    icon: String,
    color: String,
  },
  components: {
    SvgIcon,
  },
};
</script>

<style scoped>
.btn {
  max-height: 44px;
  padding: 11px 20px;
  cursor: pointer;
  border: none;
  border-radius: 60px;
  color: #ffffff;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
</style>