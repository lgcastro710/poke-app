<template>
  <span class="power">{{ powers }}</span>
</template>

<script>
export default {
  name: "Power",
  data: () => ({
    powers: "",
  }),
  props: {
    types: Array,
  },
  methods: {
    joinPowers: function () {
      const types = this.types.map((type) => {
        console.log(type);
        return type.type.name;
      });
      this.powers = types.join();
    },
  },
  created() {
    this.joinPowers();
  },
};
</script>

<style scoped>
.power {
  margin: 0 5px;
}
</style>
