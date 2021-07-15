<template>
  <div class="dashboard">
    <!-- <div class="px-8">
      <router-link to="/"
        ><button class="btn-volver">Volver</button></router-link
      >
    </div> -->
    <ButtonStar :active="status" :handledClick="setFavorite" />
    <PokeList />
  </div>
</template>
<script>
import PokeList from "../components/PokeList";
import ButtonStar from "../components/ui/ButtonStar";

export default {
  name: "Dashboard",
  data: () => ({
    status: false,
  }),
  setup() {},
  components: {
    PokeList,
    ButtonStar,
  },
  methods: {
    setFavorite: function () {
      console.log("setea el favorito");
    },
  },
};
</script>
