<script setup lang="ts">
import IconLogo from "@/components/icons/IconLogo.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
</script>

<template>
  <header>
    <router-link to="/">
      <IconLogo />
    </router-link>
    <IconMoon />
    <IconAvatar />
  </header>
</template>

<style scoped>
header {
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-secondary);
}
</style>
