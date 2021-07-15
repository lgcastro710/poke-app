<template>
  <div class="content">
    <div class="img-login flex justify-center items-center">
      <div class="ellipse">
        <img src="../assets/Ellipse.svg" alt="Ellipse" class="img-ellipse" />
        <img src="../assets/pikachu.svg" alt="Mask Group" class="img-pika" />
      </div>
    </div>
    <div class="title">
      <h1>Welcome to Pokédex</h1>
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </div>
    <div class="btn-get-started">
      <router-link to="/dashboard" class="w-full flex justify-center" style="">
        <button>Get started</button></router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style>
.content {
  max-width: 570px;
  min-width: 315px;
  margin: auto;
}
.img-login {
  position: relative;
  margin-top: 71px;
}
.ellipse {
  width: 205.95px;
  height: 205.95px;
  margin-top: 71px;
}
.img-ellipse {
  position: absolute;
  bottom: 0;
  width: 205.95px;
  height: 205.95px;
}
.img-pika {
  position: absolute;
  bottom: -10px;
  margin-left: -53px;
  transform: rotate(-7deg);
}
.title {
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #353535;
}
.title p {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-top: 30px;
  padding: 0 30px;
}

.btn-get-started button {
  width: 131px;
  height: 44px;
  margin-top: 50px;
  cursor: pointer;
  border: none;
  background: #f22539;
  border-radius: 60px;
  color: #ffffff;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
</style>