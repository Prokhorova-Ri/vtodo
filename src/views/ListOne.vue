<template>
  <div><h1>Список активных задач</h1></div>
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
      <tr v-for="(task, idx) of tasks" :key="task.id">
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
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
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
