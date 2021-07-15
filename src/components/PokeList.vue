<template>
  <div class="">
    <FailedResult v-if="!listaFiltrada.length"></FailedResult>
    <ul v-if="listaFiltrada.length">
      <li v-for="(item, key) in listaFiltrada" v-bind:key="key">
        <PokeItem :item="item"></PokeItem>
      </li>
    </ul>
  </div>
</template>

<script>
import PokeItem from "../components/PokeItem";
import FailedResult from "../components/FailedResult";

export default {
  name: "PokeList",
  data: function () {
    return {
      item: null,
      lista: this.$store.state.lista,
    };
  },
  components: {
    PokeItem,
    FailedResult,
  },
  computed: {
    listaFiltrada: function () {
      let arreglo = this.$store.state.lista;
      const consulta = this.$store.state.textBuscar;
      if (consulta !== "") {
        arreglo = this.$store.state.lista?.filter((pokemon) => {
          const name = pokemon.name;
          const id = String(pokemon.id);
          return (
            (name.toLowerCase() + " " + id.toLowerCase()).indexOf(
              consulta.toLowerCase()
            ) > -1
          );
        });
      }
      return arreglo;
    },
  },
};
</script>

<style scoped>
</style>
