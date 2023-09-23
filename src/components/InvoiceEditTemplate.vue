<script setup lang="ts">
import type { Invoice } from "@/types/InvoiceModule";
import { computed, type PropType } from "vue";

import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import IconDelete from "./icons/IconDelete.vue";
import InvoiceGoBack from "./InvoiceGoBack.vue";

const props = defineProps({
  invoice: {
    type: Object as PropType<Invoice>,
    required: true,
  },
  showBackButton: {
    type: Boolean,
    default: true,
  },
  showShadowEffect: {
    type: Boolean,
    default: true,
  },
});
const headerText = computed(() => {
  return props.invoice.id ? `Edit #${props.invoice.id}` : `New Invoice`;
});
</script>
<template>
  <main>
    <InvoiceGoBack v-show="showBackButton" />
    <h1>{{ headerText }}</h1>
    <div class="sender-information">
      <p class="heading bold">Bill from</p>
      <BaseInput type="text" :value="invoice.senderAddress.street" label="Street Address" class="sender--address" />
      <BaseInput type="text" :value="invoice.senderAddress.city" label="City" class="sender--city" />
      <BaseInput type="text" :value="invoice.senderAddress.postCode" label="Post Code" class="sender--postCode" />
      <BaseInput type="text" :value="invoice.senderAddress.country" label="Country" class="sender--country" />
    </div>
    <div class="client-information">
      <p class="heading bold">Bill to</p>
      <BaseInput type="text" :value="invoice.clientName" label="Clients name" class="client--name" />
      <BaseInput type="text" :value="invoice.clientEmail" label="Clients email" class="client--email" />
      <BaseInput type="text" :value="invoice.clientAddress.street" label="Street Address" class="client--address" />
      <BaseInput type="text" :value="invoice.clientAddress.city" label="City" class="client--city" />
      <BaseInput type="text" :value="invoice.clientAddress.postCode" label="Post Code" class="client--postCode" />
      <BaseInput type="text" :value="invoice.clientAddress.country" label="Country" class="client--country" />
      <BaseInput type="text" :value="invoice.description" label="Project Description" class="client--description" />
    </div>
    <div class="item-list">
      <h2>Item List</h2>
      <div class="item" v-for="item in invoice.items">
        <BaseInput type="text" :value="item.name" label="Item Name" class="item--name" />

        <div class="item-cost">
          <BaseInput type="number" :value="item.quantity" label="Qty." />
          <BaseInput type="number" :value="item.price" label="Price" />
          <BaseInput type="number" :value="item.total" label="Total" :disabled="true" />
          <IconDelete class="flex-align-center" />
        </div>
      </div>
      <BaseButton mode="grey">
        <p class="bold">+Add New Item</p>
      </BaseButton>
    </div>
  </main>
  <div class="bottomShadowEffect"></div>
</template>
<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  z-index: 1;
  background: var(--color-palette-white);
}

.bottomShadowEffect {
  min-height: 4rem;
  width: 100%;
  z-index: -1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%);
}

h1 {
  font-size: 1.5rem;
  line-height: 1.125rem;
  letter-spacing: -0.5px;
}
.sender-information,
.client-information {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.9rem;
}
.heading {
  color: var(--color-text-primary);
}

.item-list {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
}
.item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
.item--name {
  grid-row: 1;
  grid-column: 1 / span 4;
}
.item-cost {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.9rem;

  grid-row: 2;
  grid-column: 1 / span 4;
}
.item-cost > * {
  flex: 1;
}
.flex-align-center {
  margin-top: 0.9rem;
  align-self: center;
}

.sender--address {
  grid-row: 2;
  grid-column: 1 / span 2;
}
.sender--city,
.sender--postCode {
  grid-row: 3;
}
.sender--country {
  grid-row: 4;
  grid-column: 1 / span 2;
}

.client--name {
  grid-row: 2;
  grid-column: 1 / span 2;
}
.client--email {
  grid-row: 3;
  grid-column: 1 / span 2;
}
.client--address {
  grid-row: 4;
  grid-column: 1 / span 2;
}
.client--city,
.client--postCode {
  grid-row: 5;
}
.client--country {
  grid-row: 6;
  grid-column: 1 / span 2;
}
.client--description {
  grid-row: 7;
  grid-column: 1 / span 2;
}
@media screen and (min-width: 768px) {
  .sender--address {
    grid-column: 1 / span 4;
  }
  .sender--country {
    grid-row: 3;
  }
  .client--name,
  .client--address,
  .client--email,
  .client--description {
    grid-column: 1 / span 3;
  }
  .client--country {
    grid-row: 5;
    grid-column: 3;
  }
}
</style>
