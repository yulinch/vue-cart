import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	prodList: [],
  	searchName: '',
  	currPage: 1,
  	countOfPage: 10,
  	cart: [],     // shopping cart
  	total: 0,     // $ total
  },
  mutations: {
  	setProdList(state, list){
  		state.prodList = list;
  	},
  	setCurrPage(state, page){
  		state.currPage = page;
  	}
  },
  actions: {

  }
})
