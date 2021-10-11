<template>
  <div id="app">
    <div>
      <router-link
        to="/"
        class="btn btn-primary mx-2">
        Go to Top
      </router-link>
      <router-link
        to="/jsx"
        class="btn btn-warning mx-2">
        Go to JSX
      </router-link>
      <router-link
        to="/multiple"
        class="btn btn-danger mx-2">
        Go to multiple
      </router-link>
      <router-link
        to="/params/Bob"
        class="btn btn-outline-primary mx-2">
        Go to params
      </router-link>
      <router-link
        :to="{name: 'params_object', params: {name: 'Alice'}}"
        class="btn btn-outline-warning mx-2">
        Go to params_object
      </router-link>
      <hr>
      <h5>default view</h5>
      <!-- routerオブジェクトで割り当ててあるコンポーネントを組み立てて表示 -->
      <router-view />

      <!-- 名前付きビューの利用 -->
      <router-view name="first"></router-view>
      <router-view name="second"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  created(){
    console.log("***** App Created! ******")
  },
  mounted(){
    console.log("----- App Mounted! -----")
  },
  data(){
    return {
      title: 'Router'
    }
  }
}
</script>
