<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { InvoiceStatus } from "@/types/InvoiceModule";
import { computed } from "vue";

const store = useInvoiceStore();
const count = computed(() => {
  return store.getInvoicesCount;
});
const status = computed(() => store.getInvoiceFilterStatus);
const invoiceCountTextMobile = computed(() => {
  if (count.value <= 0) return `No invoices`;
  if (count.value === 1) return `1 invoice`;
  return `${count.value} invoices`;
});
const invoiceCountTextLarge = computed(() => {
  let statusText = status.value;
  if (status.value.match(InvoiceStatus.NONE)) statusText = InvoiceStatus.TOTAL;
  if (count.value <= 0) return `There are no invoices`;
  if (count.value === 1)
    return `There is 1 ${statusText.toLowerCase()} invoice`;
  return `There are ${count.value} ${statusText.toLowerCase()} invoices`;
});
</script>
<template>
  <div class="invoiceCount">
    <h2 class="invoice-heading heading-mobile">Invoices</h2>
    <h1 class="invoice-heading heading-medium">Invoices</h1>
    <p class="invoice-count count-mobile" data-test="invoice-count">
      {{ invoiceCountTextMobile }}
    </p>
    <p class="invoice-count count-medium" data-test="invoice-count">
      {{ invoiceCountTextLarge }}
    </p>
  </div>
</template>
<style scoped>
.invoiceCount {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.heading-medium,
.count-medium {
  display: none;
}
.invoice-heading {
  color: var(--color-text-dark);
}
.invoice-count {
  color: var(--color-text-neutral-500);
}

@media screen and (min-width: 768px) {
  .heading-mobile,
  .count-mobile {
    display: none;
  }
  .heading-medium,
  .count-medium {
    display: block;
  }
}
</style>
