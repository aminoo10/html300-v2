<template>
<!--Initially I thought about using the bootstrap-vue implementation of carousel (https://bootstrap-vue.org/docs/components/carousel),
but my original code worked fine so I just refactored it a little bit -->
  <div id="carousel-container" class="d-flex justify-content-center mt-2">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        <li data-target="#carouselExampleControls" data-slide-to="3"></li>
        <li data-target="#carouselExampleControls" data-slide-to="4"></li>
      </ol>
      <!-- Refactored part of original code where I am dynamically making the carousel images -->
      <div class="carousel-inner">
        <div v-for="(image, index) in images" class="carousel-item" :class=" { active: index==0 }" v-bind:key="image" >
          <img :src="image.img"  class="d-block w-100" :alt="image.alt">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-idden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-idden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import Image1 from '@/assets/2b1468fce7fa0d2bc313a47f81df2d51.jpg'
import Image2 from '@/assets/images.jpg'
import Image3 from '@/assets/chrome_5Bqz5IyRUu.png'
import Image4 from '@/assets/rokinon-8mm-fish-eye-review-01-750px.jpg'
import Image5 from '@/assets/tumblr_pio1sxmUPq1r8zcjao1_1280.jpg'
/* I was tearing out my hair trying to figure out why I couldn't just pass the image's url from the object
   into the src field, I read it had something to do with the way Webpack retrieves image locations. If I had 
   put the static url right in the image it would work fine, but if I just passed through a variable there would be
   some unforseen issues. I am glad I finally figured out I had to IMPORT the images like so. 
*/

export default {
  data() {
    return {
      images: [
        { img: Image1, alt: 'cat1'},
        { img: Image2, alt: 'cat2'},
        { img: Image3, alt: 'cat3'},
        { img: Image4, alt: 'cat4'},
        { img: Image5, alt: 'cat5'}
        ],
      }
  },
}
</script>
