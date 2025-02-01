<style scoped lang="postcss">
.modal-mask {
  @apply fixed left-0 top-0 z-[1000000] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-lg;
}

.modal-container {
  @apply absolute left-[50%] top-[50%]  max-h-[320px] w-[calc(100%-4rem)] translate-x-[-50%] translate-y-[-50%];
  @apply max-w-[512px];
}

.modal-body {
  @apply body-sm mb-6 flex-grow overflow-y-auto;
}
</style>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div
        class="modal-container flex flex-col items-start rounded-3xl bg-white p-8"
      >
        <h4 class="modal-header mb-4">Hmm, that's not right.</h4>
        <div class="modal-body">
          Looks like we ran into an error.<br />Reload to try again.
        </div>
        <button class="w-full" @click.stop="onClick">Reload</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const onClick = () => {
  window.location.reload()
}
</script>
