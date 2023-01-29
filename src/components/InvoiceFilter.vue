<script setup lang="ts">
import { ref } from "vue";
import IconArrowDown from "./icons/IconArrowDown.vue";
import InvoiceFilterDropdown from "./InvoiceFilterDropdown.vue";

const showDropdown = ref(false);
</script>

<template>
  <div class="filter">
    <div class="filter-text" @click="showDropdown = !showDropdown">
      <h4 class="filter-description">Filter</h4>
      <IconArrowDown :changeArrow="showDropdown" />
    </div>
    <InvoiceFilterDropdown v-show="showDropdown" />
  </div>
</template>

<style scoped>
.filter {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  gap: 2rem;
}
.filter-text {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
</style>
