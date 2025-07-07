import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';

const routes = [
    { path: '/', component: TodoList },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };