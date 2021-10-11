<template>
  <div class="alert alert-primary">
    <h1>{{data.title + ' [' + name + '] '}}</h1>
    <p>{{data.msg}}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'ParamsObject',
  props: {
    name: String
  },
  setup(){
    const data = reactive({
      title: 'ParamsObject',
      msg: 'This is Params Object component .',
    })

    return {
      data
    }
  }
}
</script>