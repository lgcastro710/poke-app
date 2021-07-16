<template>
  <div class="">
    <div
      class="item flex justify-between items-center"
      v-on:click.prevent="setItemSelected"
    >
      <span>{{ item.name }}</span>
      <ButtonStar
        :active="item.active"
        :handledClick="setFavorite"
      ></ButtonStar>
    </div>
  </div>
</template>

<script>
import ButtonStar from "./ui/ButtonStar";

export default {
  name: "PokeItem",
  components: {
    ButtonStar,
  },
  props: {
    item: Object,
  },
  methods: {
    setFavorite: function () {
      this.$store.commit("setFavoriteStore", this.item.name);
    },
    setItemSelected: function () {
      this.$store.commit("setItem", this.item);
    },
  },
};
</script>

<style scoped>
.item {
  width: auto;
  height: 60px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  padding: 17px 8px 17px 20px;
  margin: 10px 30px 0px;
  cursor: pointer;
}
.item span {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #353535;
  text-transform: capitalize;
}
@media (min-width: 600px) {
  .item {
    margin: 10px 0px;
  }
}
</style>>

