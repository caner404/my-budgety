<script setup lang="ts">
const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
    required: true,
  },
  label: {
    type: String,
    required: true,
    default: "",
  },
  type: {
    type: String,
    required: true,
    default: "",
  },
  disabled: {
    type: Boolean,
  },
});
</script>
<template>
  <div class="form-group">
    <label
      ><p>{{ label }}</p></label
    >
    <input :type="type" :value="value" :placeholder="label" :class="{ diabledInput: disabled }" />
  </div>
</template>
<style scoped>
input {
  background-color: var(--color-background-white);
  border: 1px solid var(--color-palette-neutral-400);
  border-radius: 4px;
  width: 100%;
  padding: 0.625rem;
  font-size: 0.75rem;
  line-height: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  box-sizing: border-box; /* ignores box-sizing setting in base.css???*/
}
input:focus {
  outline: none;
  border-color: var(--color-border-primary);
}
label {
  color: var(--color-text-neutral-700);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.diabledInput {
  background: none;
  border: none;
  padding-left: 0;
  color: #888eb0;
}
</style>
