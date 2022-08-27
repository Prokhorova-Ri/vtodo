<template>
  <nav class="deep-purple lighten-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo" exact active-class="active"
        >Список задач</router-link
      >
      <ul class="links">
        <router-link to="/" exact active-class="active">
          <a class="link" href="/list">Форма</a>
        </router-link>
        <router-link to="/List" active-class="active">
          <a class="link" href="#">Список</a>
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
