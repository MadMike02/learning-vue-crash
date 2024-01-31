<template>
  <header>
    <h1>{{ title }}</h1>
    <MyCustomButton v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'green': 'red'"/>
  </header>
</template>

<script>
import MyCustomButton from './Button.vue'

export default {
  name: 'my-header',
  components: {
    MyCustomButton
  },
  props: {
    title: {
      type: String,
      default: 'Hello World'
    },
    showAddTask: {
      type: Boolean
    }
  },
  computed: {
    homePage () {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
