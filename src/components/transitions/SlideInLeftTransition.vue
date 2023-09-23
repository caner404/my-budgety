<script setup lang="ts"></script>
<template>
  <Transition appear name="slideInLeft">
    <slot></slot>
  </Transition>
</template>
<style>
.slideInLeft-enter-active,
.slideInLeft-leave-active {
  transition: transform 1s;
  transition-delay: 0.3s; /* Verzögerung für die Slide-In-Animation */
}
.slideInLeft-enter,
.slideInLeft-leave-to {
  transform: translateX(-100%);
  transition-delay: 0.3s; /* Verzögerung für die Slide-In-Animation */
}
</style>
