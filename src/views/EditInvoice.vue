<script setup lang="ts">
import InvoiceGoBack from "@/components/InvoiceGoBack.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import { useInvoiceStore } from "@/stores/invoice";
import { useRoute } from "vue-router";
import { computed } from "vue";
import type { Invoice } from "@/types/InvoiceModule";
import BaseButton from "@/components/BaseButton.vue";

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
      <div class="form-group sender--address">
        <label><p>Street Address</p></label>
        <input type="text" :value="invoice.senderAddress.street" />
      </div>
      <div class="form-group sender--city">
        <label><p>City</p></label>
        <input type="text" :value="invoice.senderAddress.city" />
      </div>
      <div class="form-group sender--postCode">
        <label><p>Post Code</p></label>
        <input type="text" :value="invoice.senderAddress.postCode" />
      </div>
      <div class="form-group sender--country">
        <label><p>Country</p></label>
        <input type="text" :value="invoice.senderAddress.country" />
      </div>
    </div>
    <div class="client-information">
      <p class="heading bold">Bill to</p>
      <div class="form-group client--name">
        <label><p>Client's name</p></label>
        <input type="text" :value="invoice.clientName" />
      </div>
      <div class="form-group client--email">
        <label><p>Client's Email</p></label>
        <input type="text" :value="invoice.clientEmail" />
      </div>
      <div class="form-group client--address">
        <label><p>Street Address</p></label>
        <input type="text" :value="invoice.clientAddress.street" />
      </div>
      <div class="form-group client--city">
        <label><p>City</p></label>
        <input type="text" :value="invoice.clientAddress.city" />
      </div>
      <div class="form-group client--postCode">
        <label><p>Post Code</p></label>
        <input type="text" :value="invoice.clientAddress.postCode" />
      </div>
      <div class="form-group client--country">
        <label><p>Country</p></label>
        <input type="text" :value="invoice.clientAddress.country" />
      </div>
      <div class="form-group client--description">
        <label><p>Project Description</p></label>
        <input type="text" :value="invoice.description" />
      </div>
    </div>
    <div class="item-list">
      <h2>Item List</h2>
      <div class="item" v-for="item in invoice.items">
        <div class="form-group item--name">
          <label><p>Item Name</p></label>
          <input type="text" :value="item.name" />
        </div>
        <div class="item-cost">
          <div class="form-group">
            <label><p>Qty.</p></label>
            <input type="number" :value="item.quantity" />
          </div>
          <div class="form-group">
            <label><p>Price</p></label>
            <input type="number" :value="item.price" />
          </div>
          <div class="form-group">
            <label><p>Total</p></label>
            <input
              type="number"
              :value="item.total"
              disabled
              class="item-total-input"
            />
          </div>
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
input {
  background-color: #fff;
  border: 1px solid #dfe3fa;
  border-radius: 4px;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  box-sizing: border-box; /* ignores box-sizing setting in base.css???*/
}
label {
  color: var(--c-violet);
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
.item-total-input {
  background: none;
  border: none;
  text-align: left;
  padding: 1rem 0;
}
.flex-align-center {
  margin-top: 1.5rem;
  align-self: center;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
