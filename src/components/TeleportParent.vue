<template>
  <teleport to="body">
    <div class="container">
      <TeleportChild />
    </div>
  </teleport>
</template>
 
<script>
  import TeleportChild from "./TeleportChild";
 
  export default {
    name: "TeleportParent",
    components: {
      TeleportChild
    }
  }
</script>
 
<style scoped>
  .container {
    width: 300px;
    margin: auto;
    padding: 10px;
    background: darkgray;
    text-align: center;
    color: white;
  }
</style>