<style scoped lang="postcss"></style>

<template>
  <main
    :class="themes[currentThemeIndex]"
    class="relative flex flex-col space-y-10 p-4"
  >
    <h1>SANDBOX</h1>

    <div>
      <div class="caption">Icons</div>
      <div class="flex flex-wrap">
        <SearchIcon class="text-theme-neutral hover:text-theme-dark" />
        <SettingsIcon />
        <ContactIcon />
        <ImageIcon />
        <GridIcon />
        <ListIcon />
        <LeftArrowIcon />
        <RightArrowIcon />
        <PlayIcon />
        <PauseIcon />
        <CloseIcon />
        <CheckIcon />
        <WarningIcon />
        <DropdownIcon />

        <AddIcon />
      </div>
    </div>

    <div>
      <div class="caption">Icon sizes</div>
      <div class="flex">
        <ImageIcon />
        <ImageIcon small />
      </div>
    </div>

    <div>
      <div class="caption">Fonts</div>
      <p class="font-sans text-theme-neutral">
        SANS Hope you're having a nice day! ;-)
      </p>
      <p class="font-serif text-theme-neutral">
        SERIF Hope you're having a nice day! ;-)
      </p>
      <p class="font-mono text-theme-neutral">
        MONO Hope you're having a nice day! ;-)
      </p>
    </div>
    <div>
      <p class="caption">Current Theme</p>
      <p>
        {{ currentThemeIndex == 0 ? 'default' : themes[currentThemeIndex] }}
      </p>

      <div class="flex w-fit overflow-clip rounded-lg border">
        <div>
          <p class="text-black">light</p>
          <div class="h-20 w-40 bg-theme-light"></div>
        </div>
        <div>
          <p class="text-black">neutral</p>
          <div class="h-20 w-40 bg-theme-neutral"></div>
        </div>
        <div>
          <p class="text-black">dark</p>
          <div class="h-20 w-40 bg-theme-dark"></div>
        </div>
      </div>

      <div class="flex w-fit overflow-clip rounded-lg border bg-theme-neutral">
        <div>
          <p class="text-black">white</p>
          <div class="h-20 w-40 bg-white"></div>
        </div>
        <div>
          <p class="text-black">white 75%</p>
          <div class="h-20 w-40 bg-white-75%"></div>
        </div>
        <div>
          <p class="text-black">white 50%</p>
          <div class="h-20 w-40 bg-white-50%"></div>
        </div>
      </div>

      <div class="flex w-fit overflow-clip rounded-lg border bg-theme-neutral">
        <div>
          <p class="text-black">black 12%</p>
          <div class="h-20 w-40 bg-black-12%"></div>
        </div>
        <div>
          <p class="text-black">black 50%</p>
          <div class="h-20 w-40 bg-black-50%"></div>
        </div>
        <div>
          <p class="text-black">black</p>
          <div class="h-20 w-40 bg-black"></div>
        </div>
      </div>
    </div>

    <div>
      <div class="caption">Buttons</div>
      <button @click="updateTheme" class="mt-2">Change Theme</button>
      <a href="" class="button">I'm a link</a>
      <div class="button">I'm a div</div>
    </div>

    <div>
      <div class="caption">Inputs</div>
      <div class="mt-2">
        <input type="text" class="input mr-2" placeholder="I'm an input" />
        <input type="text" class="input" placeholder="I'm also input" />
      </div>
    </div>

    <div>
      <div class="caption">Typestack</div>
      <h1 class="h1-xl">This is an h1-xl</h1>
      <h1 class="h1-lg">This is an h1-lg</h1>
      <h1>This is an h1</h1>
      <h2>This is an h2</h2>
      <h3>This is an h3</h3>
      <h4>This is an h4</h4>
      <h5>This is an h5</h5>
      <p class="body-lg">This is a body large</p>
      <p>This is a body</p>
      <p class="body-sm">This is a body small</p>
      <p class="caption">This is a caption</p>
    </div>

    <MarkdownRenderer
      :content="`# This is markdown! \n **Hello** _world_! \n * ~~Very cool~~ `"
    />

    <img src="/assets/images/test.png" alt="test" class="h-8 w-8" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SearchIcon from '@/icons/SearchIcon.vue'
import CheckIcon from '@/icons/CheckIcon.vue'
import ContactIcon from '@/icons/ContactIcon.vue'
import DropdownIcon from '@/icons/DropdownIcon.vue'
import CloseIcon from '@/icons/CloseIcon.vue'
import GridIcon from '@/icons/GridIcon.vue'
import ImageIcon from '@/icons/ImageIcon.vue'
import LeftArrowIcon from '@/icons/LeftArrowIcon.vue'
import ListIcon from '@/icons/ListIcon.vue'
import PauseIcon from '@/icons/PauseIcon.vue'
import PlayIcon from '@/icons/PlayIcon.vue'
import RightArrowIcon from '@/icons/RightArrowIcon.vue'
import SettingsIcon from '@/icons/SettingsIcon.vue'
import WarningIcon from '@/icons/WarningIcon.vue'
import AddIcon from '@/icons/AddIcon.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const themes = ['', 'page-theme-matthew', 'page-theme-lorraine']
const currentThemeIndex = ref(0)

const updateTheme = () => {
  currentThemeIndex.value = (currentThemeIndex.value + 1) % themes.length
}
</script>
