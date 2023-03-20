<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { useInvoiceStore } from "@/stores/invoice";
import { InvoiceStatus, type Invoice } from "@/types/InvoiceModule";
import { inject, type PropType } from "vue";
import { useRoute } from "vue-router";

defineProps({
  invoice: {
    type: Object as PropType<Invoice>,
    required: true,
  },
});
const openModal: any = inject("openModal");
const route = useRoute();
const paramId = route.params.id;
const store = useInvoiceStore();
const invoice: Invoice = store.getInvoiceById(paramId);
</script>
<template>
  <div class="invoiceActions">
    <BaseButton mode="grey">
      <router-link
        :to="{ name: 'InvoicesEdit', params: { id: paramId } }"
        class="router-link bold"
        >Edit</router-link
      >
    </BaseButton>
    <BaseButton mode="red">
      <p class="bold" @click="openModal">Delete</p>
    </BaseButton>
    <BaseButton
      mode="violet"
      v-if="invoice.status !== InvoiceStatus.Paid"
      @click="invoice.status = InvoiceStatus.Paid"
    >
      <p class="bold">Mark as paid</p>
    </BaseButton>
  </div>
</template>
<style scoped>
.invoiceActions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}
.router-link {
  color: var(--color-text-neutral-500);
}
</style>
