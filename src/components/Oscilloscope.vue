<template>
  <canvas ref="canvas" class="h-24 w-full rounded bg-black" :width="width" :height="height"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  analyserNode: {
    type: Object,
    required: true,
  },
})

const canvas = ref(null)
const width = 300
const height = 96
let animationId = null

const draw = () => {
  const canvasCtx = canvas.value.getContext('2d')
  const analyser = props.analyserNode
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  const drawOscilloscope = () => {
    animationId = requestAnimationFrame(drawOscilloscope)

    analyser.getByteTimeDomainData(dataArray)

    canvasCtx.fillStyle = 'rgb(0, 0, 0)'
    canvasCtx.fillRect(0, 0, width, height)
    canvasCtx.lineWidth = 2
    canvasCtx.strokeStyle = 'rgb(0, 255, 0)'
    canvasCtx.beginPath()

    const sliceWidth = width / bufferLength
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0
      const y = (v * height) / 2

      if (i === 0) {
        canvasCtx.moveTo(x, y)
      } else {
        canvasCtx.lineTo(x, y)
      }

      x += sliceWidth
    }

    canvasCtx.lineTo(width, height / 2)
    canvasCtx.stroke()
  }

  drawOscilloscope()
}

onMounted(() => {
  if (canvas.value && props.analyserNode) {
    draw()
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>
