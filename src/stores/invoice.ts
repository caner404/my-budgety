import { defineStore } from "pinia";
import * as InvoiceModule from "@/types/InvoiceModule";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoiceData: [] as InvoiceModule.Invoice[],
    invoiceDataByStatus: [] as InvoiceModule.Invoice[],
    invoiceFilterStatus: InvoiceModule.InvoiceStatus.NONE,
  }),

  getters: {
    getInvoices: (state) => {
      return state.invoiceData;
    },
    getInvoicesCount(state): number {
      if (this.isInvoiceFilterStatusActive) {
        return state.invoiceDataByStatus.length;
      }
      return state.invoiceData.length;
    },
    isInvoicesEmpty: (state) => {
      return state.invoiceData.length <= 0;
    },
    isInvoiceFilterStatusActive: (state) => {
      return state.invoiceFilterStatus !== InvoiceModule.InvoiceStatus.NONE;
    },
    getInvoicesByStatus: (state) => {
      return state.invoiceDataByStatus;
    },
    getInvoiceFilterStatus: (state) => {
      return state.invoiceFilterStatus;
    },
  },

  actions: {
    calculateStatus(responseStatus: String): InvoiceModule.InvoiceStatus {
      if (responseStatus.toLowerCase() === "paid")
        return InvoiceModule.InvoiceStatus.Paid;
      if (responseStatus.toLowerCase() === "pending")
        return InvoiceModule.InvoiceStatus.Pending;
      return InvoiceModule.InvoiceStatus.Draft;
    },

    loadInvoices(invoiceJson: InvoiceModule.Invoice[]) {
      if (invoiceJson?.length > 0) {
        this.invoiceData = invoiceJson;
        this.invoiceData.forEach(
          (invoice) => (invoice.status = this.calculateStatus(invoice.status))
        );
      } else {
        console.log(`InvoiceContainer is empty or not defined`);
      }
    },
    filterInvoiceByStatus(
      invoiceStatus: InvoiceModule.InvoiceStatus,
      withFilter: Boolean
    ): InvoiceModule.Invoice[] {
      if (withFilter) {
        this.invoiceFilterStatus = invoiceStatus;
      } else {
        this.invoiceFilterStatus = InvoiceModule.InvoiceStatus.NONE;
      }

      this.invoiceDataByStatus = [];
      if (this.invoiceFilterStatus !== InvoiceModule.InvoiceStatus.NONE) {
        let filterResult = this.invoiceData.filter((invoice) => {
          return invoice.status === this.invoiceFilterStatus;
        });
        filterResult.forEach((result) => this.invoiceDataByStatus.push(result));
      } else {
        this.invoiceDataByStatus = this.invoiceData;
      }
      return this.invoiceDataByStatus;
    },
  },
});
