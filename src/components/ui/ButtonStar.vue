<template>
  <button
    v-on:click.prevent="(e) => onClick(e)"
    class="btn__container flex justify-center items-center"
  >
    <SvgIcon name="star" :color="active ? '#ECA539' : '#BFBFBF'"></SvgIcon>
  </button>
</template>

<script>
import SvgIcon from "../ui/SvgIcon";

export default {
  name: "ButtonStar",
  props: {
    active: Boolean,
    handledClick: Function,
  },
  components: {
    SvgIcon,
  },
  methods: {
    onClick: function (event) {
      event.stopPropagation();
      this.handledClick();
    },
  },
};
</script>

<style>
.btn__container {
  width: 44px;
  height: 44px;
  right: 10px;
  background: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;
}
</style>
