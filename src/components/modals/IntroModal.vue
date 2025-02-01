<style scoped lang="postcss">
.modal-mask {
  @apply fixed left-0 top-0 z-[1000000] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-lg;
}

.modal-container {
  /* All the positioning stuff, starting mobile-first to occupy the screen */
  @apply absolute bottom-4 left-4 right-4 top-4;
  /* Then managing the width and height on bigger screens, always centering */
  @apply sm:left-[50%] sm:top-[50%] sm:h-[calc(100vh-64px)] sm:max-h-[640px] sm:max-w-[512px] sm:translate-x-[-50%] sm:translate-y-[-50%];
}

.modal-body {
  @apply body-sm mb-8 flex-grow overflow-y-auto;

  /* iOS-like scrollbar styles */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    border: 2px solid transparent;
  }
}
</style>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div
        class="modal-container flex flex-col items-start rounded-3xl bg-white p-8"
        ref="modalContainer"
      >
        <div class="modal-header mb-4">
          <h3>{{ title }}</h3>
        </div>
        <div class="modal-body" v-html="content"></div>
        <button class="mt-auto w-full" @click.stop="onCloseClick">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  title: String,
  content: String,
})

const emit = defineEmits(['modal-close'])

const onCloseClick = () => {
  emit('modal-close')
}

const modalContainer = ref(null)
onClickOutside(modalContainer, onCloseClick)
</script>
