<script setup lang="ts">
import InvoiceListItem from "@/components/InvoiceListItem.vue";
import type { PropType } from "vue";
import type * as InvoiceModule from "@/types/InvoiceModule";

const props = defineProps({
  invoices: {
    type: Array as PropType<InvoiceModule.Invoice[]>,
    required: true,
  },
});
</script>
<template>
  <ul class="invoice-list">
    <InvoiceListItem
      v-for="invoice in invoices"
      :item="invoice"
      :key="invoice.id"
    />
  </ul>
</template>
<style scoped>
.invoice-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
}
</style>
