<script setup lang="ts"></script>
<template>
  <Transition appear name="slide">
    <slot></slot>
  </Transition>
</template>
<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
