<template>
<myHeader>

  <template v-slot:link-one>
    Home
  </template>

  <template v-slot:link-two>
    Images
  </template>

  <template v-slot:link-three>
    Grids
  </template>

  <template v-slot:link-four>
    Accordion
  </template>

</myHeader>



<!-- I dont know why there is an error on this router-view element, not sure what exactly to do about it -->
  <router-view/>
</template>

<script>
import myHeader from './components/Header.vue';

export default {
  name: 'app',
  components: {
    myHeader
  }
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

#nav {
  margin-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.cat-borders {
  border-style: groove;
  border-color: rgb(173, 55, 94);
  border-width: 1rem;
}

</style>
