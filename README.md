# SANDBOX VUE TEMPLATE PROJECT

## Stack

- Vue 3
- Vite
- Tailwind
- PostCSS

## nvm, npm, and node

Make sure you have `npm` installed. Best to do this using `nvm`.

1. `nvm` installation instructions here: https://github.com/nvm-sh/nvm
2. `npm` and `node` installation, type: `nvm install --lts` which will install the latest lifetime support version of Nodejs.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload forDevelopment

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Using OpenRouter

1. Make a copy of the `.env.example` file, rename it `.env`

2. Grab the Openrouter API key from Lastpass

3. Add it to the `.env` file

4. Test generation on the HomeView!

## Required Cursor Extensions

1. **Vue Language Features (Volar)** - Offers advanced Vue language support. [Install here](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
2. **Tailwind CSS IntelliSense** - Provides intelligent suggestions and completions for Tailwind CSS. [Install here](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
3. **Prettier - Code formatter** - Provides consistent formatting for our code. [Install here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. **ESLint** - Integrates ESLint JavaScript into VS Code. [Install here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
5. **PostCSS Language Support** - Adds syntax highlighting and IntelliSense for PostCSS. [Install here](https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss)

## Prettier

We enforce code formatting with Prettier, using the rules in `package-lock.json`, to ensure consistency across our codebase. We also use the Tailwind CSS Prettier plugin, which standardizes the order of Tailwind CSS classes. This aids in maintaining a cohesive code style and simplifies merging by reducing conflicts, especially in fast moving collaborative projects.

## Creating a Page Theme

`src/index.css` contains a bunch of color sets that we've made. These are here for easy access to quickly build a theme **but are not accessible via tailwind** and **should not be used directly in any inline styles**. This allows us to effortlessly reskin these prototypes.

1. In `src/index.css`, define a class that sets the theme color CSS variables to whatever colors you want

```css
.page-theme-matthew {
  --color-theme-light: var(--color-satsuma-500);
  --color-theme-neutral: var(--color-satsuma-300);
  --color-theme-dark: var(--color-satsuma-900);
}
```

2. Set that class on the outer most div of the page you're working on

```html
<template>
  <div class="page-theme-matthew"></div>
</template>
```

3. Use the `theme-{role}` classes in your page

```html
<template>
  <div class="page-theme-matthew">
    <h1 class="bg-theme-neutral text-theme-light">I love my theme!</h1>
  </div>
</template>
```

> **Reminder:** _Only_ use the `theme` and `base` tailwind vars, so we can reskin quickly!
