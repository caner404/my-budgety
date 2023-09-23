<script setup lang="ts"></script>
<template>
  <Transition appear class="fade-in-left" name="fadeInLeft">
    <slot></slot>
  </Transition>
</template>
<style scoped>
@keyframes fade-in-left {
  0% {
    opacity: 0; /* Startzustand: Vollständig transparent */
    transform: translateX(-20px); /* Startzustand: Verschoben nach links */
  }
  100% {
    opacity: 1; /* Endzustand: Vollständig sichtbar */
    transform: translateX(0); /* Endzustand: Keine Verschiebung (normal positioniert) */
  }
}
.fadeInLeft-enter-active,
.fadeInLeft-leave-active {
  animation: fade-in-left var(--animation-duration) ease-in-out;
}
</style>
