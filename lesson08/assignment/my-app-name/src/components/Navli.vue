<template>

  <li><router-link exact-active-class="active" class="nav-link" :to="urlPath"><slot>Nav Item</slot></router-link></li>

</template>

<script>
export default {
  name: 'nav-li',
  props: {
    urlPath: String
  }
}
</script>
