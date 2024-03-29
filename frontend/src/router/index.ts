import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Computer from '../views/Computer.vue';
import iPad from '../views/iPad.vue';
import Phone from '../views/Phone.vue';
import Projector from '../views/Projector.vue';
import BackDoor from '../views/BackDoor.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Computer',
    component: Computer
  },
  {
    path: '/computer',
    name: 'Computer',
    component: Computer
  },
  {
    path: '/ipad',
    name: 'iPad',
    component: iPad
  },
  {
    path: '/phone',
    name: 'Phone',
    component: Phone
  },
  {
	path: '/projector',
	name: 'projector',
	component: Projector
  },
  {
    path: '/backdoor',
    name: 'backdoor',
    component: BackDoor
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
