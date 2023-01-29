<script setup lang="ts">
import IconCheck from "./icons/IconCheck.vue";
import { ref, type PropType } from "vue";
import type { InvoiceStatus } from "@/types/InvoiceModule";

import { useInvoiceStore } from "@/stores/invoice";

const store = useInvoiceStore();
const props = defineProps({
  filterStatus: {
    type: String as PropType<InvoiceStatus>,
    required: true,
  },
});
const showIconCheck = ref(false);
function handleInvoiceFilter() {
  showIconCheck.value = !showIconCheck.value;
  store.filterInvoiceByStatus(props.filterStatus, showIconCheck.value);
}
</script>
<template>
  <div class="filterItem">
    <button
      @click="handleInvoiceFilter"
      :class="{ itemClicked: showIconCheck }"
    >
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
  gap: 1.5rem;
}
.filterItem button {
  border: none;
  background-color: var(--c-button-background-color);
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 2px;
}
.filterItem button.itemClicked {
  background-color: var(--c-violet-dark);
}
.filterItem button:hover {
  border: 1px solid var(--c-violet-dark);
}
</style>
