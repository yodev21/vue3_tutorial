<template>
  <div class="alert alert-primary">
    <h1>{{data.title + ' [' + name + '] '}}</h1>
    <p>{{data.msg}}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Params',
  props: {
    name: String
  },
  setup(){
    const data = reactive({
      title: 'Params',
      msg: 'This is Params component .',
    })

    return {
      data
    }
  }
}
</script>