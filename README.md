[![Published on NPM](https://img.shields.io/npm/v/@progressivewebcomponents/pwa-install.svg)](https://npmjs.com/package/@progressivewebcomponents/pwa-install)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@progressivewebcomponents/pwa-install)

A tiny vanilla (zero-dependency) non-visual native browser web component (plug-n-play custom HTML element and extensible class) that helps implement [custom patterns for promoting progressive web apps (PWA) installation](https://web.dev/articles/promote-install).

It's compatible with [Google Polymer](https://polymer-library.polymer-project.org) library data binding.

# Table of contents

- [API](#api)
  * [Methods](#methods)
  * [Properties](#properties)
  * [Attributes](#attributes)
  * [Events](#events)
- [Install](#install)
- [Import](#import)
  * [Local](#local)
    + [JS](#js)
    + [HTML](#html)
    + [Import maps](#import-maps)
      - [JS](#js-1)
      - [HTML](#html-1)
    + [Dev Servers / Builders](#dev-servers--builders)
      - [JS](#js-2)
      - [HTML](#html-2)
  * [CDN](#cdn)
    + [UNPKG](#unpkg)
      - [JS](#js-3)
      - [HTML](#html-3)
    + [ESM CDN](#esm-cdn)
      - [JS](#js-4)
      - [HTML](#html-4)
    + [Skypack](#skypack)
      - [JS](#js-5)
      - [HTML](#html-5)
- [Use](#use)
  * [HTML](#html-6)
  * [JS](#js-6)
    + [Use case](#use-case)
    + [Use case](#use-case-1)
  * [CSS](#css)
    + [Use case](#use-case-2)
  * [Lit](#lit)
  * [Polymer](#polymer)
    + [Use case](#use-case-3)
- [Customize](#customize)
- [Further reading](#further-reading)

# API

## Methods

| Method                    | Type                   | Modifiers |
|---------------------------|------------------------|-----------|
| `prompt`                  | `(): ?Promise<Object>` | async     |
| `getInstalledRelatedApps` | `(): ?Promise<Array>`  | async     |

## Properties

| Property                             | Type       | Modifiers |
|--------------------------------------|------------|-----------|
| `isInstallSupported`                 | `?boolean` | readonly  |
| `isInstallAvailable`                 | `?boolean` | readonly  |
| `platforms`                          | `?Array`   | readonly  |
| `choiceResult`                       | `?Object`  | readonly  |
| `isGetInstalledRelatedAppsSupported` | `?boolean` | readonly  |
| `relatedApps`                        | `?Array`   | readonly  |

## Attributes

| Attribute                                 | Type       | Modifiers |
|-------------------------------------------|------------|-----------|
| `is-install-supported`                    | `?boolean` | readonly  |
| `is-install-available`                    | `?boolean` | readonly  |
| `is-get-installed-related-apps-supported` | `?boolean` | readonly  |

## Events

| Event                                             | Bubbles | Composed |
|---------------------------------------------------|---------|----------|
| `pwa-install-available`                           | true    | true     |
| `pwa-install-installing`                          | true    | true     |
| `pwa-install-installed`                           | true    | true     |
| `pwa-install-error`                               | true    | true     |
| `is-install-supported-changed`                    | false   | false    |
| `is-install-available-changed`                    | false   | false    |
| `platforms-changed`                               | false   | false    |
| `choice-result-changed`                           | false   | false    |
| `is-get-installed-related-apps-supported-changed` | false   | false    |
| `related-apps-changed`                            | false   | false    |

# Install

```sh
npm i @progressivewebcomponents/pwa-install
```

# Import

## Local

### JS

```js
import './node_modules/@progressivewebcomponents/pwa-install/pwa-install.js';
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```js
  import { PWAInstall } from './node_modules/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  ```
</details>

### HTML

```html
<script
  type="module"
  src="./node_modules/@progressivewebcomponents/pwa-install/pwa-install.js"
>
</script>
```

```html
<script type="module">
  import './node_modules/@progressivewebcomponents/pwa-install/pwa-install.js';
</script>
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```html
  <script type="module">
    import { PWAInstall } from './node_modules/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  </script>
  ```
</details>

### Import maps

```html
<script type="importmap">
  {
    "imports": {
      "pwa-install": "./node_modules/@progressivewebcomponents/pwa-install/pwa-install.js",
      "pwa-install/": "./node_modules/@progressivewebcomponents/pwa-install/"
    }
  }
</script>
```

#### JS

```js
import 'pwa-install';
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```js
  import { PWAInstall } from 'pwa-install/pwa-install-class.js';
  ```
</details>

#### HTML

```html
<script type="module">
  import 'pwa-install';
</script>
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```html
  <script type="module">
    import { PWAInstall } from 'pwa-install/pwa-install-class.js';
  </script>
  ```
</details>

### Dev Servers / Builders

#### JS

```js
import '@progressivewebcomponents/pwa-install';
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```js
  import { PWAInstall } from '@progressivewebcomponents/pwa-install/pwa-install-class.js';
  ```
</details>

#### HTML

```html
<script type="module">
  import '@progressivewebcomponents/pwa-install';
</script>
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```html
  <script type="module">
    import { PWAInstall } from '@progressivewebcomponents/pwa-install/pwa-install-class.js';
  </script>
  ```
</details>

## CDN

### UNPKG

#### JS

```js
import 'https://unpkg.com/@progressivewebcomponents/pwa-install';
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```js
  import { PWAInstall } from 'https://unpkg.com/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  ```
</details>

#### HTML

```html
<script
  type="module"
  src="https://unpkg.com/@progressivewebcomponents/pwa-install"
>
</script>
```

```html
<script type="module">
  import 'https://unpkg.com/@progressivewebcomponents/pwa-install';
</script>
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```html
  <script type="module">
    import { PWAInstall } from 'https://unpkg.com/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  </script>
  ```
</details>

### ESM CDN

#### JS

```js
import 'https://esm.sh/@progressivewebcomponents/pwa-install';
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```js
  import { PWAInstall } from 'https://esm.sh/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  ```
</details>

#### HTML

```html
<script
  type="module"
  src="https://esm.sh/@progressivewebcomponents/pwa-install"
>
</script>
```

```html
<script type="module">
  import 'https://esm.sh/@progressivewebcomponents/pwa-install';
</script>
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```html
  <script type="module">
    import { PWAInstall } from 'https://esm.sh/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  </script>
  ```
</details>

### Skypack

#### JS

```js
import 'https://cdn.skypack.dev/@progressivewebcomponents/pwa-install';
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```js
  import { PWAInstall } from 'https://cdn.skypack.dev/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  ```
</details>

#### HTML

```html
<script
  type="module"
  src="https://cdn.skypack.dev/@progressivewebcomponents/pwa-install"
>
</script>
```

```html
<script type="module">
  import 'https://cdn.skypack.dev/@progressivewebcomponents/pwa-install';
</script>
```

<details>
  <summary>Advanced usage</summary>

  See the [Customize](#customize) section for how to use the code below:

  ```html
  <script type="module">
    import { PWAInstall } from 'https://cdn.skypack.dev/@progressivewebcomponents/pwa-install/pwa-install-class.js';
  </script>
  ```
</details>

# Use

## HTML

```html
<pwa-install id="a2hs"></pwa-install>
```

## JS

```js
const pwaInstall = document.getElementById('a2hs');
```

```js
const choiseResult = await pwaInstall.prompt();

const relatedApps = await pwaInstall.getInstalledRelatedApps();
```

```js
let isInstallSupportedPropertyValue = pwaInstall.isInstallSupported;

let isInstallAvailablePropertyValue = pwaInstall.isInstallAvailable;

let platformsPropertyValue = pwaInstall.platforms;

let choiceResultPropertyValue = pwaInstall.choiceResult;

let isGetInstalledRelatedAppsSupportedPropertyValue = pwaInstall.isGetInstalledRelatedAppsSupported;

let relatedAppsPropertyValue = pwaInstall.relatedApps;
```

```js
let isInstallSupportedAttributeValue = pwaInstall.hasAttribute('is-install-supported');

let isInstallAvailableAttributeValue = pwaInstall.hasAttribute('is-install-available');

let isGetInstalledRelatedAppsSupportedAttributeValue = pwaInstall.hasAttribute('is-get-installed-related-apps-supported');
```

```js
pwaInstall.addEventListener('pwa-install-available', handlePWAInstallAvailableEvent);

pwaInstall.addEventListener('pwa-install-installing', handlePWAInstallInstallingEvent);

pwaInstall.addEventListener('pwa-install-installed', handlePWAInstallInstalledEvent);

pwaInstall.addEventListener('pwa-install-error', handlePWAInstallErrorEvent);
```

```js
const handlePWAInstallAvailableEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handlePWAInstallInstallingEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handlePWAInstallInstalledEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handlePWAInstallErrorEvent = (event) => {
  // Use event.detail.message.error, event.detail.value and/or run any code
}
```

### Use case

Events can be used to collect telemetry on (promoting) PWA installation and send it to e.g. Google Analytics:

```js
const handlePWAInstallAvailableEvent = (event) => {
  window.gtag?.('event', 'pwa-install', {
    'state': 'available',
    'platforms': event.detail.value,
  });
}

const handlePWAInstallInstallingEvent = (event) => {
  window.gtag?.('event', 'pwa-install', {
    'state': 'installing',
    'outcome': event.detail.value?.outcome,
    'platform': event.detail.value?.platform,
  });
}

const handlePWAInstallInstalledEvent = (event) => {
  window.gtag?.('event', 'pwa-install', {
    'state': 'installed',
    'platform': event.detail.value?.platform,
  });
}

const handlePWAInstallErrorEvent = (event) => {
  window.gtag?.('event', 'pwa-install', {
    'state': 'error',
    'error': event.detail.message.error,
    'platform': event.detail.value?.platform,
  });
}
```

```js
pwaInstall.addEventListener('is-install-supported-changed', handleIsInstallSupportedPropertyChangedEvent);

pwaInstall.addEventListener('is-install-available-changed', handleIsInstallAvailablePropertyChangedEvent);

pwaInstall.addEventListener('platforms-changed', handlePlatformsPropertyChangedEvent);

pwaInstall.addEventListener('choice-result-changed', handleChoiceResultPropertyChangedEvent);

pwaInstall.addEventListener('is-get-installed-related-apps-supported-changed', handleIsGetInstalledRelatedAppsSupportedPropertyChangedEvent);

pwaInstall.addEventListener('related-apps-changed', handleRelatedAppsPropertyChangedEvent);
```

```js
const handleIsInstallSupportedPropertyChangedEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handleIsInstallAvailablePropertyChangedEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handlePlatformsPropertyChangedEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handleChoiceResultPropertyChangedEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handleIsGetInstalledRelatedAppsSupportedPropertyChangedEvent = (event) => {
  // Use event.detail.value and/or run any code
}

const handleRelatedAppsPropertyChangedEvent = (event) => {
  // Use event.detail.value and/or run any code
}
```

### Use case

Events can be used to update the property values:

```js
const handleIsInstallSupportedPropertyChangedEvent = (event) => {
  isInstallSupportedPropertyValue = event.detail.value;
}

const handleIsInstallAvailablePropertyChangedEvent = (event) => {
  isInstallAvailablePropertyValue = event.detail.value;
}

const handlePlatformsPropertyChangedEvent = (event) => {
  platformsPropertyValue = event.detail.value;
}

const handleChoiceResultPropertyChangedEvent = (event) => {
  choiceResultPropertyValue = event.detail.value;
}

const handleIsGetInstalledRelatedAppsSupportedPropertyChangedEvent = (event) => {
  isGetInstalledRelatedAppsSupportedPropertyValue = event.detail.value;
}

const handleRelatedAppsPropertyChangedEvent = (event) => {
  relatedAppsPropertyValue = event.detail.value;
}
```

## CSS

```css
#a2hs[is-install-supported]

#a2hs[is-install-available]

#a2hs[is-get-installed-related-apps-supported]
```

### Use case

CSS attribute selectors can be used to show/hide and/or style other HTML elements e.g. the UI for promoting PWA installation:

```html
<pwa-install id="a2hs"></pwa-install>

<button
  id="install"
  onclick="document.getElementById('a2hs').prompt()"
>
  Install
</button>
```

```css
#install {
  visibility: hidden;
}

:has(#a2hs[is-install-available]) #install {
  visibility: visible;
}
```

## Lit

```html
<pwa-install
  id="a2hs"

  @pwa-install-available="${this.handlePWAInstallAvailableEvent}"
  @pwa-install-installing="${this.handlePWAInstallInstallingEvent}"
  @pwa-install-installed="${this.handlePWAInstallInstalledEvent}"
  @pwa-install-error="${this.handlePWAInstallErrorEvent}"

  @is-install-supported-changed="${this.handleIsInstallSupportedPropertyChangedEvent}"
  @is-install-available-changed="${this.handleIsInstallAvailablePropertyChangedEvent}"
  @platforms-changed="${this.handlePlatformsPropertyChangedEvent}"
  @choice-result-changed="${this.handleChoiceResultPropertyChangedEvent}"
  @is-get-installed-related-apps-supported-changed="${this.handleIsGetInstalledRelatedAppsSupportedPropertyChangedEvent}"
  @related-apps-changed="${this.handleRelatedAppsPropertyChangedEvent}"
>
</pwa-install>
```

```js
const pwaInstall = this.shadowRoot.getElementById('a2hs');
```

## Polymer

```html
<pwa-install
  id="a2hs"

  is-install-supported="{{isInstallSupportedPropertyValue}}"
  is-install-available="{{isInstallAvailablePropertyValue}}"
  platforms="{{platformsPropertyValue}}"
  choice-result="{{choiceResultPropertyValue}}"
  is-get-installed-related-apps-supported="{{isGetInstalledRelatedAppsSupportedPropertyValue}}"
  related-apps="{{relatedAppsPropertyValue}}"

  on-pwa-install-available="handlePWAInstallAvailableEvent"
  on-pwa-install-installing="handlePWAInstallInstallingEvent"
  on-pwa-install-installed="handlePWAInstallInstalledEvent"
  on-pwa-install-error="handlePWAInstallErrorEvent"

  on-is-install-supported-changed="handleIsInstallSupportedPropertyChangedEvent"
  on-is-install-available-changed="handleIsInstallAvailablePropertyChangedEvent"
  on-platforms-changed="handlePlatformsPropertyChangedEvent"
  on-choice-result-changed="handleChoiceResultPropertyChangedEvent"
  on-is-get-installed-related-apps-supported-changed="handleIsGetInstalledRelatedAppsSupportedPropertyChangedEvent"
  on-related-apps-changed="handleRelatedAppsPropertyChangedEvent"
>
</pwa-install>
```

```js
const pwaInstall = this.$.a2hs;
```

### Use case

Property values can be used to show/hide and/or change the state of other HTML elements e.g. the UI for promoting PWA installation:

```html
<pwa-install
  id="a2hs"
  is-install-supported="{{isInstallSupportedPropertyValue}}"
  is-install-available="{{isInstallAvailablePropertyValue}}"
>
</pwa-install>

<button
  on-click="handleInstallButtonClickEvent"
  hidden$="[[!isInstallSupportedPropertyValue]]"
  disabled$="[[!isInstallAvailablePropertyValue]]"
>
  Install
</button>
```

```js
handleInstallButtonClickEvent() {
  this.$.a2hs.prompt();
}
```

# Customize

`PWAInstall` class can be imported without registering `<pwa-install>` custom HTML element. It can be used to register the web component with a different custom HTML element name:

```js
import { PWAInstall } from 'pwa-install/pwa-install-class.js';

customElements.define('your-custom-element-name', PWAInstall);
```

or customize the web component:

```js
import { PWAInstall } from 'pwa-install/pwa-install-class.js';

class YourCustomElement extends PWAInstall {
  // Add or override methods, properties, attributes, events, etc.
}

customElements.define('your-custom-element-name', YourCustomElement);
```

```html
<your-custom-element-name id="a2hs"></your-custom-element-name>
```

# Further reading

[Patterns for promoting PWA installation](https://web.dev/articles/promote-install)

[Native app install prompt](https://developer.chrome.com/blog/app-install-banners-native)

[Is your app installed? `getInstalledRelatedApps()` will tell you!](https://web.dev/articles/get-installed-related-apps)

[Detect if your native app is installed from your web site](https://medium.com/dev-channel/detect-if-your-native-app-is-installed-from-your-web-site-2e690b7cb6fb)

[What does it take to be installable?](https://web.dev/articles/install-criteria)

[Add a web app manifest](https://web.dev/articles/add-manifest)
