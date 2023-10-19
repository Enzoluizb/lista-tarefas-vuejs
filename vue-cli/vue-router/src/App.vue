<template>
  <div id="app">
    <CompCabecalho />
    <div id="nav">
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/usuario">User</router-link>
      </nav>
    </div>
    <div class="content">
      <router-view />
    </div>
    <CompRodape />
  </div>
</template>

<script>
import CompCabecalho from './components/templates/CompCabecalho.vue';
import CompRodape from './components/templates/CompRodape.vue';

export default {
  components: { CompCabecalho, CompRodape}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
