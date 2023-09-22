<script setup lang="ts">
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import type * as InvoiceModule from "@/types/InvoiceModule";
import type { PropType } from "vue";
import InvoiceStatus from "./InvoiceStatus.vue";
const props = defineProps({
  item: {
    type: Object as PropType<InvoiceModule.Invoice>,
    required: true,
  },
});
</script>
<template>
  <li class="invoice-item" data-test="invoice">
    <h4 data-test="id" class="invoice-id"><span>#</span>{{ item.id }}</h4>
    <p data-test="clientName" class="invoice-name">{{ item.clientName }}</p>
    <div class="payment-terms">
      <p data-test="paymentDue" class="invoice-date">Due {{ item.paymentDue }}</p>
      <h3 data-test="total" class="invoice-total"><span>&euro;</span>{{ item.total }}</h3>
    </div>
    <InvoiceStatus :itemStatus="item.status" class="invoice-status" />
    <IconArrowRight class="invoice-arrow" />
  </li>
</template>
<style scoped>
span {
  margin-right: 0.2rem;
}

.invoice-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;

  cursor: pointer;
  padding: 1.125rem;
  box-shadow: 0px 1rem 1rem -1rem rgba(72, 84, 159, 0.1);
  border-radius: 0.8rem;
  border: 1px solid var(--color-palette-white);
  background: var(--color-background-white);
}
.payment-terms {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.invoice-item:hover,
.invoice-item:hover {
  border: 1px solid var(--color-border-primary);
}

.invoice-id span,
.invoice-name {
  color: var(--color-text-neutral-700);
}
.invoice-name {
  text-align: right;
}
.invoice-date {
  color: var(--color-text-neutral-500);
}
.invoice-total {
  color: var(--color-text-dark);
}
.invoice-id {
  color: var(--color-text-dark);
}
.invoice-arrow {
  display: none;
}
@media screen and (min-width: 768px) {
  .invoice-item {
    display: grid;
    grid-template-columns: repeat(5, 1fr) 2rem;
    gap: 1.5rem;
    padding: 1rem 2rem;
  }

  .payment-terms {
    /* element children become direct children of element parent, ignoring element itself*/
    display: contents;
  }
  .invoice-id {
    order: 1;
  }
  .invoice-date {
    order: 2;
  }
  .invoice-name {
    text-align: left;
    order: 3;
  }
  .invoice-total {
    order: 4;
  }
  .invoice-status {
    order: 5;
  }
  .invoice-arrow {
    display: inline;
    order: 6;
  }
}
</style>
