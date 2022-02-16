<template>
  <form ref="form">
    <div class="form-row">
      <label class="form-label">name</label>
      <input type="text">
    </div>
    <div class="form-row">
      <label class="form-label">email</label>
      <input type="email">
    </div>
    <div class="form-row">
      <button type="button" @click="modalOpen = true">
        送信
      </button>
    </div>
  </form>
 
  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        本当に送信しますか？
        <button @click="submitForm">
          はい
        </button>
        <button @click="modalOpen = false">
          いいえ
        </button>
      </div>
    </div>
  </teleport>
</template>
 
<script>
  export default {
    name: "TeleportChild",
    data() {
      return {
        modalOpen: false
      }
    },
    methods: {
      submitForm() {
        this.modalOpen = false
        this.$refs.form.submit();
      }
    }
  }
</script>
 
<style scoped>
  .modal {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
 
  .modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
 
  .form-row {
    margin: 10px;
  }
 
  .form-label {
    margin-right: 5px;
  }
</style>