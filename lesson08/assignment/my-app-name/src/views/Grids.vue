<template>
<div id="grids">
  <div class="row">
    <div class="col-xl-11 col-lg-3 col-sm-6 p-5 bg-primary">
      <button v-on:click ="toggleAlert('green')" type="button" class="btn btn-success">Click Here!</button>
    </div>
    <div class="col-xl-9 col-sm-4 col-md-6 p-5 bg-warning">
      <button v-on:click ="toggleAlert('red')" type="button" class="btn btn-danger">Click Here!</button>
    </div>
  </div>

  <!-- I think I might have implemented bootstrap-vue incorrectly so I will just settle on using bootstrap
    implementation --> 
<!-- transition code taken from https://vuejs.org/v2/guide/transitions.html -->

<transition name="fade">
    <div v-if="inToggleGreen" class=" alert alert-success fade show mt-2" role="alert">
    Alert-Success Clicked!
    <!-- I had to change some things with the button action as I couldn't get this to work properly without
    having to change what clicking the close button does, if I had kept it this element would be removed from the DOM. -->
    <button type="button" class="close" v-on:click="toggleAlert('green')" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</transition>

<transition name="fade">
    <div v-if="inToggleRed" class=" alert alert-danger fade show mt-2" role="alert">
    Alert-Danger Clicked!
    <button type="button" class="close" v-on:click="toggleAlert('red')" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</transition>

</div>
</template>

<script>
export default {
  data() {
    return {
      inToggleGreen: false,
      inToggleRed: false
    }
  },
  methods:{
    //I wasn't sure how to do a switch case but basically what I have working here is the variable to be modified will be 
    //determined by the string passed through. 
    toggleAlert: function(color) {
      if (color == 'green') return this.inToggleGreen = !this.inToggleGreen
      if (color == 'red') return this.inToggleRed = !this.inToggleRed
      return
    }
  }

}
</script>

