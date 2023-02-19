<script setup lang="ts"></script>
<template>
  <Transition appear name="fadeInUp">
    <slot></slot>
  </Transition>
</template>
<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translate3d(0, 1rem, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.fadeInUp-enter-active,
.fadeInUp-leave-active {
  animation: fade-in-up var(--animation-duration) ease-in;
}
</style>
