import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import InvoiceList from "@/components/InvoiceList.vue";
import * as InvoiceModule from "@/types/InvoiceModule";

describe("InvoiceList.vue", () => {
  const invoicesData: InvoiceModule.Invoice[] = createInvoiceData();

  it("display no invoices", () => {
    const wrapper = mount(InvoiceList, {
      global: {
        stubs: ["router-link"],
      },
      props: {
        invoices: [],
      },
    });
    expect(wrapper.findAll("router-link-stub").length).toBe(0);
  });
  it("display invoices", async () => {
    const wrapper = mount(InvoiceList, {
      global: {
        stubs: ["router-link"],
      },
      props: {
        invoices: invoicesData,
      },
    });
    expect(wrapper.findAll("router-link-stub").length).toBe(
      invoicesData.length
    );
  });
});

function createInvoiceData(): InvoiceModule.Invoice[] {
  const invoiceData: InvoiceModule.Invoice[] = [];
  let invoice1: InvoiceModule.Invoice = {
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
  let invoice2: InvoiceModule.Invoice = {
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
  invoiceData.push(invoice1);
  invoiceData.push(invoice2);
  return invoiceData;
}
