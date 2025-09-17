# vitepress-image-viewer 

VitePress image viewer with zoom, drag, fullscreen overlay, captions and download button. Automatically enhances all images on the page. Built with Vue 3. 

![npm](https://img.shields.io/npm/v/@davidingplus/vitepress-image-viewer)  ![license](https://img.shields.io/npm/l/%40davidingplus%2Fvitepress-image-viewer)

## Live Demo and more information

✨ See it in action:  
👉 [https://davidingplus.github.io/vitepress-image-viewer/](https://davidingplus.github.io/vitepress-image-viewer/)

📦 NPM Package:  
👉 [https://www.npmjs.com/package/@davidingplus/vitepress-image-viewer](https://www.npmjs.com/package/@davidingplus/vitepress-image-viewer)

## Installation

```sh [npm]
npm i @davidingplus/vitepress-image-viewer
```

## Usage

### Configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import ImageViewerP from '@davidingplus/vitepress-image-viewer' //[!code ++]
import '@davidingplus/vitepress-image-viewer/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ImageViewerP(ctx.app) //[!code ++]
  }
}
```

## Preview

![preview](https://github.com/DavidingPlus/vitepress-image-viewer/raw/master/docs/assets/preview.gif)

