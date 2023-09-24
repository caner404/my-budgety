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
    <IconMoon class="moon" />
    <IconAvatar />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-secondary);
}

.moon {
  margin-left: auto;
  margin-right: 1.25rem;
}

@media screen and (min-width: 1024px) {
  .moon {
    margin: 0;
    margin-top: auto;
  }
  header {
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    border-radius: 0 1.5rem 1.5rem 0;
  }
}
</style>
