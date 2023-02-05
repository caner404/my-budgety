<script setup lang="ts">
import type { PropType } from "vue";
import type * as InvoiceModule from "@/types/InvoiceModule";
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
    <div class="invoice-payment">
      <p data-test="paymentDue" class="invoice-date">
        Due {{ item.paymentDue }}
      </p>

      <h3 data-test="total" class="invoice-total">
        <span>&euro;</span>{{ item.total }}
      </h3>
    </div>
    <InvoiceStatus :itemStatus="item.status" />
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
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0px 1rem 1rem -1rem rgba(72, 84, 159, 0.1);
  border-radius: 0.8rem;
  cursor: pointer;
}
.invoice-id span,
.invoice-name {
  color: var(--c-violet);
}
.invoice-name {
  text-align: right;
}
.invoice-date {
  color: var(--c-dark-violet);
}
.invoice-status {
  justify-self: end;
}
.invoice-total {
  color: var(--c-black);
}
</style>
