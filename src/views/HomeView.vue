<style scoped lang="postcss">
/********************
 * No specific styles now, using Tailwind for styling
 ********************/
</style>

<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="mb-4">
      <h1 class="text-center text-4xl font-bold">Music Maker</h1>
    </header>
    <div class="mb-4 flex justify-center space-x-4">
      <button @click="handlePlay" class="rounded bg-green-500 px-4 py-2 text-white">Play</button>
      <button @click="handleStop" class="rounded bg-red-500 px-4 py-2 text-white">Stop</button>
      <button @click="toggleMusicalTyping" class="rounded px-4 py-2 text-white" :class="musicalTypingEnabled ? 'bg-purple-500' : 'bg-gray-500'">
        Musical Typing {{ musicalTypingEnabled ? 'On' : 'Off' }}
      </button>
    </div>
    <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div v-for="n in 4" :key="n" class="flex flex-col gap-4">
        <Track :trackName="`Track ${n}`" :isSelected="selectedTrack === n" @select="selectTrack(n)" />
        <Synth :ref="(el) => (synthRefs[n - 1] = el)" :trackId="n" @settingsChanged="handleSynthSettingsChanged" />
      </div>
    </div>
    <StepSequencer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AudioEngine from '../audio/audioEngine.js'
import Track from '../components/Track.vue'
import Synth from '../components/Synth.vue'
import StepSequencer from '../components/StepSequencer.vue'

const selectedTrack = ref(1) // Default to first track
const musicalTypingEnabled = ref(false)
const synthRefs = ref([])
const synthSettings = ref(Array(4).fill(null))

// Track which keys are currently pressed to prevent repeat triggers
const activeKeys = new Set()

const handlePlay = () => {
  AudioEngine.start()
}

const handleStop = () => {
  AudioEngine.stop()
}

const selectTrack = (trackNumber) => {
  selectedTrack.value = trackNumber
}

const toggleMusicalTyping = () => {
  musicalTypingEnabled.value = !musicalTypingEnabled.value
}

const handleSynthSettingsChanged = ({ trackId, settings }) => {
  synthSettings.value[trackId - 1] = settings
}

// Musical typing keyboard mapping
const keyboardNotes = {
  // Lower octave (C4-B4)
  a: 'C4',
  w: 'C#4',
  s: 'D4',
  e: 'D#4',
  d: 'E4',
  f: 'F4',
  t: 'F#4',
  g: 'G4',
  y: 'G#4',
  h: 'A4',
  u: 'A#4',
  j: 'B4',
  // Higher octave (C5-A5)
  k: 'C5',
  o: 'C#5',
  l: 'D5',
  p: 'D#5',
  ';': 'E5',
  "'": 'F5',
  ']': 'F#5',
}

const handleKeyDown = (event) => {
  if (!musicalTypingEnabled.value) return

  const key = event.key.toLowerCase()
  // Prevent repeat triggers from key held down
  if (activeKeys.has(key)) return

  const note = keyboardNotes[key]
  if (note) {
    activeKeys.add(key)
    const selectedSynth = synthRefs.value[selectedTrack.value - 1]
    if (selectedSynth) {
      selectedSynth.triggerNote(note)
    }
  }
}

const handleKeyUp = (event) => {
  if (!musicalTypingEnabled.value) return

  const key = event.key.toLowerCase()
  const note = keyboardNotes[key]
  if (note) {
    activeKeys.delete(key)
    const selectedSynth = synthRefs.value[selectedTrack.value - 1]
    if (selectedSynth) {
      selectedSynth.releaseNote()
    }
  }
}

// Set up and clean up keyboard event listeners
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
})
</script>
