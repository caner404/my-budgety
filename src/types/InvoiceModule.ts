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
  items: Item[];
}

export enum InvoiceStatus {
  Paid = "Paid",
  Pending = "Pending",
  Draft = "Draft",
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
