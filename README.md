[![Published on NPM](https://img.shields.io/npm/v/@progressivewebcomponents/pwa-install.svg)](https://www.npmjs.com/package/@progressivewebcomponents/pwa-install)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@progressivewebcomponents/pwa-install)

## \<pwa-install\>

Progressive web apps install (add to home screen) vanilla web component.

## Install

```bash
npm i @progressivewebcomponents/pwa-install
```

Install web components polyfills (needed for older browsers):

```bash
npm i -D @webcomponents/webcomponentsjs
```

Alternatively, you can use [unpkg](https://unpkg.com).

## Import

Load web components polyfill (if needed):

```html
<script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```

### In JS files

```js
import '../node_modules/@progressivewebcomponents/pwa-install/pwa-install.js';
```

### In HTML files

#### ES Modules (recommended)

```html
<script type="module" src="../node_modules/@progressivewebcomponents/pwa-install/pwa-install.js"></script>
```

#### HTML Imports (deprecated)

```html
<link rel="import" href="../node_modules/@progressivewebcomponents/pwa-install/pwa-install.html">
```

## getInstalledRelatedApps

https://developers.chrome.com/origintrials/#/view_trial/855683929200394241

chrome://flags/#enable-experimental-web-platform-features

## Use

### Polymer

```html
<pwa-install
  id="a2hs"

  available="{{installAvailable}}"
  platforms="{{platforms}}"
  choice-result="{{choiceResult}}"
  supported="{{relatedAppsSupported}}"
  related-apps="{{relatedApps}}"

  on-pwa-install-available="handlePWAInstallAvailable"
  on-pwa-install-install="handlePWAInstall"
  on-pwa-install-installed="handlePWAInstalled"
  on-pwa-install-error="handlePWAInstallError"

  on-available-changed="handleAvailableChanged"
  on-platforms-changed="handlePlatformsChanged"
  on-choice-result-changed="handleChoiceResultChanged"
  on-supported-changed="handleSupportedChanged"
  on-related-apps-changed="handleRelatedAppsChanged">
</pwa-install>
```

```js
const pwaInstall = this.$.a2hs;

pwaInstall.install();

pwaInstall.getInstalledRelatedApps();
```

### LitHTML/LitElement

```html
<pwa-install
  id="a2hs"

  @pwa-install-available="${this.handlePWAInstallAvailable}"
  @pwa-install-install="${this.handlePWAInstall}"
  @pwa-install-installed="${this.handlePWAInstalled}"
  @pwa-install-error="${this.handlePWAInstallError}"

  @available-changed="${this.handleAvailableChanged}"
  @platforms-changed="${this.handlePlatformsChanged}"
  @choice-result-changed="${this.handleChoiceResultChanged}"
  @supported-changed="${this.handleSupportedChanged}"
  @related-apps-changed="${this.handleRelatedAppsChanged}">
</pwa-install>
```

```js
const pwaInstall = this.shadowRoot.getElementById('a2hs');

pwaInstall.install();

pwaInstall.getInstalledRelatedApps();
```

### Vanilla (without any frameworks/libraries)

```html
<pwa-install id="a2hs"></pwa-install>
```

```js
const pwaInstall = document.getElementById('a2hs');

pwaInstall.addEventListener('pwa-install-available', handlePWAInstallAvailable);
pwaInstall.addEventListener('pwa-install-install', handlePWAInstallInstall);
pwaInstall.addEventListener('pwa-install-installed', handlePWAInstallInstalled);
pwaInstall.addEventListener('pwa-install-error', handlePWAInstallError);

pwaInstall.addEventListener('available-changed', handleAvailableChanged);
pwaInstall.addEventListener('platforms-changed', handlePlatformsChanged);
pwaInstall.addEventListener('choice-result-changed', handleChoiceResultChanged);
pwaInstall.addEventListener('supported-changed', handleSupportedChanged);
pwaInstall.addEventListener('related-apps-changed', handleRelatedAppsChanged);

pwaInstall.install();

pwaInstall.getInstalledRelatedApps();
```

[Full live demo](https://pwa-install.web.app/vanilla/) ([source code](https://github.com/ProgressiveWebComponents/pwa-install/tree/master/demo/vanilla))

## Google Analytics

```js
handlePWAInstallAvailable() {
  if (window.ga) {
    ga('send', 'event', 'pwa-install', 'available', this.platforms);
  }
}

handlePWAInstallInstall() {
  if (window.ga) {
    ga('send', 'event', 'pwa-install', this.choiceResult.outcome, this.choiceResult.platform);
  }
}

handlePWAInstallInstalled() {
  if (window.ga) {
    ga('send', 'event', 'pwa-install', 'installed', this.choiceResult.platform);
  }
}

handlePWAInstallError() {
  if (window.ga) {
    ga('send', 'event', 'pwa-install', 'error', this.choiceResult.platform);
  }
}
```

## Further reading

[Patterns for Promoting PWA Installation (mobile)](https://developers.google.com/web/fundamentals/app-install-banners/promoting-install-mobile)

[Detect if your Native app is installed from your web site](https://medium.com/dev-channel/detect-if-your-native-app-is-installed-from-your-web-site-2e690b7cb6fb)
