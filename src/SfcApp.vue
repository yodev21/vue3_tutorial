<template>
  <div>
    <sfc-component message='青文字'></sfc-component>
    <sfc-component message='赤文字' color='red'></sfc-component>
    <sfc-component message='大きい赤文字' color='red' font_size='5rem'></sfc-component>
  </div>
</template>

<script>
  import SfcComponent from './components/SfcComponent.vue'
  export default {
    name: 'Sfc',
    components: {
      SfcComponent
    }
  }
</script>
