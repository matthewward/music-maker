<template>
  <div class="rounded bg-white p-4 shadow">
    <h2 class="mb-2 text-2xl font-semibold">Synth</h2>
    <div class="mb-4">
      <Oscilloscope :analyserNode="analyserNode" />
    </div>
    <div class="mb-2">
      <label for="waveform" class="block text-sm font-medium">Waveform</label>
      <select id="waveform" v-model="waveform" @change="emitSettings" class="mt-1 block w-full rounded">
        <option value="sine">Sine</option>
        <option value="square">Square</option>
        <option value="sawtooth">Sawtooth</option>
        <option value="triangle">Triangle</option>
      </select>
    </div>
    <div class="mb-2 grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium">Attack</label>
        <input type="range" min="0" max="2" step="0.1" v-model="attack" @input="emitSettings" class="w-full" />
        <span>{{ attack }}s</span>
      </div>
      <div>
        <label class="block text-sm font-medium">Decay</label>
        <input type="range" min="0" max="2" step="0.1" v-model="decay" @input="emitSettings" class="w-full" />
        <span>{{ decay }}s</span>
      </div>
    </div>
    <div class="mb-2 grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium">Sustain</label>
        <input type="range" min="0" max="1" step="0.1" v-model="sustain" @input="emitSettings" class="w-full" />
        <span>{{ sustain }}</span>
      </div>
      <div>
        <label class="block text-sm font-medium">Release</label>
        <input type="range" min="0" max="3" step="0.1" v-model="release" @input="emitSettings" class="w-full" />
        <span>{{ release }}s</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import AudioEngine from '../audio/audioEngine.js'
import Oscilloscope from './Oscilloscope.vue'

const props = defineProps({
  trackId: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['settingsChanged'])

const waveform = ref('sine')
const attack = ref(0.1)
const decay = ref(0.1)
const sustain = ref(0.7)
const release = ref(0.2)

// Get analyser node for visualization
const analyserNode = AudioEngine.getAnalyser()

// Active note tracking
let activeNote = null
let isNoteActive = false

const emitSettings = () => {
  emit('settingsChanged', {
    trackId: props.trackId,
    settings: {
      waveform: waveform.value,
      attack: parseFloat(attack.value),
      decay: parseFloat(decay.value),
      sustain: parseFloat(sustain.value),
      release: parseFloat(release.value),
    },
  })
}

// Method to trigger a note with current settings
const triggerNote = (note) => {
  // Only create a new note if there isn't one active
  // This prevents retriggering on key repeat events
  if (!isNoteActive) {
    // Create new synth voice with current settings
    activeNote = AudioEngine.createSynth({
      waveform: waveform.value,
      note,
      attack: parseFloat(attack.value),
      decay: parseFloat(decay.value),
      sustain: parseFloat(sustain.value),
      release: parseFloat(release.value),
    })

    activeNote.start()
    isNoteActive = true
  }
}

// Method to release the currently playing note
const releaseNote = () => {
  if (activeNote && isNoteActive) {
    activeNote.release()
    isNoteActive = false
  }
}

// Expose methods to parent components
defineExpose({ triggerNote, releaseNote })

// Emit initial settings
emitSettings()
</script>

<style scoped lang="postcss">
/* No additional custom styles for now, using Tailwind for styling */
</style>
