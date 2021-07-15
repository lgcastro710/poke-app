<template>
  <div class="footer flex justify-center items-center">
    <Button icon="list"> All </Button>
    <Button icon="starSM" color="#BFBFBF"> Favorites </Button>
  </div>
</template>

<script>
import Button from "../components/ui/Button";

export default {
  name: "Footer",
  components: {
    Button,
  },
};
</script>

<style scoped>
.footer {
  height: 80px;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
</style>