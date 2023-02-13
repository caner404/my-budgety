<script setup lang="ts">
import type { Invoice } from "@/types/InvoiceModule";
import type { PropType } from "vue";
import InvoiceItem from "@/components/InvoiceItem.vue";

const props = defineProps({
  invoice: {
    type: Object as PropType<Invoice>,
    required: true,
  },
});
const invoiceItems = props.invoice.items;
const itemsTotalPrice = props.invoice.items.reduce(
  (accu, curr) => accu + curr.total,
  0
);
</script>
<template>
  <div class="invoice-details">
    <div class="subheading">
      <h4 class="id"><span class="id-route">#</span>{{ invoice.id }}</h4>
      <p>{{ invoice.description }}</p>
    </div>
    <div class="senderAddress">
      <p>{{ invoice.senderAddress.street }}</p>
      <p>{{ invoice.senderAddress.city }}</p>
      <p>{{ invoice.senderAddress.postCode }}</p>
      <p>{{ invoice.senderAddress.country }}</p>
    </div>
    <div class="invoice-grid">
      <div class="dates">
        <div class="invoice-created">
          <p class="mg-bottom-tiny">Invoice Date</p>
          <h3>{{ invoice.createdAt }}</h3>
        </div>
        <div class="invoice-due">
          <p class="mg-bottom-tiny">Payment Due</p>
          <h3>{{ invoice.paymentDue }}</h3>
        </div>
      </div>
      <div class="person-details">
        <div class="client-name">
          <p class="mg-bottom-tiny">Bill to</p>
          <h3>{{ invoice.clientName }}</h3>
        </div>
        <div class="client-address">
          <p>{{ invoice.clientAddress.street }}</p>
          <p>{{ invoice.clientAddress.city }}</p>
          <p>{{ invoice.clientAddress.postCode }}</p>
          <p>{{ invoice.clientAddress.country }}</p>
        </div>
      </div>
    </div>
    <div class="clientEmail">
      <p>Sent to</p>
      <h3>{{ invoice.clientEmail }}</h3>
    </div>
    <div class="item-listings">
      <div class="items">
        <InvoiceItem v-for="item in invoiceItems" :item="item" />
      </div>
      <div class="grand-total">
        <h5>Grand Total</h5>
        <p>&euro;{{ itemsTotalPrice }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.id-route,
p {
  color: var(--color-text-neutral-700);
}

.invoice-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--color-background-white);
}
.mg-bottom-tiny {
  margin-bottom: 0.5rem;
}
.invoice-grid {
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
}
.dates,
.person-details {
  flex: 1;
}
.dates {
  gap: 1.5rem;
}
.person-details,
.dates {
  display: flex;
  flex-direction: column;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-background-neutral);
  padding: 3rem;
  border-radius: 0.8rem 0.8rem 0px 0px;
}

.grand-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background-color: var(--color-background-secondary);
  border-radius: 0rem 0rem 0.8rem 0.8rem;
}
.grand-total h5 {
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.8rem;
  letter-spacing: -0.22px;
  color: var(--color-palette-white);
}
.grand-total p {
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.2rem;
  text-align: right;
  letter-spacing: -0.41px;
  color: var(--color-palette-white);
}
</style>
