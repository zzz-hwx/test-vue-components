<template>
  <div class="duyi-pager">
    <!-- 首页 -->
    <a
      :class="currentPage === 1 ? 'disabled' : ''"
      @click.prevent="goToFirstPage"
      >首页</a
    >
    <!-- 上一页 -->
    <a
      class="duyi-icon-arrow-left"
      :class="currentPage === 1 ? 'disabled' : ''"
      @click.prevent="prevClick"
    ></a>
    <!-- 中间的页码 -->
    <!-- 中间的页码的渲染，需要有各种判断 -->
    <!-- 当前页比较靠前面： [1] 2 3 4 5 ... 20 -->
    <!-- 当前页比较靠中间： 1 ...4 5 [6] 7 8 ... 20 -->
    <!-- 当前页比较靠后面： 1 ... 17 18 [19] 20 -->
    <a
      v-if="total > pagerCount && currentPage > 5"
      @click.prevent="pageClick(1)"
      >1</a
    >
    <a v-if="total > pagerCount && currentPage > 5">...</a>
    <a
      v-for="page in pager"
      :key="page"
      :class="page === currentPage ? 'active' : ''"
      @click.prevent="pageClick(page)"
      >{{ page }}</a
    >
    <a v-if="total > pagerCount && currentPage < total - 4">...</a>
    <a
      v-if="total > pagerCount && currentPage < total - 4"
      @click.prevent="pageClick(total)"
      >{{ total }}</a
    >
    <!-- 下一页 -->
    <a
      class="duyi-icon-arrow-right"
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="nextClick"
    ></a>
    <!-- 尾页 -->
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="goToLastPage"
      >尾页</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { pagerProps } from "./pager";
export default defineComponent({
  name: "DuyiPager",
  props: pagerProps,
  emits: ["current-change"],
  setup(props, { emit }) {
    // 页码相关信息的计算属性
    const pager = computed(() => {
      // 要渲染的页码数量
      const renderPage: number[] = [];
      // 接下来就需要分情况来进行判断了
      // 可以全部渲染
      if (props.total <= props.pagerCount) {
        for (let i = 1; i <= props.total; i++) {
          renderPage.push(i);
        }
      } else {
        // 总页码数大于最大可渲染页码数，无法全部渲染，只能渲染一部分
        // 这里又根据当前页码分为三种情况：
        // 当前页比较靠前面： [1] 2 3 4 5 ... 20
        // 当前页比较靠中间： 1 ...4 5 [6] 7 8 ... 20
        // 当前页比较靠后面： 1 ... 17 18 [19] 20
        if (props.currentPage <= 5) {
          // 当前页比较靠前
          for (let i = 1; i <= 5; i++) {
            renderPage.push(i);
          }
        } else if (props.currentPage >= props.total - 4) {
          // 当前页比较靠后
          for (let i = props.total - 4; i <= props.total; i++) {
            renderPage.push(i);
          }
        } else {
          // 说明当前页比较靠中间
          for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
            renderPage.push(i);
          }
        }
      }

      return renderPage;
    });

    // 页码点击对应的事件处理函数
    // 无论是上一页，下一页、首页、尾页，具体页码，做的事情都是一样的
    // 触发父组件传递过来的 current-change，然后将当前最新的页码数传递过去
    const goToFirstPage = () => {
      emit("current-change", 1);
    };
    const goToLastPage = () => {
      emit("current-change", props.total);
    };
    const prevClick = () => {
      if (props.currentPage === 1) {
        return;
      }
      emit("current-change", props.currentPage - 1);
    };
    const nextClick = () => {
      if (props.currentPage === props.total) {
        return;
      }
      emit("current-change", props.currentPage + 1);
    };
    const pageClick = (page: number) => {
      emit("current-change", page);
    };
    return {
      pager,
      goToFirstPage,
      goToLastPage,
      prevClick,
      nextClick,
      pageClick,
    };
  },
});
</script>

<style scoped></style>
