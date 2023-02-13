<script setup lang="ts">
import IconPlus from "./icons/IconPlus.vue";
</script>
<template>
  <button class="createInvoiceButton">
    <div class="createInvoiceIcon">
      <IconPlus />
    </div>
    <h4>New</h4>
  </button>
</template>
<style scoped>
.createInvoiceButton,
.createInvoiceButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--color-text-white);
  background-color: var(--color-button-create);
  border: none;
  padding: 1rem;
  border-radius: 2.4rem;
}
.createInvoiceButton:hover,
.createInvoiceButton:active {
  background-color: var(--color-button-create-hover);
}
.createInvoiceIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: var(--color-palette-white);
}
</style>
