<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "@vue/reactivity";
import * as InvoiceModule from "@/types/InvoiceModule";

const props = defineProps({
  item: {
    type: Object as PropType<InvoiceModule.Invoice>,
    required: true,
  },
});

const classObject = computed(() => ({
  paid: props.item.status === InvoiceModule.InvoiceStatus.Paid,
  pending: props.item.status === InvoiceModule.InvoiceStatus.Pending,
  draft: props.item.status === InvoiceModule.InvoiceStatus.Draft,
}));
</script>
<template>
  <li class="invoice-item" data-test="invoice">
    <h4 data-test="id" class="invoice-id"><span>#</span>{{ item.id }}</h4>
    <p data-test="clientName" class="invoice-name">{{ item.clientName }}</p>
    <div class="invoice-payment">
      <p data-test="paymentDue" class="invoice-date">
        Due {{ item.paymentDue }}
      </p>

      <h3 data-test="total" class="invoice-total">
        <span>&euro;</span>{{ item.total }}
      </h3>
    </div>
    <div class="invoice-status" :class="classObject">
      <h4 data-test="status-text" class="invoice-status--text">
        {{ item.status }}
      </h4>
    </div>
  </li>
</template>
<style scoped>
span {
  margin-right: 0.2rem;
}
.invoice-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0px 1rem 1rem -1rem rgba(72, 84, 159, 0.1);
  border-radius: 0.8rem;
}
.invoice-id span,
.invoice-name {
  color: var(--c-violet);
}
.invoice-name {
  text-align: right;
}
.invoice-date {
  color: var(--c-dark-violet);
}
.invoice-status {
  justify-self: end;
}
.invoice-total {
  color: var(--c-black);
}
.invoice-status {
  justify-self: end;
  border-radius: 0.6rem;
  mix-blend-mode: normal;
  padding: 1.5rem 3rem;
  max-width: 10rem;
  text-align: center;
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
.invoice-status--text::before {
  content: "\2022";
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  padding-right: 0.5rem;
}
</style>
