<template>
  <div>
    <Loading :visible="showLoading"></Loading>
    <div class="content">
      <DetailModal v-if="item" :item="item"></DetailModal>
      <Search />
      <PokeList />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import PokeList from "../components/PokeList";
import Search from "../components/ui/Search";
import Footer from "../components/Footer";

import axios from "axios";
import Loading from "../components/Loading";
import DetailModal from "../components/DetailModal";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  data: function () {
    return {
      status: true,
      offset: 0,
      showLoading: false,
    };
  },
  setup() {},
  components: {
    PokeList,
    Search,
    Footer,
    Loading,
    DetailModal,
  },
  computed: mapState({
    item: (state) => state.item,
    showOnlyFavorites: (state) => state.showOnlyFavorites,
  }),
  methods: {
    setListStore: function (pokeList) {
      this.$store.commit("setListValue", pokeList);
      this.$store.commit("filterByName");
    },
    listarElementos: async function () {
      if (this.showOnlyFavorites) {
        return false;
      }
      this.showLoading = true;
      const pokeData = await axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?limit=${
            this.$store.state.lista.length ? 10 : 10
          }&offset=${this.offset}`
        )
        .then((response) => response.data.results);

      const lista = pokeData.map((pokeInfo) => {
        pokeInfo.active = false;
        return pokeInfo;
      });
      setTimeout(() => {
        this.showLoading = false;
      }, 1500);
      const pokeList = [...this.$store.state.lista, ...lista];
      this.setListStore(pokeList);
    },
    handleScroll() {
      window.onscroll = () => {
        const scrollTop = parseInt(
          Math.ceil(document.documentElement.scrollTop)
        );

        const innerHeight = window.innerHeight;
        const offsetHeight = document.documentElement.offsetHeight;

        const bottomOfWindow = scrollTop + innerHeight === offsetHeight;
        if (bottomOfWindow) {
          this.offset += 10;
          this.listarElementos();
        }
      };
    },
  },
  created: function () {
    this.listarElementos();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.content {
  max-width: 570px;
  min-width: 315px;
  margin: auto;
  min-height: 85vh;
}
</style>
