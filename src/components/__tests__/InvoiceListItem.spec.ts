import { mount, VueWrapper } from "@vue/test-utils";
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import InvoiceListItemVue from "../InvoiceListItem.vue";
import * as InvoiceModule from "@/types/InvoiceModule";

describe("InvoiceListItem.vue", () => {
  let wrapper: VueWrapper;
  let invoice: InvoiceModule.Invoice;

  beforeEach(() => {
    invoice = {
      id: "RT3080",
      createdAt: "2021-08-18",
      paymentDue: "2021-08-19",
      description: "Re-branding",
      paymentTerms: 1,
      clientName: "Jensen Huang",
      clientEmail: "jensenh@mail.com",
      status: InvoiceModule.InvoiceStatus.Paid,
      clientAddress: {
        street: "106 Kendell Street",
        city: "Sharrington",
        postCode: "NR24 5WQ",
        country: "United Kingdom",
      },
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      items: [
        {
          name: "Brand Guidelines",
          quantity: 1,
          price: 1800.9,
          total: 1800.9,
        },
      ],
      total: 1800.9,
    };

    wrapper = mount(InvoiceListItemVue, {
      props: {
        item: invoice,
      },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it("displays an invoice with paid status", () => {
    displayInvoice();
    expect(wrapper.find('[data-test="status-text"').text()).toMatch("Paid");
    expect(wrapper.find(".invoice-status").classes()).toContain("paid");
  });

  it("displays an invoice with pending status", () => {
    let pendingInvoice = invoice;
    pendingInvoice.status = InvoiceModule.InvoiceStatus.Pending;

    wrapper = mount(InvoiceListItemVue, {
      props: {
        item: pendingInvoice,
      },
    });
    displayInvoice();
    expect(wrapper.find('[data-test="status-text"').text()).toMatch("Pending");
    expect(wrapper.find(".invoice-status").classes()).toContain("pending");
  });

  it("displays an invoice with draft status", () => {
    let pendingInvoice = invoice;
    pendingInvoice.status = InvoiceModule.InvoiceStatus.Draft;

    wrapper = mount(InvoiceListItemVue, {
      props: {
        item: pendingInvoice,
      },
    });
    displayInvoice();
    expect(wrapper.find('[data-test="status-text"').text()).toMatch("Draft");
    expect(wrapper.find(".invoice-status").classes()).toContain("draft");
  });

  function displayInvoice() {
    expect(wrapper.find('[data-test="id"').text()).toBe("#RT3080");
    expect(wrapper.find('[data-test="clientName"').text()).toMatch(
      "Jensen Huang"
    );
    expect(wrapper.find('[data-test="paymentDue"').text()).toMatch(
      "Due 2021-08-19"
    );
    // \u20AC = Euro
    expect(wrapper.find('[data-test="total"').text()).toBe(`\u20AC1800.9`);
  }
});
