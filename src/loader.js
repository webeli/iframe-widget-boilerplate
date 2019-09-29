import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './styles/frame.scss';

async function init () {
  try {
    const Module = await import(/* webpackChunkName: "bridge" */ './bridge');
    const createBridge = Module.default;
    const render = createBridge(window.WIDGET_CONFIG);
    render();
  } catch (err) {
    console.error('Unable to create bridge', err);
  }
}

init();
