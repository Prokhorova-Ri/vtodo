<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h1>{{ task.title }}</h1>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <div class="input-field">
            <textarea
              style="min-height: 200px"
              v-model="description"
              id="description"
              class="materialize-textarea"
            ></textarea>
            <label for="description">Описание</label>
            <span
              class="character-counter"
              style="float: right; font-size: 12px"
              maxlength="2000"
              >{{ description.length }}/2000</span
            >
          </div>
        </div>
        <input type="text" ref="datepicker" />
        <div v-if="task.status != 'completed'">
          <button class="btn" type="submit">Обновить</button>
          <button class="btn purple" type="button" @click="completeTask">
            Завершить
          </button>
        </div>
      </form>
    </div>
    <p v-else>задачи нет</p>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
  data: () => ({
    description: "",
  }),
  mounted() {
    this.description = this.task.description;
    M.AutoInit();
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(this.task.date),
      setDefaultDate: true,
    });
    setTimeout(() => {
      M.updateTextFields();
    }, 0);
  },
  methods: {
    submitHandler() {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        description: this.description,
        date: this.date.date,
      });
      this.$router.push("/List");
    },
    completeTask() {
      this.$store.dispatch("completeTask", this.task.id);
      this.$router.push("/List");
    },
  },
  unmounted() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
  },
};
</script>

<style scoped>
.btn {
  margin: 10px;
}
</style>
