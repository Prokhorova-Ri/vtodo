<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h2>Создать задачу</h2>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            v-model="title"
            id="title"
            type="text"
            class="validate"
            required
          />
          <label for="title">Название</label>
          <span class="helper-text" data-error="Введите название"></span>
          <div class="input-field">
            <textarea
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
        <button class="btn" type="submit">Создать</button>
      </form>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "HomeOne",
  data: () => ({
    description: "",
    title: "",
  }),
  mounted() {
    M.AutoInit();
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: "active",
        date: this.date.date,
      };
      this.$store.dispatch("createTask", task);
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
<style></style>
