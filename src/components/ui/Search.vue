<template>
  <div class="">
    <div class="input-search flex justify-start items-center">
      <SvgIcon
        name="search"
        color="#BFBFBF"
        style="margin: 16px 10px 16px 15px"
      ></SvgIcon>
      <input
        type="text"
        placeholder="Search"
        v-model="txtBuscar"
        @keyup="setState"
      />
    </div>
  </div>
</template>

<script>
import SvgIcon from "../ui/SvgIcon";

export default {
  name: "Search",
  data: () => {
    return {
      txtBuscar: "",
    };
  },
  methods: {
    setState: function () {
      console.log("aqui");
      this.$store.commit("setSearchValue", this.txtBuscar);
    },
  },
  components: {
    SvgIcon,
  },
};
</script>
<style>
.input-search {
  width: 315px;
  height: 50px;
  left: 30px;
  top: 35px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  margin: 35px 30px 40px;
}
.input-search input {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #bfbfbf;
  width: 100%;
  outline: none;
}

@media (min-width: 600px) {
  .input-search {
    width: 570px;
    height: 50px;
    left: 291px;
    top: 35px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    margin: 35px auto 40px;
  }
}
</style>