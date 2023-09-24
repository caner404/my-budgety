<script setup lang="ts">
import DeleteModalDialog from "@/components/DeleteModalDialog.vue";
import InvoiceDetailed from "@/components/InvoiceDetailed.vue";
import InvoiceEditSidebar from "@/components/InvoiceEditSidebar.vue";
import InvoiceGoBack from "@/components/InvoiceGoBack.vue";
import InvoiceStatusActions from "@/components/InvoiceStatusActions.vue";
import InvoiceStatusContainer from "@/components/InvoiceStatusContainer.vue";
import TheHeading from "@/components/TheHeading.vue";
import FadeInleftTransition from "@/components/transitions/FadeInLeftTransisiton.vue";
import FadeInTransition from "@/components/transitions/FadeInTransition.vue";
import { useInvoiceStore } from "@/stores/invoice";
import type { Invoice } from "@/types/InvoiceModule";
import { storeToRefs } from "pinia";
import { computed, provide, ref } from "vue";
import { useRoute } from "vue-router";
import BaseOverlay from "@/components/BaseOverlay.vue";

const route = useRoute();
const store = useInvoiceStore();
const paramId = route.params.id;
const invoice: Invoice = computed(() => store.getInvoiceById(route.params.id)).value;
const { showInvoiceEditSideBar } = storeToRefs(store);
const showDeleteModal = ref(false);

const openModal = () => {
  showDeleteModal.value = true;
};
provide("openModal", openModal);
</script>
<template>
  <FadeInTransition>
    <div class="showView">
      <TheHeading />
      <div class="container">
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
      <FadeInleftTransition>
        <InvoiceEditSidebar v-show="showInvoiceEditSideBar" />
      </FadeInleftTransition>
      <BaseOverlay v-if="showInvoiceEditSideBar" />
    </div>
  </FadeInTransition>
</template>
<style scoped>
.showView {
  position: relative;
  height: 100%;
  background: var(--color-background-neutral);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
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
  footer {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .showView,
  .container {
    flex-direction: row;
  }
  .container {
    flex: 1;
  }
}
</style>
