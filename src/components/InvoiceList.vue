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
    <router-link
      v-for="invoice in invoices"
      :key="invoice.id"
      :to="{ name: 'InvoicesShow', params: { id: invoice.id } }"
      custom
      v-slot="{ navigate }"
    >
      <InvoiceListItem :item="invoice" @click="navigate" role="router-link" />
    </router-link>
  </ul>
</template>
<style scoped>
.invoice-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.9rem;
}
</style>
