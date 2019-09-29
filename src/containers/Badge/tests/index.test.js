import React from 'react';
import { render } from '@testing-library/react';

import Badge from '../index';

describe('<Badge />', () => {
  it('should render and match the snapshot', () => {
    const { asFragment } = render(<Badge />);
    const renderedOutput = asFragment();
    expect(renderedOutput).toMatchSnapshot();
  });
});
