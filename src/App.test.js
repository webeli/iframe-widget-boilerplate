import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMTestUtils from 'react-dom/test-utils';

import App from './App';

describe('Widget: <App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const xprops = { setFrameClass: jest.fn() };
    global.xprops = xprops;

    ReactDOMTestUtils.act(() => {
      ReactDOM.render(<App />, div);
    });

    expect(global.xprops.setFrameClass).toHaveBeenCalled();

    ReactDOM.unmountComponentAtNode(div);
  });
});
