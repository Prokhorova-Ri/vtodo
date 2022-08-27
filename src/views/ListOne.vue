<template>
  <div><h2>Список активных задач</h2></div>
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
  <button v-if="filter" class="btn btn-small" @click="filter = null">
    Очистить фильтр
  </button>
  <hr />
  <table v-if="tasks.length">
    <thead class="thead">
      <tr>
        <th>#</th>
        <th>Название</th>
        <th>Дата</th>
        <th>Описание</th>
        <th>Статус</th>
        <th>Открыть</th>
        <th>Удалить</th>
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
        <td class="td-btn">
          <router-link class="btn btn-small" :to="'task' + task.id"
            >Открыть</router-link
          >
        </td>
        <td class="td-btn">
          <button class="btn btn-small purple" @click="deleteTask(task)">
            Удалить
          </button>
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
  methods: {
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.td {
  max-width: 600px;
}
.td-btn {
  max-width: 150px;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.btn {
  font-style: italic;
}
.thead {
  background-color: #d4c3f1;
}
</style>
