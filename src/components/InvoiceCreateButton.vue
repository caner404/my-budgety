<script setup lang="ts">
import IconPlus from "./icons/IconPlus.vue";
</script>
<template>
  <button class="createInvoiceButton">
    <div class="createInvoiceIcon">
      <IconPlus />
    </div>
    <h4 class="onMobile">New</h4>
    <h4>New Invoice</h4>
  </button>
</template>
<style scoped>
.createInvoiceButton,
.createInvoiceButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  color: var(--color-text-white);
  background-color: var(--color-button-create);
  border: none;
  padding: 0.625rem;
  border-radius: 1.5rem;
}
.createInvoiceButton:hover,
.createInvoiceButton:active {
  background-color: var(--color-button-create-hover);
}
.createInvoiceIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--color-palette-white);
}
h4 {
  color: var(--);
}
h4:not(.onMobile) {
  display: none;
}
@media screen and (min-width: 768px) {
  .onMobile {
    display: none;
  }
  h4:not(.onMobile) {
    display: block;
  }
}
</style>
