<style scoped lang="postcss"></style>

<template>
  <IntroModal
    v-if="showIntroModal"
    :title="introModalTitle"
    :content="introModalContentHtml"
    @modal-close="showIntroModal = false"
  />
  <ErrorModal v-if="showErrorModal" />

  <main>
    <h1>{{ pageTitle }}</h1>
    <button class="my-4" @click="generate">Generate AIM username</button>
    <div v-if="response" class="bg-black p-4 text-center text-pink-400">
      {{ response }}
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import IntroModal from '@/components/modals/IntroModal.vue'
import ErrorModal from '@/components/modals/ErrorModal.vue'
import { fetchOpenRouter } from '@/utils/api.js'

const pageTitle = ref('Hello World')
const showIntroModal = ref(false) //Set this to true when the app is launched
const introModalTitle = ref('Welcome')
const introModalContentHtml = ref(`<p class="mb-4">Intro goes here.</p>`)
const showErrorModal = ref(false)
const response = ref(null)

const generate = () => {
  const systemPrompt =
    'You generate cool AIM usernames from the 2000s. It should have decorative elements like *, _, X and ~ and anything else that makes sense, and be authentic to the era. It should contain pop culture references, like songs, celebrities, or trends from the era as well. Only return the username, nothing else.'
  const userPrompt = 'Give me a cool AIM username.'
  fetchOpenRouter([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ]).then((data) => {
    console.log(data)
    response.value = data
  })
}
</script>
