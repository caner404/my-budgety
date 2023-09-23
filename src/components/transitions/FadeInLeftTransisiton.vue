<script setup lang="ts"></script>
<template>
  <Transition appear name="fadeInLeft">
    <slot></slot>
  </Transition>
</template>
<style scoped>
.fadeInLeft-enter-active,
.fadeInLeft-leave-active {
  transition: all 0.5s ease-in;
}
.fadeInLeft-enter-from,
.fadeInLeft-leave-to {
  transform: translateX(-100%);
}
</style>
