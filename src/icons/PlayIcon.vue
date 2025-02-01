<template>
  <svg
    :width="small ? '16' : '24'"
    :height="small ? '16' : '24'"
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 6.875L17.5 12.875L8.5 18.875V6.875Z"
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
