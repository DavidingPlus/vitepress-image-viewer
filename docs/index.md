---
prev: false
next: false
layout: doc
outline: [2, 3]
sidebar: false
---

# vitepress-image-viewer 

VitePress image viewer with zoom, drag, fullscreen overlay, captions and download button. Automatically enhances all images on the page. Built with Vue 3. 

![npm](https://img.shields.io/npm/v/@davidingplus/vitepress-image-viewer)  
![license](https://img.shields.io/npm/l/%40davidingplus%2Fvitepress-image-viewer)


## Installation

```sh [npm]
npm i @davidingplus/vitepress-image-viewer
```

## Usage

### Configuration

```typescript  [docs/.vitepress/theme/index.ts]
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

## Examples

### Markdown Image

**Input:**

```md [example.md]
![Rolling hills, Moravia, Czech Republic.](/demo-2.jpg)
```

**Output:**

![Rolling hills, Moravia, Czech Republic.](/demo-2.jpg)

### HTML Image

**Input:**

```html [example.md]
<img src="/demo-3.jpg" alt="Nature, Landscape, Portrait display." />
```

**Output:**

<p align="center">
  <img src="/demo-3.jpg" alt="Nature, Landscape, Portrait display." width="400">
</p>

### Image using the Image Group plugin

<br/>

<Card title="@miletorix/vitepress-image-group" link="https://www.npmjs.com/package/@miletorix/vitepress-image-group" />

**Input:**

```vue
<ImageGroup
  :sources="[
    'demo-4.jpg'
  ]"
  type="manual"
  width="400px"
  caption="Japanese Waterfall."
/>
```

**Output:**

<ImageGroup
  :sources="[
    'demo-4.jpg'
  ]"
  type="manual"
  width="400px"
  caption="Japanese Waterfall."
/>

