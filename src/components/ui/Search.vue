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
        :value="txtBuscar"
        @keyup="setState"
      />
    </div>
  </div>
</template>
<script>
import SvgIcon from "../ui/SvgIcon";
import { mapState } from "vuex";

export default {
  name: "Search",
  computed: mapState({
    txtBuscar: (state) => state.txtBuscar,
  }),
  methods: {
    setState: function (e) {
      this.$store.commit("setSearchValue", e.target.value);
      this.$store.commit("filterByName");
    },
  },
  components: {
    SvgIcon,
  },
};
</script>

<style scoped>
.input-search {
  width: auto;
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
    width: auto;
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