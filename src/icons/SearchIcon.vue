<template>
  <svg
    :width="small ? '16' : '24'"
    :height="small ? '16' : '24'"
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon=Search, Size=Medium">
      <path
        id="Vector"
        d="M11 19.875C15.4183 19.875 19 16.2933 19 11.875C19 7.45672 15.4183 3.875 11 3.875C6.58172 3.875 3 7.45672 3 11.875C3 16.2933 6.58172 19.875 11 19.875Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M21.0004 21.8749L16.6504 17.5249"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
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
