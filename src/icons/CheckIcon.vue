<template>
  <svg
    :width="small ? '16' : '24'"
    :height="small ? '16' : '24'"
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5422 11.9549V12.8749C22.541 15.0313 21.8256 17.1295 20.5028 18.8567C19.1801 20.5838 17.3208 21.8473 15.2022 22.4588C13.0837 23.0702 10.8194 22.9968 8.74714 22.2494C6.67484 21.5021 4.90554 20.121 3.70312 18.3119C2.5007 16.5029 1.92958 14.3629 2.07494 12.2112C2.2203 10.0594 3.07435 8.01119 4.50971 6.37194C5.94508 4.73268 7.88485 3.59025 10.0397 3.11501C12.1946 2.63977 14.4492 2.8572 16.4671 3.73486"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5389 4.87476L12.2941 14.8848L9.2207 11.8848"
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
