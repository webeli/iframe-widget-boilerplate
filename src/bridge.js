import 'core-js/stable';
import 'regenerator-runtime/runtime';

import zoid from 'zoid';

const CONTAINER_ID = '__iframe__';

// create a container for our document to render
const container = document.createElement('div');
container.setAttribute('id', CONTAINER_ID);
document.body.appendChild(container);

function createBridge () {
  const Bridge = zoid.create({
    tag: 'iframe-widget',
    url: `${process.env.HOST_URL}/widget.html`,
    dimensions: {
      width: '100%',
      height: '100%'
    },
    autoResize: {
      width: false,
      height: true
    }
  });

  return function () {
    return Bridge({
      setFrameClass (classNames) {
        container.classList = classNames;
      }
    }).render(`#${CONTAINER_ID}`);
  };
}

export default createBridge;
