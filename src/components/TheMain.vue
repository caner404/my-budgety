<script setup lang="ts">
import InvoiceCount from "./InvoiceCount.vue";
import InvoiceListEmpty from "./InvoiceListEmpty.vue";
import InvoiceList from "./InvoiceList.vue";
import InvoiceFilter from "./InvoiceFilter.vue";
import InvoiceCreateButton from "./InvoiceCreateButton.vue";
import { useInvoiceStore } from "@/stores/invoice";
import invoiceJson from "@/json/data.json";
import type { Invoice } from "@/types/InvoiceModule";
import { computed } from "vue";

const store = useInvoiceStore();
store.loadInvoices(invoiceJson as Invoice[]);
const invoicesData = computed(() => {
  if (store.isInvoiceFilterStatusActive) return store.invoiceDataByStatus;
  return store.getInvoices;
});
const show = store.isInvoicesEmpty;
</script>
<template>
  <main>
    <div class="main-subheading">
      <InvoiceCount />
      <InvoiceFilter />
      <InvoiceCreateButton />
    </div>
    <InvoiceListEmpty v-if="show" />
    <InvoiceList v-else :invoices="invoicesData" />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  background: var(--color-background-neutral);
  padding: 2rem;
  overflow: scroll;
}
.main-subheading {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>
