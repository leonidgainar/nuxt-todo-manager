import { nanoid } from 'nanoid'

export const state = () => ({
  users: [],
})

export const getters = {
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === id)
  },
  getUsersName: (state) => {
    return state.users.map(({ name }) => name)
  },
}

export const actions = {
  addUser({ commit }, user) {
    commit('addUser', user)
  },

  editUser({ commit }, updatedUser) {
    commit('editUser', updatedUser)
  },

  deleteUser({ commit }, userId) {
    commit('deleteUser', userId)
  },

  addTaskToUser({ commit }, payload) {
    commit('addTaskToUser', payload)
  },

  deleteTaskFromUser({ commit }, payload) {
    commit('deleteTaskFromUser', payload)
  },
}

export const mutations = {
  addUser(state, user) {
    state.users.push({ id: nanoid(), ...user })
  },

  editUser(state, updatedUser) {
    const userIndex = state.users.findIndex(
      (user) => user.id === updatedUser.id
    )
    if (userIndex !== -1) {
      state.users[userIndex] = updatedUser
    }
  },

  deleteUser(state, userId) {
    state.users = state.users.filter((user) => user.id !== userId)
  },

  addTaskToUser(state, payload) {
    const { userId, taskId } = payload
    const userIndex = state.users.findIndex((user) => user.id === userId)
    if (userIndex !== -1) {
      state.users[userIndex].tasks.push(taskId)
    }
  },

  deleteTaskFromUser(state, payload) {
    const { userId, taskId } = payload
    const userIndex = state.users.findIndex((user) => user.id === userId)
    if (userIndex !== -1) {
      state.users[userIndex].tasks = state.users[userIndex].tasks.filter(
        (task) => task !== taskId
      )
    }
  },
}
