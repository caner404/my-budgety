<script setup lang="ts">
import InvoiceFilterItem from "./InvoiceFilterItem.vue";
import { InvoiceStatus } from "@/types/InvoiceModule";
</script>
<template>
  <div class="filterDropdown">
    <div class="filterList">
      <InvoiceFilterItem :filterStatus="InvoiceStatus.Draft" />
      <InvoiceFilterItem :filterStatus="InvoiceStatus.Pending" />
      <InvoiceFilterItem :filterStatus="InvoiceStatus.Paid" />
    </div>
  </div>
</template>
<style scoped>
.filterDropdown {
  position: absolute;
  top: 3rem;
  background: #ffffff;
  box-shadow: 0px 1rem 2rem rgba(72, 84, 159, 0.25);
  border-radius: 0.8rem;
  padding: 2rem;
  width: 13rem;
  z-index: 99;
}
.filterList {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
</style>
