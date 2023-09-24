<script setup lang="ts">
import InvoiceEditSidebar from "@/components/InvoiceEditSidebar.vue";
import TheHeading from "@/components/TheHeading.vue";
import TheMain from "@/components/TheMain.vue";
import FadeInleftTransition from "@/components/transitions/FadeInLeftTransisiton.vue";
import FadeInUpTransition from "@/components/transitions/FadeInUpTransition.vue";
import { useInvoiceStore } from "@/stores/invoice";
import { storeToRefs } from "pinia";

const store = useInvoiceStore();
const { showInvoiceEditSideBar } = storeToRefs(store);
</script>
<template>
  <TheHeading />
  <div class="container">
    <FadeInUpTransition>
      <TheMain />
    </FadeInUpTransition>

    <FadeInleftTransition>
      <InvoiceEditSidebar v-show="showInvoiceEditSideBar" />
    </FadeInleftTransition>

    <div v-if="showInvoiceEditSideBar" class="overlay" @click="store.toggleSidebarButton"></div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  height: 100%;
  background: var(--color-background-neutral);
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
</style>
