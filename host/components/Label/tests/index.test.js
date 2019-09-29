import React from 'react';
import { render } from '@testing-library/react';

import Label from '../index';

describe('<Label />', () => {
  it('should render the label correctly', () => {
    const children = 'Text';
    const { container, queryByText } = render(<Label>{children}</Label>);
    const { childNodes } = container.querySelector('label');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });

  it('should display astriek when required is set to true', () => {
    const children = '* Text';
    const { container, queryByText } = render(<Label required>{children}</Label>);
    const { childNodes } = container.querySelector('label');
    expect(childNodes).toHaveLength(2);
    expect(queryByText(children)).not.toBeNull();
  });

  it('should not display astriek when required is set to false', () => {
    const children = '* Text';
    const { container, queryByText } = render(<Label required>{children}</Label>);
    const { childNodes } = container.querySelector('label');
    expect(childNodes).toHaveLength(2);
    expect(queryByText(children)).not.toBeNull();
  });
});
