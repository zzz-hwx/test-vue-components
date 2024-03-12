<template>
  <transition name="dialog-fade">
    <!-- 控制对话框是否显示，根据外部所传递的 visible 这个 prop -->
    <div v-show="visible" class="duyi-dialog_wrapper">
      <!-- 控制对话框的宽度以及上面的距离 -->
      <div class="duyi-dialog" :style="{ width: width, marginTop: top }">
        <!-- 头部 -->
        <div class="duyi-dialog_header">
          <slot name="title">
            <span class="duyi-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="duyi-dialog_headerbtn" @click="clickHandle">
            <i class="duyi-icon-close"></i>
          </button>
        </div>
        <!-- 中间内容部分 -->
        <div class="duyi-dialog_body">
          <slot></slot>
        </div>
        <!-- 底部部分 -->
        <div class="duyi-dialog_footer">
          <slot v-if="$slots.footer" name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { dialogProps } from "./dialog";
export default defineComponent({
  name: "DuyiDialog",
  props: dialogProps,
  emits: ["close"],
  setup(_, { emit }) {
    function clickHandle() {
      emit("close");
    }
    return {
      clickHandle,
    };
  },
});
</script>

<style scoped></style>
