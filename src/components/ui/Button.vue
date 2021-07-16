<template>
  <button
    v-on:click.prevent="handledClick(argument)"
    class="btn flex justify-center items-center"
    :style="color ? 'background-color:' + color : 'background-color: #f22539'"
  >
    <SvgIcon
      v-if="icon"
      :name="icon"
      color="white"
      style="margin-right: 10px"
    />
    <span><slot></slot></span>
  </button>
</template>

<script>
import SvgIcon from "../ui/SvgIcon";

export default {
  name: "Button",
  props: {
    icon: String,
    color: String,
    argument: Boolean || Object,
    handledClick: Function,
  },
  components: {
    SvgIcon,
  },
};
</script>

<style scoped>
.btn {
  max-height: 44px;
  min-width: 150px;
  padding: 11px 20px;
  margin: 0 8px;
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
@media (min-width: 600px) {
  .btn {
    min-width: 275px;
  }
}
</style>