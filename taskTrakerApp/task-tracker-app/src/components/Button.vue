<template>
  <button @click="onClick()" class="btn" :style="{ background: color}">{{ text }}</button>
</template>

<script>
export default {
  name: 'my-custom-button',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick () {
      this.$emit('btn-click')
    }
  }
}
</script>
