<script setup lang="ts">
import invoiceJson from "@/json/data.json";
import { useInvoiceStore } from "@/stores/invoice";
import type { Invoice } from "@/types/InvoiceModule";
import { computed } from "vue";
import InvoiceCount from "./InvoiceCount.vue";
import InvoiceCreateButton from "./InvoiceCreateButton.vue";
import InvoiceFilter from "./InvoiceFilter.vue";
import InvoiceList from "./InvoiceList.vue";
import InvoiceListEmpty from "./InvoiceListEmpty.vue";

const store = useInvoiceStore();
store.loadInvoices(invoiceJson as Invoice[]);
const invoicesData = computed(() => {
  if (store.isInvoiceFilterStatusActive) return store.invoiceDataByStatus;
  return store.getInvoices;
});
const show = store.isInvoicesEmpty;

const emit = defineEmits<{
  (e: "showInvoiceSidebar", showSidebar: boolean): void;
}>();
</script>
<template>
  <main>
    <div class="main-subheading">
      <InvoiceCount />
      <InvoiceFilter />
      <router-link :to="{ name: 'InvoicesCreate' }" custom v-slot="{ navigate }">
        <InvoiceCreateButton class="onMobile" @click="navigate" role="router-link" />
      </router-link>
      <InvoiceCreateButton class="onTabletOrHigher" @click="$emit('showInvoiceSidebar')" />
    </div>

    <InvoiceListEmpty v-if="show" />
    <InvoiceList v-else :invoices="invoicesData" />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  padding: 1.125rem;
}
.main-subheading {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.125rem;
}
.onMobile {
  display: flex;
}
.onTabletOrHigher {
  display: none;
}

@media screen and (min-width: 768px) {
  .onMobile {
    display: none;
  }
  .onTabletOrHigher {
    display: flex;
  }
  main {
    padding: var(--padding-md);
  }
}
</style>
