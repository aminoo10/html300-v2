import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Images from "../views/Images.vue";
import Grids from "../views/Grids.vue";
import Accordion from "../views/Accordion.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/images",
    name: "images",
    component: Images
  },
  {
    path: "/grids",
    name: "grids",
    component: Grids
  },
  {
    path: "/accordion",
    name: "accordion",
    component: Accordion
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
