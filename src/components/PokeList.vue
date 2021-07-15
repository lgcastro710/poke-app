<template>
  <div class="content">
    <Search />
    <div class="list">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from "../components/ui/Search";

export default {
  name: "PokeList",
  props: {},
  components: {
    Search,
  },
};
</script>

<style scoped>
.content {
  max-width: 570px;
  min-width: 315px;
  margin: auto;
}
</style>
