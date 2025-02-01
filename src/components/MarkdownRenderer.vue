<style lang="postcss">
.markdown-wrapper {
  @apply font-sans;
  color: #282828;
  font-size: 14px;
  line-height: 1.6;

  p {
    margin-bottom: 12px;
  }
  h1 {
    font-size: 24px;
    line-height: 28px;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  h2 {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
    padding-top: 8px;
  }

  h3 {
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  h4 {
    font-size: 14px;
    margin-bottom: 4px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    @apply font-medium;
  }

  ul {
    padding-left: 24px;
    margin-bottom: 12px;

    ul {
      margin-top: 4px;
      margin-bottom: 4px;
    }

    li {
      list-style: disc;
      line-height: 1.2;
      margin-bottom: 8px;
    }
  }
}
</style>

<template>
  <div class="markdown-wrapper" v-html="md.render(content)"></div>
</template>

<script setup>
import markdownit from 'markdown-it'

const md = markdownit()
const props = defineProps(['content'])
</script>
