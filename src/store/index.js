import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kompanije: [],
    studenti: [],
    sviStudentiIDs: [],
    pozorista: [],
    selectedPozoriste: null,
  },

  getters: {
  },

  mutations: {
    addKompanije(state, kompanije){
      state.kompanije = kompanije;
    },
    addStudent(state, student){
      state.studenti[student.id] = student;
    },
    addSviStudentiIDs(state, niz){
      state.sviStudentiIDs = niz;
    },
    addPozorista(state, pozorista){
      state.pozorista = pozorista;
    },
    setSelectedPozoriste(state, pozoriste) {
    state.selectedPozoriste = pozoriste;
  },
  },

  actions: {
      async fetchKompanije({commit}){
      fetch(`http://alumni.raf.edu.rs/rs/api/kompanije`)
        .then( res=>res.json() )
          .then( data => commit('addKompanije', data) );
    },
    async getStudent({commit, state}, studentID){
      // return new Promise((resolve, reject)=>{
      return new Promise((resolve)=>{
        if(state.studenti[studentID]){
          resolve(state.studenti[studentID]);
        }
        else{
          fetch(`http://alumni.raf.edu.rs/rs/api/diplomac/${studentID}`)
            .then( res=>res.json() )
              .then( data=> {
                commit('addStudent', data)
                resolve(data);
              });
        }
    });
  },
  async fetchSviStudenti({commit}){
      fetch("http://alumni.raf.edu.rs/rs/api/list")
        .then( res=>res.json() )
          .then( data=> commit('addSviStudentiIDs', data) );
    },
  async fetchPozorista({commit}){
      fetch(`http://localhost:9000/admin/pozoriste`)
        .then( res=>res.json() )
          .then( data => commit('addPozorista', data) );
    },  
  // selectPozoriste({ commit, dispatch }, id) {
  //   commit('setSelectedPozoristeId', id);
  //   // Trigger navigation to the details page
  //   dispatch('navigateToPozoristeDetalji');
  // },
  // // Other actions...
  // navigateToPozoristeDetalji({ state }) {
  //   // Navigate to the details page using Vue Router
  //   if (state.selectedPozoristeId) {
  //     router.push({ name: 'PozoristeDetalji', params: { id: state.selectedPozoristeId } });
  //   }
  // },
  selectPozoriste({ commit }, pozoriste) {
    commit('setSelectedPozoriste', pozoriste);
    // Navigate to the PozoristeDetalji route
    router.push({ name: 'PozoristeDetalji', params: { id: pozoriste.id } });
  },

  },
  modules: {
  }
})
