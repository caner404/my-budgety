<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import type { Invoice } from "@/types/InvoiceModule";
import { useRoute } from "vue-router";
import { computed, provide, ref } from "vue";
import InvoiceGoBack from "@/components/InvoiceGoBack.vue";
import InvoiceDetailed from "@/components/InvoiceDetailed.vue";
import InvoiceStatusContainer from "@/components/InvoiceStatusContainer.vue";
import DeleteModalDialog from "@/components/DeleteModalDialog.vue";
import FadeInTransition from "@/components/transitions/FadeInTransition.vue";
import InvoiceStatusActions from "@/components/InvoiceStatusActions.vue";

const route = useRoute();
const store = useInvoiceStore();
const paramId = route.params.id;
const invoice: Invoice = computed(() =>
  store.getInvoiceById(route.params.id)
).value;

const showDeleteModal = ref(false);

const openModal = () => {
  showDeleteModal.value = true;
};
provide("openModal", openModal);
</script>
<template>
  <FadeInTransition>
    <div class="showView">
      <main>
        <InvoiceGoBack />
        <InvoiceStatusContainer :invoice="invoice" />
        <InvoiceDetailed :invoice="invoice" />
      </main>
      <footer>
        <InvoiceStatusActions :invoice="invoice" />
      </footer>
      <DeleteModalDialog
        v-if="showDeleteModal"
        :id="invoice.id"
        @close-modal="(toClose) => (showDeleteModal = toClose)"
      />
    </div>
  </FadeInTransition>
</template>
<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--color-background-neutral);
  padding: 2rem;
}

footer {
  padding: 2rem;
}

@media screen and (min-width: 768px) {
  main {
    min-height: 100vh;
  }
  footer {
    display: none;
  }
}
</style>
