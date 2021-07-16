<template>
  <Modal>
    <div>
      <div class="bg--modal">
        <img :src="item.imageUrl" class="img-modal" />
      </div>
      <div class="list--detail">
        <ul>
          <li>Name:{{ item.name }}</li>
          <li>Weight:{{ item.weight }}</li>
          <li>Height:{{ item.height }}</li>
          <li v-if="item.types">
            Types:
            <PokePower :types="item.types"></PokePower>
          </li>
        </ul>
      </div>
      <div class="btn--share-favorite flex justify-center items-center">
        <Button>Share to my friends</Button>
        <ButtonStar
          :active="item.active"
          :handledClick="setFavorite"
        ></ButtonStar>
      </div>
      <button v-on:click.prevent="onClose">cerrar</button>
    </div>
  </Modal>
</template>

<script>
import Button from "../components/ui/Button";
import ButtonStar from "../components/ui/ButtonStar";
import Modal from "../components/ui/Modal";
import PokePower from "../components/PokePower";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "DatailModal",
  setup() {},

  components: {
    Button,
    ButtonStar,
    Modal,
    PokePower,
  },
  computed: mapState({
    item: (state) => {
      console.log("+++", state);
      return state.item;
    },
  }),
  methods: {
    onClose: function () {
      this.$store.commit("setItem", false);
    },
    setFavorite: function () {
      this.$store.commit("setFavoriteStore", this.item.name);
    },
    getElement: async function () {
      const pokemon = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.item.name}`)
        .then((response) => {
          return response.data;
        });

      let imgId = pokemon.id;
      if (pokemon.id < 10) {
        imgId = "00" + pokemon.id;
      }
      if (pokemon.id > 9 && pokemon.id < 100) {
        imgId = "0" + pokemon.id;
      }
      pokemon.imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgId}.png`;
      const item = {
        ...this.item,
        ...pokemon,
      };
      console.log("--", item.types);
      this.$store.commit("setItem", item);
    },
  },
  created: function () {
    this.getElement();
  },
};
</script>

<style scoped>
.bg--modal {
  background-image: url("../assets/paisaje.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
}
</style>