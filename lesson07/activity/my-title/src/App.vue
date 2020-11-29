<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-group">
        <input class="form-control" type="text" id="name" placeholder="Enter name">
      </div>
      <span class="d-inline-block" tabindex="0" data-toggle="tooltip" data-placement="bottom" title="click the 'Click Me' button to activate form submission">
        <button type="submit" :disabled='bool' id="submit-button" class="btn btn-secondary">Submit</button>  
      </span>
      <button type="button" id="click-me-button" v-on:click='isDisabled' class="btn btn-secondary">Click Me</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
     bool: true
    }
  },
  methods: {
    isDisabled: function() {
      return this.bool = false;
    }
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
  margin-top: 60px;
}
</style>
