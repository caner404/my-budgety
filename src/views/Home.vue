<script setup lang="ts">
import InvoiceEditSidebar from "@/components/InvoiceEditSidebar.vue";
import TheHeading from "@/components/TheHeading.vue";
import TheMain from "@/components/TheMain.vue";
import FadeInleftTransition from "@/components/transitions/FadeInLeftTransisiton.vue";
import FadeInUpTransition from "@/components/transitions/FadeInUpTransition.vue";
import { ref } from "vue";

const showInvoiceEditSidebar = ref(false);
</script>
<template>
  <TheHeading />
  <div class="container">
    <FadeInUpTransition>
      <TheMain @show-invoice-sidebar="showInvoiceEditSidebar = !showInvoiceEditSidebar" />
    </FadeInUpTransition>

    <FadeInleftTransition>
      <InvoiceEditSidebar
        v-show="showInvoiceEditSidebar"
        @show-invoice-sidebar="showInvoiceEditSidebar = !showInvoiceEditSidebar"
      />
    </FadeInleftTransition>

    <div v-if="showInvoiceEditSidebar" class="overlay" @click="showInvoiceEditSidebar = !showInvoiceEditSidebar"></div>
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
