<template>
  <div id="accordion">
    <div class="card" v-for="(card, index) in cards" v-bind:key="card">
      <div class="card-header" :id="'heading'+ (index + 1)">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" :data-target="'#collapse'+(index + 1)" aria-expanded="false" :aria-controls="'collapse'+(index + 1)">
            Accordion Item #{{ index + 1 }}
          </button>
        </h5>
      </div>
      <div :id="'collapse'+(index + 1)" class="collapse" :aria-labelledby="'heading'+ (index + 1)" data-parent="#accordion">
        <div class="card-body">
          <!--I dont know how safe this is but it helps me put in any sort of element I want as long as I explicity declare the tags
          If there are problems with this down the line I can always just have the list items start and end with element tags -->
          <span v-html="card"></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Image from '@/assets/chrome_5Bqz5IyRUu.png'
export default {
  data(){
    return{
      cards: [
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cumque eaque asperiores error eligendi rerum aliquam laboriosam soluta dolore, doloremque modi dolor sit corrupti officiis! Non aspernatur ex ad tempora.',
          `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`,
          `<img src=${Image} title="yoinky" class="d-block w-50" alt="cat3">`]
    }
  },
}
</script>