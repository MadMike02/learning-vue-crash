<template>
  <div v-for="task in tasks" :key="task.id">
    <MySingleTask @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div>
</template>

<script>
import MySingleTask from './Task.vue'

export default {
  name: 'my-tasks-list',
  components: {
    MySingleTask
  },
  props: {
    tasks: Array
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>
