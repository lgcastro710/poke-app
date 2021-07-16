<template>
  <Modal>
    <div>
      <div class="bg--modal flex justify-center">
        <img :src="item.imageUrl" class="img-modal" />
        <button v-on:click.prevent="onClose" class="btn-close">
          <img src="../assets/btn-close.svg" alt="" />
        </button>
      </div>
      <div class="detail">
        <ul>
          <li><span>Name:</span>{{ item.name }}</li>
          <li><span>Weight:</span>{{ item.weight }}</li>
          <li><span>Height:</span>{{ item.height }}</li>
          <li v-if="item.types">
            <span>Types:</span>
            <PokePower :types="item.types"></PokePower>
          </li>
        </ul>
      </div>
      <div class="btn--share-favorite flex justify-between items-center">
        <Button :handledClick="copyData" style="min-width: 195px">Share to my friends</Button>
        <ButtonStar
                :active="item.active"
                :handledClick="setFavorite"
        ></ButtonStar>
      </div>
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
  name: "DetailModal",
  setup() {},

  components: {
    Button,
    ButtonStar,
    Modal,
    PokePower,
  },

  computed: mapState({
    item: (state) => {
      return state.item;
    }

  }),
  methods: {
    onClose: function () {
      this.$store.commit("setItem", false);
    },
    setFavorite: function () {
      console.log("aqui----");
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
    copyData: function (){
      const types = this.item.types.map((type) => {
        return type.type.name;
      })
      const powers = types.join();
      const text = `
  Name: ${this.item.name},
  Weight:${this.item.weight},
  Height:${this.item.height},
  Types:(${powers})
  `
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
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
  height: 250px;
  position: relative;
}
.detail {
  margin-top: 20px;
  margin-bottom: 20px;
}
.detail li {
  margin: 0 30px;
  border-bottom: 1px solid #e8e8e8;
  color: #5e5e5e;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  text-transform: capitalize;
}
.detail span {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  margin-right: 5px;
}
.btn--share-favorite{
  margin: 0 20px;
}
.btn-close img {
  top: 15px;
  right: 15px;
  position: absolute;
}
</style>
