<img align="right" width="25%" src="https://raw.githubusercontent.com/twicpics/components/main/logo.png">

# TwicPics React-Native Components Sample

This is a sample React Native project for testing the [`@twicpics/components-react-native`](https://www.npmjs.com/package/@twicpics/components-react-native) 

This project uses [`Expo`](https://expo.dev/) which will allow you to launch a server for the `web`, a native `IOS` or `android` app.
Execution on a mobile device is possible via [`ExpoGo`](https://expo.dev/client).

Execution : `yarn && yarn start` then follow the instructions in the terminal.

# Installation

This project is ready to use. The different dependencies, and in particular [`@twicpics/components-react-native`](https://www.npmjs.com/package/@twicpics/components-react-native), are already added in the package.json.

# TwicPics configuration

## App.js

```jsx
// import TwicPics react components
import {installTwicPics} from '@twicpics/components-react-native';
...

...
installTwicPics( {
  // domain is mandatory
  "domain": "https://<your-domain>.twic.pics"
} );
...
```

# Usage

## your-page-or-component.js


```jsx
// this component will be used in place of an img element.
import { TwicImg } from '@twicpics/components-react-native';
...

return (
    <TwicImg
        src="path/to/your/image"
        alt="..."
        anchor="..."
        focus="auto..."
        preTransform="..."
        mode="your-mode" // cover by default
        ratio="your-ratio" // 1 by default. Can be 
        step="custom-step" // if set, this value will override config value
        style={styles.customImage}
    />
)

```
