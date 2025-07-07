import { useStorage } from '@vueuse/core';

export function useTodoLists() {
    const todoLists = useStorage('todo-lists', [
        {
            id: 'shablading',
            title: 'Shopping list',
            items: [],
        }
    ]);

    return {
        todoLists
    };
}