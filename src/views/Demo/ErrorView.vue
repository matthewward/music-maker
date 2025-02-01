<template>
  <main>
    <section>
      <!-- Button to toggle the error modal -->
      <button @click="showErrorModal = true">Show Error Modal</button>
      <!-- Pass the showErrorModal variable as a prop to control visibility -->
      <ErrorModal v-if="showErrorModal" />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ErrorModal from '@/components/modals/ErrorModal.vue'

const showErrorModal = ref(false)
</script>
