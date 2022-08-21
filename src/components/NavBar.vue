<template>
  <nav class="deep-purple lighten-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Список задач</router-link>
      <ul class="links">
        <router-link to="/List" exact active-class="active">
          <a class="link" href="/list">Страница 1</a>
        </router-link>
        <router-link to="/Task" active-class="active">
          <a class="link" href="/task">Страница 2</a>
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
