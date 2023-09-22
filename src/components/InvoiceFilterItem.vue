<script setup lang="ts">
import IconCheck from "./icons/IconCheck.vue";
import type { PropType } from "vue";
import type { InvoiceStatus } from "@/types/InvoiceModule";

const props = defineProps({
  filterStatus: {
    type: String as PropType<InvoiceStatus>,
    required: true,
  },
  showIconCheck: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <div class="filterItem">
    <button @click="$emit('handleInvoiceFilter', filterStatus)" :class="{ itemClicked: showIconCheck }">
      <IconCheck v-show="showIconCheck" />
    </button>
    <h4>{{ filterStatus }}</h4>
  </div>
</template>
<style scoped>
.filterItem {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
}
.filterItem button {
  border: none;
  border: 1px solid var(--color-background-neutral-400);
  background-color: var(--color-background-neutral-400);
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
}

.filterItem button.itemClicked {
  background-color: var(--color-background-primary);
}
.filterItem button:hover {
  border: 1px solid var(--color-border-primary);
}
</style>
