<script setup lang="ts">
import { useInvoiceStore } from "@/stores/invoice";
import { useRoute } from "vue-router";
import { computed } from "vue";
import type { Invoice } from "@/types/InvoiceModule";
import BaseButton from "@/components/BaseButton.vue";
import InvoiceEditTemplate from "@/components/InvoiceEditTemplate.vue";
import FadeInTransition from "@/components/transitions/FadeInTransition.vue";
import TheHeading from "@/components/TheHeading.vue";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useInvoiceStore();
const invoice: Invoice = computed(() => store.getInvoiceById(route.params.id)).value;
const { showInvoiceEditSideBar } = storeToRefs(store);
</script>
<template>
  <TheHeading />
  <FadeInTransition>
    <div class="editView">
      <InvoiceEditTemplate :invoice="invoice" :show-back-button="true" />
      <footer>
        <BaseButton mode="" />
        <BaseButton mode="grey" @click="$router.back()">
          <p class="bold">Cancel</p>
        </BaseButton>
        <BaseButton mode="violet">
          <p class="bold">Save Changes</p>
        </BaseButton>
      </footer>
    </div>
  </FadeInTransition>
  <div v-if="showInvoiceEditSideBar" class="overlay" @click="store.toggleSidebarButton"></div>
</template>
<style scoped>
.editView {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
}
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.5rem;
  padding: 2rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
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
