import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TheHeading from "@/components/TheHeading.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(TheHeading);
    expect(wrapper.findComponent({ name: "IconLogo" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "IconAvatar" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "IconMoon" }).exists()).toBe(true);
  });
});
