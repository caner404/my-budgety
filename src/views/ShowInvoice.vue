<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import InvoiceGoBack from "@/components/InvoiceGoBack.vue";
import InvoiceDetailed from "@/components/InvoiceDetailed.vue";
import InvoiceStatus from "@/components/InvoiceStatus.vue";
import BaseButton from "@/components/BaseButton.vue";
import DeleteModalDialog from "@/components/DeleteModalDialog.vue";
import * as InvoiceModule from "@/types/InvoiceModule";

const route = useRoute();
const store = useInvoiceStore();
const paramId = route.params.id;
const invoice: InvoiceModule.Invoice = computed(() =>
  store.getInvoiceById(route.params.id)
).value;

const showDeleteModal = ref(false);
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
      <p class="bold" @click="showDeleteModal = !showDeleteModal">Delete</p>
    </BaseButton>
    <BaseButton
      mode="violet"
      v-if="invoice.status !== InvoiceModule.InvoiceStatus.Paid"
    >
      <p class="bold">Mark as paid</p>
    </BaseButton>
  </footer>
  <DeleteModalDialog
    v-if="showDeleteModal"
    :id="invoice.id"
    @close-modal="(toClose) => (showDeleteModal = toClose)"
  />
</template>
<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--color-background-neutral);
  padding: 2rem;
}

.invoice-status-container {
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-palette-white);
}

.invoice-status-container p {
  color: var(--color-text-neutral-700);
}

footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
}
.router-link {
  color: var(--color-text-neutral-500);
}
</style>
