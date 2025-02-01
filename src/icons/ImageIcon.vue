<template>
  <svg
    v-if="!small"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3.875H5C3.89543 3.875 3 4.77043 3 5.875V19.875C3 20.9796 3.89543 21.875 5 21.875H19C20.1046 21.875 21 20.9796 21 19.875V5.875C21 4.77043 20.1046 3.875 19 3.875Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.5 10.875C9.32843 10.875 10 10.2034 10 9.375C10 8.54657 9.32843 7.875 8.5 7.875C7.67157 7.875 7 8.54657 7 9.375C7 10.2034 7.67157 10.875 8.5 10.875Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 15.875L16 10.875L5 21.875"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6667 2.875H3.33333C2.59695 2.875 2 3.47195 2 4.20833V13.5417C2 14.278 2.59695 14.875 3.33333 14.875H12.6667C13.403 14.875 14 14.278 14 13.5417V4.20833C14 3.47195 13.403 2.875 12.6667 2.875Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.66699 7.54175C6.21928 7.54175 6.66699 7.09403 6.66699 6.54175C6.66699 5.98946 6.21928 5.54175 5.66699 5.54175C5.11471 5.54175 4.66699 5.98946 4.66699 6.54175C4.66699 7.09403 5.11471 7.54175 5.66699 7.54175Z"
      fill="currentColor"
    />
    <path
      d="M13.9997 10.8751L10.6663 7.54175L3.33301 14.8751"
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
