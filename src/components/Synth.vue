<template>
  <div class="rounded bg-white p-4 shadow">
    <h2 class="mb-2 text-2xl font-semibold">Synth</h2>
    <div class="mb-4">
      <Oscilloscope :analyserNode="analyserNode" />
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label for="waveform" class="block text-sm font-medium">Waveform</label>
      <select id="waveform" v-model="waveform" @change="emitSettings" class="mt-1 block w-48 rounded">
        <option value="sine">Sine</option>
        <option value="square">Square</option>
        <option value="sawtooth">Sawtooth</option>
        <option value="triangle">Triangle</option>
      </select>
      <div class="flex items-center space-x-2">
        <span class="text-sm font-medium">Mono</span>
        <button
          @click="togglePolyphony"
          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
          :class="isPolyphonic ? 'bg-blue-600' : 'bg-gray-200'"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
            :class="isPolyphonic ? 'translate-x-6' : 'translate-x-1'"
          />
        </button>
        <span class="text-sm font-medium">Poly</span>
      </div>
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
const isPolyphonic = ref(false)

// Get analyser node for visualization
const analyserNode = AudioEngine.getAnalyser()

// Active note tracking
let activeNote = null // for monophonic mode
const activeNotes = new Map() // for polyphonic mode: note -> synth voice
let isNoteActive = false // for monophonic mode

const emitSettings = () => {
  emit('settingsChanged', {
    trackId: props.trackId,
    settings: {
      waveform: waveform.value,
      attack: parseFloat(attack.value),
      decay: parseFloat(decay.value),
      sustain: parseFloat(sustain.value),
      release: parseFloat(release.value),
      isPolyphonic: isPolyphonic.value,
    },
  })
}

const togglePolyphony = () => {
  isPolyphonic.value = !isPolyphonic.value
  // Release all active notes when switching modes
  if (isPolyphonic.value) {
    if (activeNote) {
      activeNote.release()
      activeNote = null
      isNoteActive = false
    }
  } else {
    activeNotes.forEach((voice) => voice.release())
    activeNotes.clear()
  }
  emitSettings()
}

// Method to trigger a note with current settings
const triggerNote = (note) => {
  if (isPolyphonic.value) {
    // In polyphonic mode, we can have multiple notes playing
    // If the note is already playing, release it first
    if (activeNotes.has(note)) {
      activeNotes.get(note).release()
      activeNotes.delete(note)
    }

    // Create new synth voice
    const voice = AudioEngine.createSynth({
      waveform: waveform.value,
      note,
      attack: parseFloat(attack.value),
      decay: parseFloat(decay.value),
      sustain: parseFloat(sustain.value),
      release: parseFloat(release.value),
    })

    voice.start()
    activeNotes.set(note, voice)
  } else {
    // Monophonic mode - only one note at a time
    if (!isNoteActive) {
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
}

// Method to release a note
const releaseNote = (note) => {
  if (isPolyphonic.value) {
    // In polyphonic mode, release only the specific note
    if (activeNotes.has(note)) {
      activeNotes.get(note).release()
      activeNotes.delete(note)
    }
  } else {
    // In monophonic mode, release the active note
    if (activeNote && isNoteActive) {
      activeNote.release()
      isNoteActive = false
    }
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
