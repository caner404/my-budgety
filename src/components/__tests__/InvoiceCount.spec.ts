import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import TheInvoiceCount from "@/components/InvoiceCount.vue";
import { createTestingPinia } from "@pinia/testing";
import { useInvoiceStore } from "@/stores/invoice";
import type { Invoice } from "@/types/InvoiceModule";
import { createInvoiceData } from "@/stores/__tests__/invoiceHelper";

describe("InvoiceCount.vue", () => {
  it("show no invoices", () => {
    let invoiceArr: Invoice[] = [];
    const wrapper = mount(TheInvoiceCount, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              createSpy: vi.fn,
              invoice: {
                invoiceData: invoiceArr,
              },
            },
          }),
        ],
      },
    });
    const store = useInvoiceStore();
    expect(wrapper.find('[data-test="invoice-count"').text()).toMatch(
      "No invoices"
    );
  });
  it("show exactly one invoice", () => {
    let invoiceArr: Invoice[] = [createInvoiceData()[0]];
    const wrapper = mount(TheInvoiceCount, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              createSpy: vi.fn,
              invoice: {
                invoiceData: invoiceArr,
              },
            },
          }),
        ],
      },
    });
    const store = useInvoiceStore();
    expect(wrapper.find('[data-test="invoice-count"').text()).toMatch(
      "1 invoice"
    );
  });
  it("show more then one invoice", () => {
    let invoiceArr: Invoice[] = createInvoiceData();
    const wrapper = mount(TheInvoiceCount, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              createSpy: vi.fn,
              invoice: {
                invoiceData: invoiceArr,
              },
            },
          }),
        ],
      },
    });
    const store = useInvoiceStore();
    expect(wrapper.find('[data-test="invoice-count"').text()).toMatch(
      `${store.invoiceData.length} invoices`
    );
  });
});
