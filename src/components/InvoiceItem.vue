<script setup lang="ts">
import type { InvoiceItem } from "@/types/InvoiceModule";
import type { PropType } from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<InvoiceItem>,
    required: true,
  },
});
</script>
<template>
  <div class="invoice-item">
    <div class="item-details">
      <h3 class="invoice-item-name">{{ item.name }}</h3>
      <p class="invoice-item-price">
        <span class="item-quantity"> {{ item.quantity }}x </span>&euro;{{ item.price }}
      </p>
    </div>
    <h3 class="item-total">&euro;{{ item.total }}</h3>
  </div>
</template>
<style scoped>
p,
span {
  color: var(--color-text-neutral-700);
}
h3 {
  color: var(--c-black);
}
.invoice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-details {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .item-details,
  .invoice-item-price {
    display: contents;
  }
}
</style>
