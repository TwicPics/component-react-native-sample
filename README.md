# TwicPics React-Native Components Sample

This is a sample React Native project for testing the [`@twicpics/components/react-native`](https://www.npmjs.com/package/@twicpics/components/react-native)

This project uses [`Expo`](https://expo.dev/) which will allow you to launch a server for the `web`, a native `IOS` or `android` app.
Execution on a mobile device is possible via [`ExpoGo`](https://expo.dev/client).

## How to build

### Using npm

```bash
$ npm install
$ npm run start

```

### Using yarn

```bash
$ yarn install
$ yarn start
```

## Overview

### What is [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components)?

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) is a **Responsive Image Service Solution** (SaaS) that enables **on-demand responsive image generation**.

With [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components), developers only deal with high-resolution versions of their media while end-users receive **optimized, perfectly sized, device-adapted** versions **delivered from a server close to them**.

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) acts as an **image proxy**. It requests your master image, be it on your own web server, cloud storage or DAM, then generates a **device-adapted** version with **best-in-class compression**, delivered directly to the end-user from the **closest delivery point** available.

### What is TwicPics Components?

TwicPics Components is a **collection of web components** that make it dead easy to unleash the power of [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) in your own projects.

Basically, TwicPics component replace `img` tags. It greatly and transparently optimize your CLS by providing LQIP (Low-Quality Image Placeholders) and Lazy Loading out of the box.

Simply replace this:

```html
<img src="https://assets.twicpics.com/examples/football.jpg" />
```

With this:

```html
<TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
```

Thanks to the open source [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) Components, delivering responsive images in your [Next.js](https://nextjs.org/) projects has never been easier.

## Installation

This project is ready to use. The different dependencies, and in particular [`@twicpics/components`](https://www.twicpics.com/docs/components/react-native), are already added in the package.json.

### TwicPics configuration

#### App.js

```jsx
// import TwicPics react components
import {installTwicPics} from '@twicpics/components/react-native';
...

...
installTwicPics( {
  // domain is mandatory
  "domain": "https://<your-domain>.twic.pics"
} );
...
```

### Usage

#### your-page-or-component.js

```jsx
// this component will be used in place of an img element.
import { TwicImg } from '@twicpics/components/react-native';
...

return (
    <TwicImg
        src="path/to/your/image"
        alt="..."
        anchor="..."
        focus="auto..."
        preTransform="..."
        mode="your-mode" // cover by default
        ratio="your-ratio" // 1 by default.
        step="custom-step" // if set, this value will override config value
        style={styles.customImage}
    />
)
```