import { describe, expect, it, beforeEach } from "vitest";
import { setActivePinia, createPinia, type Store } from "pinia";
import { useInvoiceStore } from "../invoice";
import { InvoiceStatus, type Invoice } from "@/types/InvoiceModule";
import {
  createInvoiceData,
  createInvoiceFilterData,
} from "@/stores/__tests__/invoiceHelper";

describe("Data store invoice tests", () => {
  let store: any = null;
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useInvoiceStore();
  });
  it("initializes with zero invoices", () => {
    expect(store.getInvoices.length).toBe(0);
  });
  it("calculateStatus give with 'Paid' Status", () => {
    let expectedStatus = "Paid";
    const receivedStatus = store.calculateStatus("paid");
    expect(receivedStatus).toEqual(expectedStatus);
  });
  it("calculateStatus give with 'Pending' Status", () => {
    let expectedStatus = "Pending";
    const receivedStatus = store.calculateStatus("pending");
    expect(receivedStatus).toEqual(expectedStatus);
  });
  it("calculateStatus give with 'Draft' Status", () => {
    let expectedStatus = "Draft";
    const receivedStatus = store.calculateStatus("draft");
    expect(receivedStatus).toEqual(expectedStatus);
  });
  it("loadInvoices from json", () => {
    let invoiceJson: Invoice[] = createInvoiceData();
    store.loadInvoices(invoiceJson);
    expect(store.invoiceData.length).toBe(3);
    expect(store.invoiceData[0].status).toBe(InvoiceStatus.Paid);
    expect(store.invoiceData[1].status).toBe(InvoiceStatus.Pending);
    expect(store.invoiceData[2].status).toBe(InvoiceStatus.Draft);
  });
  it("loadInvoices but json File is empty or not defined", () => {
    let invoiceJson: Invoice[] = [];
    store.loadInvoices(invoiceJson);

    expect(store.invoiceData.length).toBe(0);
  });
});

describe("Invoice store testing filterInvoiceByStatus function", () => {
  let store: any = null;
  let invoiceJson: Invoice[] = createInvoiceFilterData();
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useInvoiceStore();
    store.loadInvoices(invoiceJson);
  });
  it("filterInvoice with Draft status", () => {
    let invoiceStatus: InvoiceStatus = InvoiceStatus.Draft;
    let filterInvoice: Boolean = true;

    store.filterInvoiceByStatus(invoiceStatus, filterInvoice);

    expect(store.getInvoicesByStatus.length).toBe(1);
    expect(store.getInvoicesByStatus[0].status).toBe(InvoiceStatus.Draft);
  });
  it("filterInvoice with Pending status", () => {
    let invoiceStatus: InvoiceStatus = InvoiceStatus.Pending;
    let filterInvoice: Boolean = true;

    store.filterInvoiceByStatus(invoiceStatus, filterInvoice);

    expect(store.getInvoicesByStatus.length).toBe(1);
    expect(store.getInvoicesByStatus[0].status).toBe(InvoiceStatus.Pending);
  });
  it("filterInvoice with Paid status", () => {
    let invoiceStatus: InvoiceStatus = InvoiceStatus.Paid;
    let filterInvoice: Boolean = true;

    store.filterInvoiceByStatus(invoiceStatus, filterInvoice);

    expect(store.getInvoicesByStatus.length).toBe(1);
    expect(store.getInvoicesByStatus[0].status).toBe(InvoiceStatus.Paid);
  });
  it("filterInvoice with no filter active => select All", () => {
    let invoiceStatus: InvoiceStatus = InvoiceStatus.Paid;
    let filterInvoice: Boolean = false;

    store.filterInvoiceByStatus(invoiceStatus, filterInvoice);

    expect(store.getInvoicesByStatus.length).toBe(3);
    expect(store.getInvoiceFilterStatus).toBe(InvoiceStatus.NONE);
  });
  it("return invoiceFilterCount with active InvoiceStatus", () => {
    store.invoiceFilterStatus = InvoiceStatus.Paid;
    store.invoiceDataByStatus = [createInvoiceFilterData()[0]];
    let invoiceFilterCount: number = store.getInvoicesCount;
    expect(invoiceFilterCount).toBe(1);
  });
});
