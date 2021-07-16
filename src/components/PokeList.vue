<template>
  <div class="">
    <FailedResult v-if="!listaFiltrada.length"></FailedResult>
    <ul v-if="listaFiltrada.length">
      <li v-for="(item, key) in listaFiltrada" v-bind:key="key">
        <PokeItem :item="item" :setItem="setItem"></PokeItem>
      </li>
    </ul>
  </div>
</template>

<script>
import PokeItem from "../components/PokeItem";
import FailedResult from "../components/FailedResult";
import { mapState } from "vuex";

export default {
  name: "PokeList",
  data: function () {
    return {
      item: null,
    };
  },
  components: {
    PokeItem,
    FailedResult,
  },
  methods: {
    setItem: function () {
      this.$store.commit("setItem", this.state.item);
    },
  },
  computed: mapState({
    listaFiltrada: (state) => state.listaFiltrada,
  }),
  created() {
    this.$store.commit("setSearchValue", "");
    this.$store.commit("filterByName");
  },
};
</script>

<style scoped>
</style>
