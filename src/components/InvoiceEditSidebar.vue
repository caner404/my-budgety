<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import type { Invoice } from "@/types/InvoiceModule";
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseButton from "./BaseButton.vue";
import InvoiceEditTemplate from "./InvoiceEditTemplate.vue";

const route = useRoute();
const store = useInvoiceStore();
const invoice: Invoice = computed(() => {
  if (route.params.id) return store.getInvoiceById(route.params.id);
  return store.getNewInvoice();
}).value;
const emit = defineEmits<{
  (e: "showInvoiceSidebar"): void;
}>();
</script>
<template>
  <div class="sidebar">
    <InvoiceEditTemplate :invoice="invoice" :showBackButton="false" />
    <footer>
      <BaseButton mode="grey" @click="$emit('showInvoiceSidebar')">
        <p class="bold">Discard</p>
      </BaseButton>
      <BaseButton mode="dark" style="margin-left: auto">
        <p class="bold">Save as Draft</p>
      </BaseButton>
      <BaseButton mode="violet">
        <p class="bold">Save & send</p>
      </BaseButton>
    </footer>
  </div>
</template>
<style scoped>
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 90%;
  border-radius: 0 1.5rem 1.5rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
}
footer {
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
  padding: 2rem 3.5rem;
  background: #fff;
}
</style>
