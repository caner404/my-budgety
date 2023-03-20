<script setup lang="ts">
import { computed, type PropType } from "vue";
import { InvoiceStatus } from "@/types/InvoiceModule";

const props = defineProps({
  itemStatus: {
    type: String as PropType<InvoiceStatus>,
    required: true,
  },
});

const classObject = computed(() => ({
  paid: props.itemStatus === InvoiceStatus.Paid,
  pending: props.itemStatus === InvoiceStatus.Pending,
  draft: props.itemStatus === InvoiceStatus.Draft,
}));
</script>
<template>
  <div class="invoice-status" :class="classObject">
    <h4 data-test="status-text" class="invoice-status--text">
      {{ itemStatus }}
    </h4>
  </div>
</template>
<style scoped>
.invoice-status {
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: normal;
  width: 10rem;
  height: 4rem;
  text-align: center;
  border-radius: 0.6rem;
}

.invoice-status--text::before {
  content: "\2022";
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  padding-right: 0.5rem;
}

.paid {
  background: rgba(51, 214, 159, 0.06);
  color: #33d69f;
}
.pending {
  background: rgba(255, 143, 0, 0.06);
  color: #ff8f00;
}
.draft {
  background: rgba(55, 59, 83, 0.06);
  color: #373b53;
}
</style>
