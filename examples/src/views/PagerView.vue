<template>
  <div>
    <p>总页数 total 大于页码最大显示数 pager-count，此时无法全部显示</p>
    <duyi-pager :total="20" :current-page="currentPage1" @current-change="changeHandle1"/>
    <p>总页码数 total 小于等于页码最大显示数 pager-count，可以全部显示</p>
    <duyi-pager :total="10" :current-page="currentPage2" @current-change="changeHandle2"/>
    <p>页码最大显示数 pager-count 是可以调整的</p>
    <duyi-pager :total="15" :current-page="currentPage3" :pager-count="15" @current-change="changeHandle3"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);

function changeHandle1(page:number){
    currentPage1.value = page;
}
function changeHandle2(page:number){
    currentPage2.value = page;
}
function changeHandle3(page:number){
    currentPage3.value = page;
}
</script>

<style scoped>
p{
    text-align: center;
}
</style>
