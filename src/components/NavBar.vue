<template>
  <nav class="deep-purple lighten-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Задачи</router-link>
      <ul class="links">
        <router-link custom="li" to="/" exact active-class="active">
          <a href="#">Create</a>
        </router-link>
        <router-link custom="li" to="/List" active-class="active">
          <a href="#">List</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  padding: 0 10px;
}
.links {
  display: flex;
  justify-content: end;
}
</style>
