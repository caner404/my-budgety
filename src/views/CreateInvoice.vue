<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { useRoute } from "vue-router";
import { computed } from "vue";
import type { Invoice } from "@/types/InvoiceModule";
import BaseButton from "@/components/BaseButton.vue";
import InvoiceEditTemplate from "@/components/InvoiceEditTemplate.vue";
import FadeInTransition from "@/components/transitions/FadeInTransition.vue";
import TheHeading from "@/components/TheHeading.vue";
const route = useRoute();
const store = useInvoiceStore();
const invoice: Invoice = computed(() => {
  if (route.params.id) return store.getInvoiceById(route.params.id);
  return store.getNewInvoice();
}).value;
</script>
<template>
  <TheHeading />
  <FadeInTransition>
    <div class="createView">
      <InvoiceEditTemplate :invoice="invoice" :show-back-button="true" :show-shadow-effect="true" />
      <footer>
        <BaseButton mode="grey" @click="$router.back()">
          <p class="bold">Discard</p>
        </BaseButton>
        <BaseButton mode="dark">
          <p class="bold">Save as Draft</p>
        </BaseButton>
        <BaseButton mode="violet">
          <p class="bold">Save & send</p>
        </BaseButton>
      </footer>
    </div>
  </FadeInTransition>
</template>
<style scoped>
.createView {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100%;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  gap: 0.5rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
}
</style>
