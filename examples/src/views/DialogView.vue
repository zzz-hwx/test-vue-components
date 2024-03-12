<template>
  <div>
    <duyi-button class="btn" type="primary" @click="() => (visible1 = true)">对话框示例一</duyi-button>
    <duyi-button class="btn" type="success" @click="() => (visible2 = true)">对话框示例二</duyi-button>
    <duyi-button class="btn" type="warning" @click="() => (visible3 = true)">对话框示例三</duyi-button>
    <!-- 对话框 -->
    <duyi-dialog v-model:visible="visible1" @close="() => (visible1 = false)">
      这是一个基本的对话框
    </duyi-dialog>
    <duyi-dialog 
        v-model:visible="visible2" 
        title="温馨提示"
        width="30vw"
        top="40vh"
        @close="() => (visible2 = false)"
    >
      传递了 props 的对话框
    </duyi-dialog>
    <duyi-dialog v-model:visible="visible3" @close="closeDialog3">
      这是一个基本的对话框
      <template #footer>
        <duyi-button @click="closeDialog3">取消</duyi-button>
        <duyi-button type="primary" @click="closeDialog3">确定</duyi-button>
      </template>
    </duyi-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

function closeDialog3(){
    visible3.value = false;
}
</script>

<style scoped>
.btn{
    margin-right: 20px;
}
</style>
