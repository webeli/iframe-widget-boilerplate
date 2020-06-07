# iframe-widget-boilerplate

> React app rendered inside an iframe using [zoid], like a widget.

## Quick start

- Clone the git repo: `git clone --depth=1 https://github.com/sibiraj-sr/iframe-widget-boilerplate.git <YOUR_PROJECT_NAME>`
- Move to appropriate directory: `cd <YOUR_PROJECT_NAME>`
- Run `yarn` install required dependencies
- Run `yarn start` to start the webserver
- Visit `http://localhost:7297/` to view the app

## Usage

- Run `yarn build` to create optimized production build
- Load `widget-loader.js` file in `dist/js` to load the widget

### Sample installation script

```js
(function () {
  window.WIDGET_CONFIG = {
    ASSETS_URL: '<ASSETS_URL>',
  };

  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = `${window.WIDGET_CONFIG.ASSETS_URL}/js/widget-loader.js`;

  document.body.appendChild(scriptTag);
})();
```

[zoid]: https://github.com/krakenjs/zoid
