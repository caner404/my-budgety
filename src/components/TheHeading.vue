<script setup lang="ts">
import IconLogo from "@/components/icons/IconLogo.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
</script>

<template>
  <header>
    <IconLogo />
    <IconMoon />
    <IconAvatar />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--c-header-background);
}
</style>
