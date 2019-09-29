import React from 'react';
import { render } from '@testing-library/react';

import Form from '../index';

describe('<Form />', () => {
  it('should render and match the snapshot', () => {
    const { asFragment } = render(<Form />);
    const renderedOutput = asFragment();
    expect(renderedOutput).toMatchSnapshot();
  });
});
