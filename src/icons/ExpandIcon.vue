<template>
  <svg
    :width="small ? '16' : '24'"
    :height="small ? '16' : '24'"
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.875C17.5228 22.875 22 18.3978 22 12.875C22 7.35215 17.5228 2.875 12 2.875C6.47715 2.875 2 7.35215 2 12.875C2 18.3978 6.47715 22.875 12 22.875Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22.875C17.5228 22.875 22 18.3978 22 12.875C22 7.35215 17.5228 2.875 12 2.875C6.47715 2.875 2 7.35215 2 12.875C2 18.3978 6.47715 22.875 12 22.875Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8.875V16.875"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12.875H16"
      stroke="black"
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
