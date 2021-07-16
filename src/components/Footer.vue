<template>
  <div class="footer flex justify-center items-center">
    <Button
      icon="list"
      :argument="false"
      :color="showOnlyFavorites ? '#BFBFBF' : '#F22539'"
      :handledClick="filterFavorites"
    >
      All
    </Button>
    <Button
      icon="starSM"
      :argument="true"
      :color="showOnlyFavorites ? '#F22539' : '#BFBFBF'"
      :handledClick="filterFavorites"
    >
      Favorites
    </Button>
  </div>
</template>

<script>
import Button from "../components/ui/Button";
import { mapState } from "vuex";

export default {
  name: "Footer",
  components: {
    Button,
  },
  computed: mapState({
    showOnlyFavorites: (state) => state.showOnlyFavorites,
  }),
  methods: {
    filterFavorites: function (argument) {
      this.$store.commit("filterByStatus", argument);
      this.$store.commit("toggleFavorites", argument);
    },
  },
};
</script>

<style scoped>
.footer {
  height: 80px;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>