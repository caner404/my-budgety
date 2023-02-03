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
.createInvoiceButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #fff;
  background-color: var(--c-violet-dark);
  border: none;
  padding: 1rem;
  border-radius: 2.4rem;
}

.createInvoiceIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #fff;
}
</style>
