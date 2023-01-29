import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useInvoiceStore } from "@/stores/invoice";
import { InvoiceStatus, type Invoice } from "@/types/InvoiceModule";
import {
  createInvoiceData,
  createInvoiceFilterData,
} from "@/stores/__tests__/invoiceHelper";

import { shallowMount } from "@vue/test-utils";
import TheMain from "@/components/TheMain.vue";

describe("TheMain.vue", () => {
  it("renders properly the List of invoices", () => {
    let invoiceArr: Invoice[] = createInvoiceData();
    const wrapper = shallowMount(TheMain, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              invoice: {
                invoiceData: invoiceArr as Invoice[],
              },
            },
          }),
        ],
      },
    });
    const store = useInvoiceStore();
    expect(store.loadInvoices).toHaveBeenCalledOnce();
    expect(wrapper.findComponent({ name: "InvoiceList" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "InvoiceListEmpty" }).exists()).toBe(
      false
    );
  });
  it("renders properly the List of invoices", () => {
    let invoiceArr: Invoice[] = [];
    const wrapper = shallowMount(TheMain, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              invoice: {
                invoiceData: invoiceArr,
              },
            },
          }),
        ],
      },
    });
    const store = useInvoiceStore();
    expect(store.loadInvoices).toHaveBeenCalledOnce();
    expect(wrapper.findComponent({ name: "InvoiceList" }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: "InvoiceListEmpty" }).exists()).toBe(
      true
    );
  });
  it("renders properly the List of invoices by filter", () => {
    let invoiceArr: Invoice[] = createInvoiceFilterData();
    const wrapper = shallowMount(TheMain, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              invoice: {
                invoiceData: invoiceArr,
                invoiceFilterArr: new Set([
                  InvoiceStatus.Draft,
                  InvoiceStatus.Paid,
                  InvoiceStatus.Pending,
                ]),
              },
            },
          }),
        ],
      },
    });
    const store = useInvoiceStore();

    expect(store.loadInvoices).toHaveBeenCalledOnce();
    expect(wrapper.findComponent({ name: "InvoiceList" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "InvoiceListEmpty" }).exists()).toBe(
      false
    );
  });
});
