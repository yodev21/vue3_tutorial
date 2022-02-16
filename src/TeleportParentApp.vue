<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
  <TeleportParent />
</template>
 
<script>
import TeleportParent from "./components/TeleportParent";
 
export default {
  name: 'App',
  components: {
    TeleportParent
  }
}
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>