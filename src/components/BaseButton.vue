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
  color: var(--color-palette-white);
  border-radius: 2.4rem;
  padding: 1.5rem 2.4rem;
}
.violet {
  background-color: var(--color-background-primary);
}
.violet:hover,
.violet.active {
  background-color: var(--color-background-primary-100-hover);
}
.grey {
  color: #7e88c3;
  background-color: var(--color-background-neutral);
}
.grey:hover,
.grey:active {
  background-color: var(--color-background-neutral-hover);
}
.red {
  background-color: var(--color-background-danger);
}
.red:hover,
.red:active {
  background-color: var(--color-background-danger-hover);
}
</style>
