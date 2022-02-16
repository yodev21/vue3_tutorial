	
<template>
    <button @click="modalOpen = true">
        bodyタグ直下にテレポート
    </button>
 
    <teleport to="body">
        <div v-if="modalOpen" class="modal">
            <div>
                モーダルの中身<br>
                {{ msg }}
                <button @click="modalOpen = false">
                    閉じる
                </button>
            </div>
        </div>
    </teleport>
</template>
 
<script>
    export default {
        name: "TeleportModal",
        props: {
            msg: String
        },
        data() {
            return {
                modalOpen: false
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
</style>