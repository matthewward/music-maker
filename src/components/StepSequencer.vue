<template>
  <div>
    <h2 class="mb-2 text-center text-2xl font-semibold">Step Sequencer</h2>
    <div class="flex justify-center space-x-2">
      <div
        v-for="(step, index) in steps"
        :key="index"
        @click="toggleStep(index)"
        :class="['h-8 w-8 cursor-pointer rounded', step ? 'bg-blue-500' : 'bg-gray-300', currentStep === index ? 'border-2 border-red-500' : '']"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Create a reactive array of 16 steps, defaulting to false (off)
const steps = reactive(new Array(16).fill(false))

// currentStep to track the active playhead (for now, -1 means inactive)
const currentStep = ref(-1)

// Toggle a step on click
const toggleStep = (index) => {
  steps[index] = !steps[index]
}
</script>

<style scoped lang="postcss">
/* No additional custom styles; Tailwind is used for basic styling */
</style>
