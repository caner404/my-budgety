<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { useRoute } from "vue-router";
import { computed } from "vue";
import InvoiceGoBack from "@/components/InvoiceGoBack.vue";
import InvoiceStatus from "@/components/InvoiceStatus.vue";
import InvoiceDetailed from "@/components/InvoiceDetailed.vue";
import BaseButton from "@/components/BaseButton.vue";
import type { Invoice } from "@/types/InvoiceModule";

const route = useRoute();
const store = useInvoiceStore();
const paramId = route.params.id;
const invoice: Invoice = computed(() =>
  store.getInvoiceById(route.params.id)
).value;
</script>
<template>
  <main>
    <InvoiceGoBack />
    <div class="invoice-status-container">
      <p>Status</p>
      <InvoiceStatus :itemStatus="invoice?.status" />
    </div>
    <InvoiceDetailed :invoice="invoice" />
  </main>
  <footer>
    <BaseButton mode="grey">
      <router-link
        :to="{ name: 'InvoicesEdit', params: { id: paramId } }"
        class="router-link bold"
        >Edit</router-link
      >
    </BaseButton>
    <BaseButton mode="red">
      <p class="bold">Delete</p>
    </BaseButton>
    <BaseButton mode="violet">
      <p class="bold">Mark as paid</p>
    </BaseButton>
  </footer>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  background: #f8f8f8;
  padding: 2rem;
  overflow: scroll;
}

.invoice-status-container {
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}

footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
}
.router-link {
  color: #7e88c3;
}
</style>
