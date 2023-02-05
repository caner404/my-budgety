<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { computed } from "vue";

const store = useInvoiceStore();
const count = computed(() => {
  return store.getInvoicesCount;
});
const invoiceCountText = computed(() => {
  if (count.value <= 0) return `No invoices`;
  if (count.value === 1) return `1 invoice`;
  return `${count.value} invoices`;
});
</script>
<template>
  <div class="invoiceCount">
    <h2 class="invoice-heading">Invoices</h2>
    <p class="invoice-count" data-test="invoice-count">
      {{ invoiceCountText }}
    </p>
  </div>
</template>
<style scoped>
.invoiceCount {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.invoice-heading {
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: -0.625px;
  font-style: normal;
  font-weight: 700;
  color: var(--c-black);
}
.invoice-count {
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  color: var(--c-dark-violet);
}
</style>
