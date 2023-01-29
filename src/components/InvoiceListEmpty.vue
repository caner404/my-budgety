<script setup lang="ts">
import IconInvoiceEmpty from "./icons/IconInvoiceEmpty.vue";
</script>
<template>
  <div class="invoiceListEmpty">
    <IconInvoiceEmpty />
    <h2>There is nothing here</h2>
    <p>Create an invoice by clicking the New button and get started</p>
  </div>
</template>
<style scoped>
.invoiceListEmpty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  transform: translateY(25%);
}
h2 {
  color: var(--c-black);
}
p {
  text-align: center;
  color: var(--c-dark-violet);
  max-width: 17rem;
}
</style>
