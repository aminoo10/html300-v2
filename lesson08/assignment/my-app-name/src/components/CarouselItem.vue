<template>
  <div class="carousel-item" >
    <img 
    :src="img"  
    class="d-block w-100" 
    :alt="alt" 
    :title="title" 
    v-on:click="toggleShow()"
    :class="{'cat-borders': isShowing}"
    >
  </div>
</template>

<script>
import {toggle} from './mixins/toggle'

//I wanted to just import an object like what was done in the activity but I couldn't really figure out how
//to pass on the elements of the object into the attributes of the class.
//I read I could do this with 'v-bind="object", but i'll try to implement this another time
export default {
  name: 'carousel-item',
  mixins: [toggle],
  props: {
    img: String,
    alt: String,
    title: String
  }
}
</script>

