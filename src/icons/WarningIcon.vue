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
      d="M10.2898 4.73496L1.81978 18.875C1.64514 19.1774 1.55274 19.5203 1.55177 19.8695C1.55079 20.2187 1.64127 20.5621 1.8142 20.8655C1.98714 21.1689 2.2365 21.4217 2.53748 21.5988C2.83847 21.7759 3.18058 21.8711 3.52978 21.875H20.4698C20.819 21.8711 21.1611 21.7759 21.4621 21.5988C21.7631 21.4217 22.0124 21.1689 22.1854 20.8655C22.3583 20.5621 22.4488 20.2187 22.4478 19.8695C22.4468 19.5203 22.3544 19.1774 22.1798 18.875L13.7098 4.73496C13.5315 4.44107 13.2805 4.19808 12.981 4.02944C12.6814 3.86081 12.3435 3.77222 11.9998 3.77222C11.656 3.77222 11.3181 3.86081 11.0186 4.02944C10.7191 4.19808 10.468 4.44107 10.2898 4.73496Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 9.875V13.875"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 17.875H12.01"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.85953 3.44823L1.21286 12.8749C1.09644 13.0765 1.03484 13.3051 1.03418 13.5379C1.03353 13.7707 1.09385 13.9996 1.20914 14.2019C1.32443 14.4042 1.49068 14.5727 1.69133 14.6908C1.89199 14.8089 2.12006 14.8723 2.35286 14.8749H13.6462C13.879 14.8723 14.1071 14.8089 14.3077 14.6908C14.5084 14.5727 14.6746 14.4042 14.7899 14.2019C14.9052 13.9996 14.9655 13.7707 14.9649 13.5379C14.9642 13.3051 14.9026 13.0765 14.7862 12.8749L9.13953 3.44823C9.02068 3.2523 8.85334 3.09031 8.65366 2.97788C8.45397 2.86546 8.22868 2.8064 7.99953 2.8064C7.77037 2.8064 7.54508 2.86546 7.3454 2.97788C7.14571 3.09031 6.97837 3.2523 6.85953 3.44823Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 6.875V9.54167"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12.2083H8.00667"
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
