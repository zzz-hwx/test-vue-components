import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DuyiPager from "../src/pager.vue";

describe("测试Pager组件", () => {
  // 测试是否能够渲染正确的页码数量
  it("渲染正确的页码数量", async () => {
    const wrapper = mount(DuyiPager, {
      props: {
        currentPage: 1,
        total: 20,
      },
    });

    // 渲染结果 [首页][上一页][1][2][3][4][5][...][20][下一页][尾页]
    const pages = wrapper.findAll("a");
    expect(pages.length).toBe(11);

    // 设置当前页为第6页
    // 渲染结果为：
    // [首页][上一页][1][...][4][5][6][7][8][...][20][下一页][尾页]
    await wrapper.setProps({
      currentPage: 6,
    });
    const pages2 = wrapper.findAll("a");
    expect(pages2.length).toBe(13);
  });

  // 测试页码点击事件
  it("页码点击事件", async () => {
    // arrange
    const wrapper = mount(DuyiPager, {
      props: {
        currentPage: 5,
        total: 20,
      },
    });

    // action
    const prevClickBtn = wrapper.findAll("a")[1]; // 上一页按钮
    await prevClickBtn.trigger("click");

    // assert
    expect(wrapper.emitted()).toHaveProperty("current-change");
    expect(wrapper.emitted()["current-change"][0]).toEqual([4]);

    // action
    const secondPageClickBtn = wrapper.findAll("a")[3]; // 第二页按钮
    await secondPageClickBtn.trigger("click");

    // assert
    expect(wrapper.emitted()["current-change"][1]).toEqual([2]);

    // action
    const fivePageClickBtn = wrapper.findAll("a")[6]; // 第五页按钮
    await fivePageClickBtn.trigger("click");

    // assert
    expect(wrapper.emitted()["current-change"][2]).toEqual([5]);
  });

  // 测试页码边界是否正常
  it("页码边界是否正常", async () => {
    // arrange
    const wrapper = mount(DuyiPager, {
      props: {
        currentPage: 1,
        total: 20,
      },
    });

    expect(wrapper.find("a.duyi-icon-arrow-left").classes()).toContain(
      "disabled"
    );
    expect(wrapper.findAll("a")[0].classes()).toContain("disabled");

    expect(wrapper.find("a.duyi-icon-arrow-right").classes()).not.toContain(
      "disabled"
    );

    await wrapper.setProps({
      currentPage: 20,
    });

    expect(wrapper.find("a.duyi-icon-arrow-right").classes()).toContain(
      "disabled"
    );
    expect(wrapper.find("a.duyi-icon-arrow-left").classes()).not.toContain(
      "disabled"
    );
  });
});
