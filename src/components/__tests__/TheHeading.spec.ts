import { describe, it, expect } from "vitest";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/router";
import { flushPromises, mount } from "@vue/test-utils";

import TheHeading from "@/components/TheHeading.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

describe("HelloWorld", async () => {
  it("renders properly", async () => {
    router.push("/");
    await router.isReady();
    const wrapper = mount(TheHeading, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.find("a").trigger("click");
    await flushPromises();

    expect(wrapper.findComponent({ name: "RouterLink" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "IconAvatar" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "IconMoon" }).exists()).toBe(true);
  });
});
