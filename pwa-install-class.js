export class PWAInstall extends HTMLElement {
  static get is() {
    /**
     * @customElement pwa-install
     */
    return 'pwa-install';
  }

  get isInstallSupported() {
    return this._isInstallSupported;
  }

  set isInstallSupported(value) {
    this._isInstallSupported = value;
    /**
     * @attribute is-install-supported
     * @type {?boolean}
     * @readonly
     */
    if (value) {
      this.setAttribute('is-install-supported', '');
    } else {
      this.removeAttribute('is-install-supported');
    }
    /**
     * @event is-install-supported-changed
     */
    this.dispatchEvent(
      new CustomEvent('is-install-supported-changed', {
        detail: {
          value,
        },
      })
    );
  }

  get isInstallAvailable() {
    return this._isInstallAvailable;
  }

  set isInstallAvailable(value) {
    this._isInstallAvailable = value;
    /**
     * @attribute is-install-available
     * @type {?boolean}
     * @readonly
     */
    if (value) {
      this.setAttribute('is-install-available', '');
    } else {
      this.removeAttribute('is-install-available');
    }
    /**
     * @event is-install-available-changed
     */
    this.dispatchEvent(
      new CustomEvent('is-install-available-changed', {
        detail: {
          value,
        },
      })
    );
  }

  get platforms() {
    return this._platforms;
  }

  set platforms(value) {
    this._platforms = value;
    /**
     * @event platforms-changed
     */
    this.dispatchEvent(
      new CustomEvent('platforms-changed', {
        detail: {
          value,
        },
      })
    );
  }

  get choiceResult() {
    return this._choiceResult;
  }

  set choiceResult(value) {
    this._choiceResult = value;
    /**
     * @event choice-result-changed
     */
    this.dispatchEvent(
      new CustomEvent('choice-result-changed', {
        detail: {
          value,
        },
      })
    );
  }

  get isGetInstalledRelatedAppsSupported() {
    return this._isGetInstalledRelatedAppsSupported;
  }

  set isGetInstalledRelatedAppsSupported(value) {
    this._isGetInstalledRelatedAppsSupported = value;
    /**
     * @attribute is-get-installed-related-apps-supported
     * @type {?boolean}
     * @readonly
     */
    if (value) {
      this.setAttribute('is-get-installed-related-apps-supported', '');
    } else {
      this.removeAttribute('is-get-installed-related-apps-supported');
    }
    /**
     * @event is-get-installed-related-apps-supported-changed
     */
    this.dispatchEvent(
      new CustomEvent('is-get-installed-related-apps-supported-changed', {
        detail: {
          value,
        },
      })
    );
  }

  get relatedApps() {
    return this._relatedApps;
  }

  set relatedApps(value) {
    this._relatedApps = value;
    /**
     * @event related-apps-changed
     */
    this.dispatchEvent(
      new CustomEvent('related-apps-changed', {
        detail: {
          value,
        },
      })
    );
  }

  _onbeforeinstallprompt(event) {
    event.preventDefault();
    window.deferredInstallEvent = event;
    this.platforms = event.platforms;
    this.isInstallAvailable = true;
    /**
     * @event pwa-install-available
     */
    this.dispatchEvent(
      new CustomEvent('pwa-install-available', {
        detail: {
          value: event.platforms,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  _onappinstalled(event) {
    window.deferredInstallEvent = null;
    this.isInstallAvailable = false;
    /**
     * @event pwa-install-installed
     */
    this.dispatchEvent(
      new CustomEvent('pwa-install-installed', {
        detail: {
          value: this.choiceResult,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * @async
   * @method prompt
   * @return {?Promise<Object>}
   */
  async prompt() {
    if (this.isInstallSupported) {
      let choiceResult;
      try {
        this.isInstallAvailable = false;
        choiceResult = await window.deferredInstallEvent?.prompt();
        this.choiceResult = choiceResult;
        /**
         * @event pwa-install-installing
         */
        this.dispatchEvent(
          new CustomEvent('pwa-install-installing', {
            detail: {
              value: choiceResult,
            },
            bubbles: true,
            composed: true,
          })
        );
        return choiceResult;
      } catch (error) {
        /**
         * @event pwa-install-error
         */
        this.dispatchEvent(
          new CustomEvent('pwa-install-error', {
            detail: {
              value: choiceResult,
              message: {
                error,
              },
            },
            bubbles: true,
            composed: true,
          })
        );
        throw error;
      } finally {
        window.deferredInstallEvent = null;
      }
    }
  }

  /**
   * @async
   * @method getInstalledRelatedApps
   * @return {?Promise<Array>}
   */
  async getInstalledRelatedApps() {
    if (this.isGetInstalledRelatedAppsSupported) {
      try {
        const relatedApps = await navigator.getInstalledRelatedApps();
        this.relatedApps = relatedApps;
        return relatedApps;
      } catch (error) {
        /**
         * @event pwa-install-error
         */
        this.dispatchEvent(
          new CustomEvent('pwa-install-error', {
            detail: {
              message: {
                error,
              },
            },
            bubbles: true,
            composed: true,
          })
        );
        throw error;
      }
    }
  }

  constructor() {
    super();

    /**
     * @property isInstallSupported
     * @type {?boolean}
     * @readonly
     */
    this.isInstallSupported;

    /**
     * @property isInstallAvailable
     * @type {?boolean}
     * @readonly
     */
    this.isInstallAvailable;

    /**
     * @property platforms
     * @type {?Array}
     * @readonly
     */
    this.platforms;

    /**
     * @property choiceResult
     * @type {?Object}
     * @readonly
     */
    this.choiceResult;

    /**
     * @property isGetInstalledRelatedAppsSupported
     * @type {?boolean}
     * @readonly
     */
    this.isGetInstalledRelatedAppsSupported;

    /**
     * @property relatedApps
     * @type {?Array}
     * @readonly
     */
    this.relatedApps;

    this._onbeforeinstallprompt = this._onbeforeinstallprompt.bind(this);
    this._onappinstalled = this._onappinstalled.bind(this);
  }

  connectedCallback() {
    // Set property values in `connectedCallback()` instead of `constructor()` for compatibility with Google Polymer library data binding
    this.isInstallSupported = 'BeforeInstallPromptEvent' in window;
    this.isGetInstalledRelatedAppsSupported = 'getInstalledRelatedApps' in navigator;
    this.getInstalledRelatedApps();
    window.addEventListener('beforeinstallprompt', this._onbeforeinstallprompt);
    window.addEventListener('appinstalled', this._onappinstalled);
  }

  disconnectedCallback() {
    window.removeEventListener('beforeinstallprompt', this._onbeforeinstallprompt);
    window.removeEventListener('appinstalled', this._onappinstalled);
  }
}
