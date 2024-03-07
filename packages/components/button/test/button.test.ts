// 该文件用于书写测试用例

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";

describe("测试 Button 组件", () => {
  // 一个一个的测试用例

  it("渲染按钮的时候有默认type", () => {
    // 准备工作
    const wrapper = mount(Button);
    // 断言
    expect(wrapper.classes()).toContain("duyi-button");
    expect(wrapper.classes()).toContain("duyi-button-default");
  });

  it("渲染按钮有正确的属性", () => {
    // 准备工作
    const wrapper = mount(Button, {
      props: {
        type: "primary",
      },
    });
    // 断言
    expect(wrapper.classes()).toContain("duyi-button");
    expect(wrapper.classes()).toContain("duyi-button-primary");
  });

  it("渲染plain类型的按钮", () => {
    // 准备工作
    const wrapper = mount(Button, {
      props: {
        plain: true,
      },
    });
    // 断言
    expect(wrapper.classes()).toContain("is-plain");
  });

  it("渲染round类型的按钮", () => {
    const wrapper = mount(Button, { props: { round: true } });
    expect(wrapper.classes()).toContain("is-round");
  });

  it("渲染circle类型按钮", () => {
    const wrapper = mount(Button, { props: { circle: true } });
    expect(wrapper.classes()).toContain("is-circle");
  });

  it("渲染disabled类型按钮", () => {
    const wrapper = mount(Button, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.attributes()).toHaveProperty("disabled");
  });

  it("渲染icon类型的按钮", () => {
    const wrapper = mount(Button, { props: { icon: "home" } });
    expect(wrapper.find("i").classes()).toContain("duyi-icon-home");
  });

  it("测试 slot 插槽是否正常工作", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "点击我",
      },
    });
    expect(wrapper.text()).toContain("点击我");
  });

  // 测试事件是否工作正常
  it("测试按钮事件", async ()=>{
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
