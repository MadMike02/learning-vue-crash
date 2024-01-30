<template>
  <header>
    <h1>{{ title }}</h1>
    <MyCustomButton />
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
