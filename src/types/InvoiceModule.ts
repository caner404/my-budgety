export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  status: InvoiceStatus;
  total: number;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
  senderAddress: Address;
  items: InvoiceItem[];
}

export enum InvoiceStatus {
  Paid = "Paid",
  Pending = "Pending",
  Draft = "Draft",
  NONE = "None",
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
