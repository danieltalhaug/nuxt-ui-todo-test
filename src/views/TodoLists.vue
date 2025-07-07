<script setup>
import { computed } from 'vue';
import { useTodoLists } from '@/composables/useTodoLists';

const { todoLists } = useTodoLists();

const todoListsMap = computed(() => {
    const icon = 'i-lucide-list';

    return todoLists.value.map(list => {
        return {
            value: list.id,
            label: `${list.title} (${list.items.length})`,
            icon,
        };
    }
)});

</script>

<template>
    <UTree
        v-if="todoLists.length"
        :items="todoListsMap"
        size="xl"
    />
</template>
