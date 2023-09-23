<script setup lang="ts"></script>
<template>
  <Transition appear name="fadeIn">
    <slot></slot>
  </Transition>
</template>
<style scoped>
.fadeIn-enter-active,
.fadeIn-leave-active {
  animation: fade-in var(--animation-duration) ease-in 0.5;
}
</style>
