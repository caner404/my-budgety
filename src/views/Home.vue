<script setup lang="ts">
import InvoiceEditSidebar from "@/components/InvoiceEditSidebar.vue";
import TheHeading from "@/components/TheHeading.vue";
import TheMain from "@/components/TheMain.vue";
import FadeInleftTransition from "@/components/transitions/FadeInLeftTransisiton.vue";
import FadeInUpTransition from "@/components/transitions/FadeInUpTransition.vue";
import { useInvoiceStore } from "@/stores/invoice";
import { storeToRefs } from "pinia";
import BaseOverlay from "@/components/BaseOverlay.vue";

const store = useInvoiceStore();
const { showInvoiceEditSideBar } = storeToRefs(store);
</script>
<template>
  <div class="homeView">
    <TheHeading />
    <div class="container">
      <FadeInUpTransition>
        <TheMain />
      </FadeInUpTransition>
    </div>
    <FadeInleftTransition>
      <InvoiceEditSidebar v-show="showInvoiceEditSideBar" />
    </FadeInleftTransition>
    <BaseOverlay v-if="showInvoiceEditSideBar" />
  </div>
</template>
<style scoped>
.homeView {
  display: flex;
  flex-direction: column;
  background: var(--color-background-neutral);
  overflow: hidden;
  height: 100%;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 1024px) {
  .homeView {
    flex-direction: row;
  }
  .container {
    flex: 1;
  }
}
</style>
