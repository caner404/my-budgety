<script setup lang="ts">
import InvoiceFilterItem from "./InvoiceFilterItem.vue";
import { InvoiceStatus } from "@/types/InvoiceModule";
import { useInvoiceStore } from "@/stores/invoice";
import { ref } from "vue";

const store = useInvoiceStore();
const showIconDraft = ref(false);
const showIconPending = ref(false);
const showIconPaid = ref(false);
function handleInvoiceFilter(invoiceStatus: InvoiceStatus): void {
  let showActiveIcon = false;
  if (invoiceStatus === InvoiceStatus.Draft) {
    showActiveIcon = !showIconDraft.value;
    showIconDraft.value = !showIconDraft.value;
    showIconPending.value = false;
    showIconPaid.value = false;
  } else if (invoiceStatus === InvoiceStatus.Pending) {
    showActiveIcon = !showIconPending.value;
    showIconPending.value = !showIconPending.value;
    showIconDraft.value = false;
    showIconPaid.value = false;
  } else {
    showActiveIcon = !showIconPaid.value;
    showIconPaid.value = !showIconPaid.value;
    showIconPending.value = false;
    showIconDraft.value = false;
  }
  store.filterInvoiceByStatus(invoiceStatus, showActiveIcon);
}
</script>
<template>
  <div class="filterDropdown">
    <div class="filterList">
      <InvoiceFilterItem
        @handle-invoice-filter="handleInvoiceFilter"
        :filterStatus="InvoiceStatus.Draft"
        :showIconCheck="showIconDraft"
      />
      <InvoiceFilterItem
        @handle-invoice-filter="handleInvoiceFilter"
        :filterStatus="InvoiceStatus.Pending"
        :showIconCheck="showIconPending"
      />
      <InvoiceFilterItem
        @handle-invoice-filter="handleInvoiceFilter"
        :filterStatus="InvoiceStatus.Paid"
        :showIconCheck="showIconPaid"
      />
    </div>
  </div>
</template>
<style scoped>
.filterDropdown {
  position: absolute;
  top: 1.875rem;
  background: var(--color-background-white);
  box-shadow: 0px 1rem 2rem rgba(72, 84, 159, 0.25);
  border-radius: 0.8rem;
  padding: 1.125rem;
  width: 8.125rem;
  z-index: 99;
}
.filterList {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
</style>
