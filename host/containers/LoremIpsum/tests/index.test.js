import React from 'react';
import { render } from '@testing-library/react';

import LoremIpsum from '../index';

describe('<LoremIpsum />', () => {
  it('should render and match the snapshot', () => {
    const { asFragment } = render(<LoremIpsum />);
    const renderedOutput = asFragment();
    expect(renderedOutput).toMatchSnapshot();
  });
});
