import type { ExtractPropTypes } from "vue";

export const dialogProps = {
  // 对话框的标题
  title: {
    type: String,
    default: "提示",
  },
  // 对话框的宽度
  width: {
    type: String,
    default: "50%",
  },
  // 对话框距离上面的高度
  top: {
    type: String,
    default: "15vh",
  },
  // 是否可见
  visible: {
    type: Boolean,
    default: false,
  },
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;
