<template>
  <div class="flex flex-col items-center justify-center space-y-4">
    <div class="loader mt-3"></div>
    <p v-if="props.text" class="body leading-tight" v-html="props.text"></p>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
})
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 40px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100% / 4) 50%;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  20% {
    background-position:
      0% 0%,
      50% 50%,
      100% 50%;
  }
  40% {
    background-position:
      0% 100%,
      50% 0%,
      100% 50%;
  }
  60% {
    background-position:
      0% 50%,
      50% 100%,
      100% 0%;
  }
  80% {
    background-position:
      0% 50%,
      50% 50%,
      100% 100%;
  }
}
</style>
