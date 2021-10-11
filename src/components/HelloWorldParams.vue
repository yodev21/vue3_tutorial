<template>
  <div class="alert alert-primary">
    <h1>{{data.title + ' [' + name + ']'}}</h1>
    <p>{{data.msg}}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'HelloWorldParams',
  props: {
    name: String,
  },
  setup(){
    const data = reactive({
      title: 'HelloWorldParams',
      msg: 'This is HelloWorld Params .',
    })

    return {
      data
    }
  }
}
</script>