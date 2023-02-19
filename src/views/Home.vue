<script setup lang="ts">
import TheMain from "@/components/TheMain.vue";
import FadeInUpTransition from "@/components/transitions/FadeInUpTransition.vue";
</script>
<template>
  <FadeInUpTransition>
    <TheMain />
  </FadeInUpTransition>
</template>
<style scoped></style>
