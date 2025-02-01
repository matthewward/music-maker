<template>
  <svg
    :width="small ? '16' : '24'"
    :height="small ? '16' : '24'"
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12.875H19"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 5.875L19 12.875L12 19.875"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  small: {
    type: Boolean,
    default: false,
  },
})
</script>
