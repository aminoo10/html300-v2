<template>
  <div class="jumbotron">
      <h1 class="display-4">{{ msg }}</h1>
      <div class="lead" v-if="alrightFellas(msg)">
        <video width="450" controls :src="video"></video>
      </div>
      <p class="lead" v-else>This is content</p>
      <hr class="my-4">
    <!-- I tried getting the bootstrap-vue tooltip to work properly but I just couldn't get it working: https://bootstrap-vue.org/docs/components/tooltip -->
      <p>again, <span title="Requirements state that: &quot;First page that is a landing page with some contents&quot;">Contents</span>.</p>
      <input type="text" v-on:input="changeTitle">
  </div>
</template>

<script>
import Video from '@/assets/alright_fellas.mp4'

export default {
  data(){
    return{ 
      msg: 'Content',
      bool: false,
      video: Video
    }
  },
      methods:{
        changeTitle: function(event){
          this.msg = event.target.value;
        },
        alrightFellas: function(key){
          //this is an inside joke, i'm sorry.
          if (key == 'Chaddeaux') return this.bool = !this.bool;
        }
      }
  };
</script>
