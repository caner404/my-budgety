<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { storeToRefs } from "pinia";

const store = useInvoiceStore();
</script>
<template>
  <div class="overlay" @click="store.toggleSidebarButton"></div>
</template>
<style scoped>
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
