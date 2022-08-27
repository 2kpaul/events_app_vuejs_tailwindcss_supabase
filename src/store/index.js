import { createStore } from 'vuex'
import EventService from '@/services/EventService'

export default createStore({
  state: {
    events: [],
    event: ''
  },
  getters: {
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          if (!response.data) {
            this.$router.push({
              name: 'NetworkError'
            })
          }
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log(error)
          this.$router.push({
            name: 'NetworkError'
          })
        })
    },
    fetchEvent({ commit }, id) {
      EventService.getEvent(id)
        .then(response => {
          if (!response.data[0]) {
            this.$router.push({
              name: '404Resource',
              params: { resource: 'event' }
            })
          }
          commit('SET_EVENT', response.data[0])
        })
        .catch(error => {
          if (error.response && error.response === 404) {
            this.$router.push({
              name: '404Resource',
              params: { resource: 'event' }
            })
          } else {
            this.$router.push({
              name: 'NetworkError'
            })
          }
        })
    }
  },
  modules: {
  }
})
