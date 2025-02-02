<template>
  <div class="rounded bg-white p-4 shadow transition-colors duration-200" :class="{ 'ring-2 ring-blue-500': isSelected }" @click="$emit('select')">
    <h2 class="mb-2 text-2xl font-semibold">{{ trackName }}</h2>
    <div class="mb-2">
      <label class="block text-sm font-medium">Volume</label>
      <input type="range" min="0" max="1" step="0.01" v-model="volume" class="w-full" />
      <span>{{ volume }}</span>
    </div>
    <div class="mb-2">
      <label class="block text-sm font-medium">Panning</label>
      <input type="range" min="-1" max="1" step="0.01" v-model="panning" class="w-full" />
      <span>{{ panning }}</span>
    </div>
    <div class="mb-2 flex space-x-2">
      <button @click.stop="toggleMute" :class="mute ? 'bg-red-500' : 'bg-gray-500'" class="rounded px-4 py-2 text-white">Mute</button>
      <button @click.stop="toggleSolo" :class="solo ? 'bg-yellow-500' : 'bg-gray-500'" class="rounded px-4 py-2 text-white">Solo</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  trackName: {
    type: String,
    default: 'Track',
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select'])

const volume = ref(0.8)
const panning = ref(0)
const mute = ref(false)
const solo = ref(false)

const toggleMute = () => {
  mute.value = !mute.value
}

const toggleSolo = () => {
  solo.value = !solo.value
}
</script>

<style scoped lang="postcss">
/* No additional custom styles for now */
</style>
