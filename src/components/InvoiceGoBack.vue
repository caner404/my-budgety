<script setup lang="ts">
import IconArrowLeft from "./icons/IconArrowLeft.vue";
</script>
<template>
  <div class="goBack">
    <button @click="$router.back()">
      <IconArrowLeft />
      <h4>Go back</h4>
    </button>
  </div>
</template>
<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  background: none;
  border: none;
}
</style>
