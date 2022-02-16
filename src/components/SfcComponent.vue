<template>
  <div class="text">{{ message }}</div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'blue'
      },
      font_size: {
        type: String,
        default: '2rem'
      },
      message: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .text {
    color: v-bind(color);

    font-size: v-bind('font_size');
  }
</style>