<template>
  <div><h1>Список активных задач</h1></div>
  <div class="row">
    <div class="input__filter col s6">
      <select ref="select" v-model="filter">
        <option value="" disabled selected>Выбрать статус задач</option>
        <option value="активная">Активные</option>
        <option value="просрочена">Просроченые</option>
        <option value="завершена">Завершенные</option>
      </select>
      <label>Сортировать по статусу</label>
    </div>
  </div>
  <hr />
  <table v-if="tasks.length">
    <thead>
      <tr>
        <th>#</th>
        <th>Название</th>
        <th>Дата</th>
        <th>Описание</th>
        <th>Статус</th>
        <th>Открыть</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, idx) of displayTasks" :key="task.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ task.title }}</td>
        <td>{{ new Date(task.date).toLocaleDateString() }}</td>
        <td class="td">
          <div class="text">{{ task.description }}</div>
        </td>
        <td>{{ task.status }}</td>
        <td>
          <router-link class="btn btn-small" :to="'task' + task.id"
            >Открыть</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>Нет активных задач</p>
</template>

<script>
import M from "materialize-css";
export default {
  data: () => ({
    filter: null,
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    displayTasks() {
      return this.tasks.filter((t) => {
        if (!this.filter) {
          return true;
        }
        return t.status === this.filter;
      });
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.select);
  },
};
</script>

<style scoped>
.td {
  max-width: 400px;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
