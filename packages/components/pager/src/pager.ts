// 负责 pager 这个组件的属性

import type { ExtractPropTypes } from "vue";

// pager 对应的属性
export const pagerProps = {
  // 总页码数
  total: {
    type: Number,
    default: 0,
  },
  // 当前页码数
  currentPage: {
    type: Number,
    default: 1,
  },
  // 页码最大能够显示的数量
  pagerCount: {
    type: Number,
    default: 10,
  },
};

export type PagerProps = ExtractPropTypes<typeof pagerProps>;
