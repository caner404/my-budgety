<template>
  <div class="container">
    <img src="@/assets/image-avatar.jpg" alt="avatar picture" />
  </div>
</template>

<style scoped>
.container {
  padding: 1.25rem;
  border-left: 1px solid #494e6e;
}
img {
  display: block;
  border-right: 1px solid black;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}

@media screen and (min-width: 1024px) {
  .container {
    border-left: 0;
    border-top: 1px solid #494e6e;
  }
}
</style>
