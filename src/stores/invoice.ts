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
    getInvoiceById: (state) => {
      return (invoiceId: String | String[]): InvoiceModule.Invoice => {
        if (Array.isArray(invoiceId)) invoiceId.toString();
        return state.invoiceData.find((invoice) => invoice.id === invoiceId)!;
      };
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
    formateDate(invoiceDate: string): string {
      let options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "2-digit",
      };
      const paymentDate = new Date(invoiceDate);
      const dateTime = new Intl.DateTimeFormat("default", options).format(
        paymentDate
      );
      return dateTime;
    },
    loadInvoices(invoiceJson: InvoiceModule.Invoice[]) {
      if (this.invoiceData?.length <= 0) {
        this.invoiceData = invoiceJson;
        this.invoiceData.forEach((invoice) => {
          invoice.status = this.calculateStatus(invoice.status);
          invoice.createdAt = this.formateDate(invoice.createdAt);
          invoice.paymentDue = this.formateDate(invoice.paymentDue);
        });
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
    getNewInvoice(): InvoiceModule.Invoice {
      console.log(`Create new Invoice`);
      return {
        id: "",
        createdAt: "",
        paymentDue: "",
        description: "",
        paymentTerms: 0,
        status: InvoiceModule.InvoiceStatus.Draft,
        total: 0,
        clientName: "",
        clientEmail: "",
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        senderAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [],
      };
    },
  },
});
