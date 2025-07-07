import { createRouter, createWebHistory } from 'vue-router';
import TodoListsView from './views/TodoLists.vue';

const routes = [
    { path: '/', component: TodoListsView },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };