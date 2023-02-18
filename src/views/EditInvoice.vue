<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { useRoute } from "vue-router";
import { computed } from "vue";
import type { Invoice } from "@/types/InvoiceModule";
import BaseButton from "@/components/BaseButton.vue";
import InvoiceEditTemplate from "@/components/InvoiceEditTemplate.vue";

const route = useRoute();
const store = useInvoiceStore();
const invoice: Invoice = computed(() =>
  store.getInvoiceById(route.params.id)
).value;
</script>
<template>
  <InvoiceEditTemplate :invoice="invoice" />
  <footer>
    <BaseButton mode="" />
    <BaseButton mode="grey" @click="$router.back()">
      <p class="bold">Cancel</p>
    </BaseButton>
    <BaseButton mode="violet">
      <p class="bold">Save Changes</p>
    </BaseButton>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
}
</style>
