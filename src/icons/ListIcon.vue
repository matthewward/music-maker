<template>
  <svg
    :width="small ? '16' : '24'"
    :height="small ? '16' : '24'"
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 6.875H21"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12.875H21"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 18.875H21"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 6.875H3.01"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 12.875H3.01"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 18.875H3.01"
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
