<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";

defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <div class="modal">
      <h2>Confirm Deletion</h2>
      <p class="modal-text">
        Are you suree you want to delete invoice #{{ id }}
        ? This action cannot be undone.
      </p>
      <div class="buttons">
        <BaseButton mode="grey" @click="$emit('closeModal', false)">
          <p class="bold">Cancel</p>
        </BaseButton>
        <BaseButton mode="red" @click="$emit('closeModal', false)">
          <p class="bold">Delete</p>
        </BaseButton>
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
.modal {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem;
  background-color: var(--color-palette-white);
  border-radius: 0.625rem;
  z-index: 999;
  margin: 1.25rem;
}
.buttons {
  align-self: end;
}
.modal-text {
  line-height: 1.375rem;
  color: var(--color-text-neutral-500);
}
</style>
