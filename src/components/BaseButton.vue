<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
const classObject = computed(() => ({
  edit: props.text === "Edit",
  delete: props.text === "Delete",
  paid: props.text === "Mark as paid",
}));
</script>
<template>
  <button :class="classObject">
    <p>{{ props.text }}</p>
  </button>
</template>
<style scoped>
p {
  font-weight: 700;
}
button {
  cursor: pointer;
  color: #fff;
  border-radius: 2.4rem;
  padding: 1.5rem 2.4rem;
  font-weight: 700;
}
.paid {
  background-color: var(--c-violet-dark);
}
.edit {
  color: #7e88c3;
  background-color: var(--c-invoice-items-background);
}
.delete {
  background-color: var(--c-red);
}
</style>
