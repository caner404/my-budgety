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
  <TheHeading />
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
      <FadeInleftTransition>
        <InvoiceEditSidebar v-show="showInvoiceEditSideBar" />
      </FadeInleftTransition>
    </div>
  </FadeInTransition>
  <div v-if="showInvoiceEditSideBar" class="overlay" @click="store.toggleSidebarButton"></div>
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

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  mix-blend-mode: normal;
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
