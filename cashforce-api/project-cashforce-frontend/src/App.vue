<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  background-color: #ffffff; /* Define o fundo branco */
  min-height: 100vh; /* Garante que o fundo branco cubra toda a altura da viewport */
  margin: 0;
  padding: 0;
}
</style>
