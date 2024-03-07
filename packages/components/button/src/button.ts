// 该文件用于定义 button 的 props 属性
// 将 props 定义为 button 的类型
// ExtractPropTypes 是 vue3 所提供的一个工具类型
// 用于从 vue 组件的 props 对象中提取 ts 类型
import type { ExtractPropTypes } from "vue";

// 定义 props
export const buttonProps = {
  type: {
    type: String,
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
