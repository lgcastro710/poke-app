import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: null,
    textBuscar:'',
    lista: [],
    listaFiltrada: [],
    showOnlyFavorites: false,
  },
  mutations: {
    setItem (state, itemModal){
      console.log("aquiii",itemModal)
      state.item = itemModal
    },
    setSearchValue (state, payload) {
      state.textBuscar = payload
    },
    setListValue (state, listValue){
      state.lista = listValue
    },
    setFavoriteStore (state, name){
      state.lista = state.lista.map((item)=>{
        if(item.name === name){
          item.active = !item.active
        }
          return item
      })
    },
    filterByName (state){
      let arreglo = state.lista;
      if (state.textBuscar !== "") {
        arreglo = state.lista.filter((pokemon) => {
          const name = pokemon.name.toLowerCase();
          return (
            name.indexOf(state.textBuscar.toLowerCase()) > -1
          );
        });
      }
      state.listaFiltrada = arreglo
    },
    toggleFavorites (state, status){
      state.showOnlyFavorites = status
    },
    filterByStatus (state, isActive){
      state.textBuscar = ''
      state.listaFiltrada = isActive
        ? state.lista.filter((pokemon) => {
          return pokemon.active === isActive
        })
        : state.lista
    },
  },
  actions: {
  },
  modules: {
  }
})
