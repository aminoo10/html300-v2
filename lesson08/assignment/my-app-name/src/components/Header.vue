<template>
<div class="my-header">
  <nav class= "nav navbar navbar-expand-sm navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">Navbar</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>            
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <navli
          v-for="navLink in navLinks"
          v-bind:key="navLink"
          :urlPath="navLink.urlPath"
          >
          <!--This is one way of getting dynamically created nav links but im not too crazy about implementing it like this,
          initially I was just going to set the name in the navLinks object to be what the nav link displays ('Home', 'Images', etc..), but if I did it like this I wouldn't be using named slots
          so I am kinda going in this in a weird roundabout way but if there are any problems with this let me know-->
          <slot :name="'link-' + (navLink.name)"></slot>
          </navli>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import navli from './Navli.vue';

export default {
  name: 'my-header',
  components: {
    navli
  },
  data() {
    return{
      navLinks:[
        {urlPath: '/', name: 'one'},
        {urlPath: '/images', name: 'two'},
        {urlPath: '/grids', name: 'three'},
        {urlPath: '/accordion', name: 'four'}
      ],
    }
  }
}
</script>