<script setup lang="ts">
import InvoiceStatus from "./InvoiceStatus.vue";
import InvoiceStatusActions from "./InvoiceStatusActions.vue";
import type { Invoice } from "@/types/InvoiceModule";
import type { PropType } from "vue";

defineProps({
  invoice: {
    type: Object as PropType<Invoice>,
    required: true,
  },
});
</script>
<template>
  <div class="invoice-status-container">
    <p class="invoice-status-text">Status</p>
    <InvoiceStatus :itemStatus="invoice?.status" class="invoiceStatus" />
    <InvoiceStatusActions :invoice="invoice" class="active" />
  </div>
</template>
<style scoped>
.invoice-status-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: var(--color-palette-white);
}
.invoice-status-container p {
  color: var(--color-text-neutral-700);
}
.active {
  display: none;
}

@media screen and (min-width: 768px) {
  .invoice-status-container {
    padding: 1.25rem 2.5rem;
  }
  .invoice-status-text {
    margin-right: 2rem;
  }

  .invoiceStatus {
    margin-right: auto;
  }
  .active {
    display: flex;
  }
}
</style>
