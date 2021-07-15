import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    textBuscar:'',
    lista: [],
    listaFiltrada: [],
  },
  mutations: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
