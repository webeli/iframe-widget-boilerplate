export function install () {
  window.WIDGET_CONFIG = {
    ASSETS_URL: process.env.HOST_URL
  };

  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = `${window.WIDGET_CONFIG.ASSETS_URL || window.location.href}/js/widget-loader.js`;

  document.body.appendChild(scriptTag);
}

export default install;
