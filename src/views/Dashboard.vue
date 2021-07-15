<template>
  <div class="dashboard">
    <!-- <div class="px-8">
      <router-link to="/"
        ><button class="btn-volver">Volver</button></router-link
      >
    </div> -->
    <PokeList />
  </div>
</template>
<script>
import PokeList from "../components/PokeList";

export default {
  name: "Dashboard",
  data: () => ({
    status: true,
  }),
  setup() {},
  components: {
    PokeList,
  },
  methods: {
    // setFavorite: function () {
    //   console.log("setea el favorito");
    // },
    setColor: function () {
      console.log("setea el favorito");
    },
  },
};
</script>
