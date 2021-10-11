<template>
  <div class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p>{{data.msg}}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Multiple',
  setup(){
    const data = reactive({
      title: 'Multiple',
      msg: 'This is Multiple component .',
    })

    return {
      data
    }
  }
}
</script>