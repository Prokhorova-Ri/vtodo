import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask(state, { id, description, date }) {
      const tasks = state.tasks.concat();
      const idx = tasks.findIndex((t) => t.id === id);
      const task = tasks[idx];
      const status = new Date(date) > new Date() ? "active" : "outdated";
      tasks[idx] = { ...task, date, description, status };
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask({ commit }, task) {
      commit("createTask", task);
    },
    updateTask({ commit }, task) {
      commit("updateTask", task);
    },
  },
  modules: {},
  getters: {
    tasks: (s) => s.tasks,
    taskById: (s) => (id) => s.tasks.find((t) => t.id === id),
  },
});
