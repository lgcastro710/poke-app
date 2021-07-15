<template>
  <div class="failed-result flex flex-col justify-center items-center">
    <h1>Uh-oh!</h1>
    <p>You look lost on your journey!</p>

    <router-link to="/">
      <Button :handledClick="onclick" style="pointer-events: none">
        Go back home
      </Button></router-link
    >
  </div>
</template>

<script>
import Button from "../components/ui/Button";

export default {
  name: "FaildResult",
  components: {
    Button,
  },
  methods: {
    onclick: function () {
      console.log("aqui");
      this.$router.push("home");
    },
  },
};
</script>

<style scoped>
.failed-result {
}
.failed-result h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: #353535;
  margin-bottom: 10px;
}
.failed-result p {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #5e5e5e;
  margin-bottom: 25px;
}
</style>