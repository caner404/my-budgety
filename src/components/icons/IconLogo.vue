<template>
  <div class="container">
    <div class="logo-container">
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="26"
      >
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
        />
      </svg>
    </div>
    <div class="logo-container--reverse"></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.logo {
  z-index: 99;
}
.logo-container,
.logo-container--reverse {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 2rem 2rem 0px;
  background-color: var(--c-purple-deep);
  width: 7.2rem;
  height: 7.2rem;
}
.logo-container--reverse {
  position: absolute;
  top: 50%;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  background-color: var(--c-purple-light);
}
</style>
