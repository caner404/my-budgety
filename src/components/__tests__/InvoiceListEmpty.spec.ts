import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
import { expect } from "vitest";
import InvoiceListEmpty from "@/components/InvoiceListEmpty.vue";

describe("InvoiceListEmpty.vue", () => {
  it("reners initial state", () => {
    const wrapper = mount(InvoiceListEmpty);

    expect(
      wrapper.findComponent({ name: "IconInvoiceEmpty" }).exists()
    ).toBeTruthy();
    expect(wrapper.text()).toContain("There is nothing here");
    expect(wrapper.text()).toContain(
      "Create an invoice by clicking the New button and get started"
    );
  });
});
