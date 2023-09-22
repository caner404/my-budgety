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
const itemsTotalPrice = props.invoice.items.reduce((accu, curr) => accu + curr.total, 0);
</script>
<template>
  <div class="invoice-details">
    <div class="invoice-contact-info">
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
    </div>

    <div class="item-listings">
      <div class="items">
        <div class="items-heading">
          <p>Item name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p class="items-heading-total">Total</p>
        </div>
        <InvoiceItem v-for="item in invoiceItems" :item="item" class="item" />
      </div>
      <div class="grand-total">
        <h5>Grand Total</h5>
        <p class="grand-total-price">&euro;{{ itemsTotalPrice }}</p>
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
  gap: 1.25rem;
  padding: 1.25rem;
  background-color: var(--color-background-white);
}
.invoice-contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
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
  gap: 0.9rem;
}
.person-details,
.dates {
  display: flex;
  flex-direction: column;
}

.item-listings {
  background-color: var(--color-background-neutral);
}
.items {
  padding: 1.875rem;
  border-radius: 0.8rem 0.8rem 0px 0px;
}
.items-heading {
  display: none;
}
.items > *:not(:last-child) {
  margin-bottom: 1rem;
}

.grand-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.875rem;
  background-color: var(--color-background-secondary);
  border-radius: 0rem 0rem 0.8rem 0.8rem;
}
.grand-total h5 {
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.125rem;
  letter-spacing: -0.22px;
  color: var(--color-palette-white);
}
.grand-total p {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.125rem;
  text-align: right;
  letter-spacing: -0.41px;
  color: var(--color-palette-white);
}

@media screen and (min-width: 768px) {
  .invoice-contact-info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .subheading {
    grid-row: 1;
    grid-column: 1 / span 3;
  }
  .senderAddress {
    grid-row: 1;
    grid-column: 4;
    justify-self: end;
    text-align: right;
  }
  .invoice-grid {
    display: contents;
    grid-row: 2;
    grid-column: 1 / span 2;
  }
  .clientEmail {
    grid-row: 2;
    grid-column: 3 / 5;
  }

  .item,
  .items-heading {
    display: contents;
  }
  .items,
  .grand-total {
    display: grid;
    grid-template-columns: 50% repeat(3, 1fr);
    gap: 2rem;
  }
  .items-heading {
    grid-row: 1;
  }

  .item {
    grid-row: 2;
  }

  .grand-total {
    grid-row: 3;
  }
  .grand-total p {
    grid-column: 4;
    justify-self: center;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
}
</style>
