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
import BaseOverlay from "@/components/BaseOverlay.vue";

const route = useRoute();
const store = useInvoiceStore();
const invoice: Invoice = computed(() => store.getInvoiceById(route.params.id)).value;
const { showInvoiceEditSideBar } = storeToRefs(store);
</script>
<template>
  <FadeInTransition>
    <div class="editView">
      <TheHeading />
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
  <BaseOverlay v-if="showInvoiceEditSideBar" />
</template>
<style scoped>
.editView {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
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

@media screen and (min-width: 768px) {
  .editView {
    flex-direction: row;
  }
}
</style>
