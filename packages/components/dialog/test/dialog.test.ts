// 引入需要的库
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Dialog from "../src/dialog.vue";

describe("测试Dialog组件", () => {
  // 一个一个的测试用例

  // 测试标题
  it("测试标题", () => {
    const title = "自定义标题";
    const wrapper = mount(Dialog, {
      props: {
        title,
      },
    });
    expect(wrapper.find(".duyi-dialog_title").text()).toBe(title);
  });

  // 测试宽度
  it("测试宽度", () => {
    const width = "60%";
    const wrapper = mount(Dialog, {
      props: {
        width,
      },
    });
    expect(wrapper.find(".duyi-dialog").attributes("style")).toContain(
      `width: ${width}`
    );
  });

  // 测试顶部距离
  it("测试顶部距离", () => {
    const top = "20vh";
    const wrapper = mount(Dialog, {
      props: {
        top,
      },
    });
    expect(wrapper.find(".duyi-dialog").attributes("style")).toContain(
      `margin-top: ${top}`
    );
  });

  // 测试插槽
  it("测试插槽", () => {
    const titleSlot = "这是标题插槽内容";
    const footerSlot = "这是底部插槽内容";
    const wrapper = mount(Dialog, {
      props: {
        title: titleSlot,
      },
      slots: {
        footer: footerSlot,
      },
    });
    expect(wrapper.find(".duyi-dialog_title").text()).toBe(titleSlot);
    expect(wrapper.find(".duyi-dialog_footer").text()).toBe(footerSlot);
  });

  // 测试事件
  it("测试事件", async () => {
    // arrange 准备
    const wrapper = mount(Dialog, {
      props: {
        visiable: true,
      },
    });

    // action 操作
    const btn = wrapper.find(".duyi-dialog_headerbtn");
    await btn.trigger("click");

    // assert 断言
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
