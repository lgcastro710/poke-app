<template>
  <div class="input-search flex justify-start items-center">
    <img src="../../assets/icons/search.svg" alt="" class="icon-search" />
    <input type="text" placeholder="Search" />
  </div>
</template>

<style>
.input-search {
  position: absolute;
  width: 315px;
  height: 50px;
  left: 30px;
  top: 35px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}
.imput-search input {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #bfbfbf;
}
.icon-search {
  width: 18px;
  height: 18px;
  left: 15px;
  top: calc(50% - 18px / 2);
  margin: 16px 10px 16px 15px;
}
@media (min-width: 600px) {
  .input-search {
    position: absolute;
    width: 570px;
    height: 50px;
    left: 291px;
    top: 35px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
  }
}
</style>