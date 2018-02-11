const state = {
  '1': {
    id: '1',
    label: 'Room 1',
    isAvailable: true,
    booking: {}
  },
  '2': {
    id: '2',
    label: 'Room 2',
    isAvailable: true,
    booking: {}
  }
}

const ACTION_ADD_BOOKING = 'ADD_BOOKING'

const getters = {
  all: state => Object.keys(state).map(id => state[id])
}

const actions = {
  book ({commit}, payload) {
    const booking = {
      roomId: '1',
      name: 'John',
      checkin: '10/02/2018 11:00 AM',
      checkout: '12/02/2018 10:00 AM'
    }
    commit(ACTION_ADD_BOOKING, booking)
  }
}

const mutations = {
  [ACTION_ADD_BOOKING] (state, payload) {
    state[payload.roomId].booking = payload
    state[payload.roomId].isAvailable = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
