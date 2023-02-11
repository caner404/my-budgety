<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  mode: {
    type: String,
    required: true,
  },
});
const classObject = computed(() => ({
  grey: props.mode === "grey",
  red: props.mode === "red",
  violet: props.mode === "violet",
}));
</script>
<template>
  <button :class="classObject">
    <slot></slot>
  </button>
</template>
<style scoped>
button {
  cursor: pointer;
  color: #fff;
  border-radius: 2.4rem;
  padding: 1.5rem 2.4rem;
}
.violet {
  background-color: var(--c-violet-dark);
}
.grey {
  color: #7e88c3;
  background-color: var(--c-invoice-items-background);
}
.red {
  background-color: var(--c-red);
}
</style>
