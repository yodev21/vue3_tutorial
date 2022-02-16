<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
  <TeleportModal msg="モーダルの内容" />
</template>
 
<script>
import TeleportModal from "./components/TeleportModal";
 
export default {
  name: 'App',
  components: {
    TeleportModal
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