<script setup lang="ts">
import InvoiceGoBack from "@/components/InvoiceGoBack.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import { useInvoiceStore } from "@/stores/invoice";
import { useRoute } from "vue-router";
import { computed } from "vue";
import type { Invoice } from "@/types/InvoiceModule";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

const route = useRoute();
const store = useInvoiceStore();
const paramId = route.params.id;
const invoice: Invoice = computed(() =>
  store.getInvoiceById(route.params.id)
).value;
</script>
<template>
  <main>
    <InvoiceGoBack />
    <h1>Edit #{{ invoice.id }}</h1>
    <div class="sender-information">
      <p class="heading bold">Bill from</p>
      <BaseInput
        type="text"
        :value="invoice.senderAddress.street"
        label="Street Address"
        class="sender--address"
      />
      <BaseInput
        type="text"
        :value="invoice.senderAddress.city"
        label="City"
        class="sender--city"
      />
      <BaseInput
        type="text"
        :value="invoice.senderAddress.postCode"
        label="Post Code"
        class="sender--postCode"
      />
      <BaseInput
        type="text"
        :value="invoice.senderAddress.country"
        label="Country"
        class="sender--country"
      />
    </div>
    <div class="client-information">
      <p class="heading bold">Bill to</p>
      <BaseInput
        type="text"
        :value="invoice.clientName"
        label="Clients name"
        class="client--name"
      />
      <BaseInput
        type="text"
        :value="invoice.clientEmail"
        label="Clients email"
        class="client--email"
      />
      <BaseInput
        type="text"
        :value="invoice.clientAddress.street"
        label="Street Address"
        class="client--address"
      />
      <BaseInput
        type="text"
        :value="invoice.clientAddress.city"
        label="City"
        class="client--city"
      />
      <BaseInput
        type="text"
        :value="invoice.clientAddress.postCode"
        label="Post Code"
        class="client--postCode"
      />
      <BaseInput
        type="text"
        :value="invoice.clientAddress.country"
        label="Country"
        class="client--country"
      />
      <BaseInput
        type="text"
        :value="invoice.description"
        label="Project Description"
        class="client--description"
      />
    </div>
    <div class="item-list">
      <h2>Item List</h2>
      <div class="item" v-for="item in invoice.items">
        <BaseInput
          type="text"
          :value="item.name"
          label="Item Name"
          class="item--name"
        />

        <div class="item-cost">
          <BaseInput type="number" :value="item.quantity" label="Qty." />
          <BaseInput type="number" :value="item.price" label="Price" />
          <BaseInput
            type="number"
            :value="item.total"
            label="Total"
            :disabled="true"
          />
          <IconDelete class="flex-align-center" />
        </div>
      </div>
      <BaseButton mode="grey">
        <p class="bold">+Add New Item</p>
      </BaseButton>
    </div>
  </main>
  <div class="bottomShadowEffect"></div>
  <footer>
    <BaseButton mode="" />
    <BaseButton mode="grey">
      <p class="bold">Cancel</p>
    </BaseButton>
    <BaseButton mode="violet">
      <p class="bold">Save Changes</p>
    </BaseButton>
  </footer>
</template>
<style scoped>
.bottomShadowEffect {
  min-height: 6.4rem;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  background: #fff;
  padding: 2rem;
  overflow: scroll;
  max-width: 100vw;
}
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
}

h1 {
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.5px;
}
.sender-information,
.client-information {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
}
.heading {
  color: var(--c-violet-dark);
}

.item-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  gap: 1.5rem;

  grid-row: 2;
  grid-column: 1 / span 4;
}
.item-cost > * {
  flex: 1;
}
.flex-align-center {
  margin-top: 1.5rem;
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
</style>
