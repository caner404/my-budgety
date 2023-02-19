<script setup lang="ts"></script>
<template>
  <Transition appear name="fadeIn">
    <slot></slot>
  </Transition>
</template>
<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  animation: fade-in 0.8s ease-in;
}
</style>
