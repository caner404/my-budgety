import { describe, it, expect, vi, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useInvoiceStore } from "@/stores/invoice";
import { InvoiceStatus, type Invoice } from "@/types/InvoiceModule";
import {
  createInvoiceData,
  createInvoiceFilterData,
} from "@/stores/__tests__/invoiceHelper";
import { createRouter, createWebHashHistory, type Router } from "vue-router";
import { routes } from "@/router";

import { shallowMount } from "@vue/test-utils";
import TheMain from "@/components/TheMain.vue";

describe("TheMain.vue", () => {
  let router: Router;
  beforeEach(async () => {
    router = createRouter({
      history: createWebHashHistory(),
      routes: routes,
    });
  });
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
          router,
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
  it("renders no invoices => InvoiceListEmpty Component is shown", () => {
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
          router,
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
  it("renders properly the List of invoices no filter active", () => {
    let invoiceArr: Invoice[] = createInvoiceFilterData();
    const wrapper = shallowMount(TheMain, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              invoice: {
                invoiceData: invoiceArr,
                invoiceFilterStatus: InvoiceStatus.NONE,
              },
            },
          }),
          router,
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
  it("renders properly the List of invoices with active filter", () => {
    let invoiceArr: Invoice[] = createInvoiceFilterData();
    const wrapper = shallowMount(TheMain, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              invoice: {
                invoiceData: invoiceArr,
                invoiceFilterStatus: InvoiceStatus.Draft,
              },
            },
          }),
          router,
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
