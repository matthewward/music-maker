/* Audio engine module providing basic Web Audio functionality */

const AudioEngine = {
  audioContext: null,
  analyserNode: null,
  playhead: 0,
  isPlaying: false,

  // Note to frequency mapping (middle C = C4 = MIDI note 60)
  noteToFreq(note) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const octave = parseInt(note.slice(-1))
    const noteIndex = notes.indexOf(note.slice(0, -1))

    if (noteIndex === -1) return 440 // Default to A4 if note not found

    // Calculate MIDI note number (A4 = 69)
    const midiNote = octave * 12 + noteIndex + 12 // +12 to start from C

    // Convert MIDI note to frequency (A4 = 440Hz)
    return 440 * Math.pow(2, (midiNote - 69) / 12)
  },

  // Initialize the AudioContext if not already initialized
  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()

      // Create and configure analyser node
      this.analyserNode = this.audioContext.createAnalyser()
      this.analyserNode.fftSize = 2048
      this.analyserNode.connect(this.audioContext.destination)

      console.log('AudioContext and Analyser initialized')
    }
  },

  // Start playback: resume audio context if needed and set playback state
  start() {
    this.init()
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume()
    }
    this.isPlaying = true
    console.log('Playback started')
    // TODO: integrate sequencer logic here
  },

  // Stop playback: reset playhead and update playback state
  stop() {
    this.isPlaying = false
    this.playhead = 0 // Reset playhead
    console.log('Playback stopped, playhead reset to 0')
    // TODO: stop the sequencer if running
  },

  // Create a synth voice with ADSR envelope and specified parameters
  createSynth(params = {}) {
    this.init()

    const { waveform = 'sine', note = 'A4', attack = 0.1, decay = 0.1, sustain = 0.7, release = 0.2, volume = 0.8, panning = 0 } = params

    // Create oscillator
    const osc = this.audioContext.createOscillator()
    osc.type = waveform
    osc.frequency.value = this.noteToFreq(note)

    // Create gain node for envelope
    const gainNode = this.audioContext.createGain()
    gainNode.gain.value = 0

    // Create panner node
    const pannerNode = this.audioContext.createStereoPanner()
    pannerNode.pan.value = panning

    // Create volume node
    const volumeNode = this.audioContext.createGain()
    volumeNode.gain.value = volume

    // Connect the nodes
    osc.connect(gainNode)
    gainNode.connect(pannerNode)
    pannerNode.connect(volumeNode)
    volumeNode.connect(this.analyserNode)

    // Return an object representing the synth voice with methods to control it
    return {
      oscillator: osc,
      gain: gainNode,
      panner: pannerNode,
      volume: volumeNode,

      // Start the note with ADSR envelope
      start() {
        const now = this.context.currentTime
        osc.start(now)

        // Attack
        gainNode.gain.setValueAtTime(0, now)
        gainNode.gain.linearRampToValueAtTime(1, now + attack)

        // Decay to sustain level
        gainNode.gain.linearRampToValueAtTime(sustain, now + attack + decay)
      },

      // Release the note
      release() {
        const now = this.context.currentTime
        gainNode.gain.linearRampToValueAtTime(0, now + release)
        osc.stop(now + release + 0.1)
      },

      // Update parameters in real-time
      setVolume(value) {
        volumeNode.gain.value = value
      },

      setPanning(value) {
        pannerNode.pan.value = value
      },

      context: this.audioContext,
    }
  },

  // Get the analyser node for visualization
  getAnalyser() {
    this.init()
    return this.analyserNode
  },
}

export default AudioEngine
