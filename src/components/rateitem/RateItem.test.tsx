import { render, screen } from '@testing-library/react';

import RateItem from './RateItem';

const props = {
  rate: 8.9,
  symbol: 'SGD',
  symbolName: 'Singapore Dollar',
  amount: 10,
  deleteRate: jest.fn(),
};

test('Component <RateItem />', () => {
  const { container } = render(<RateItem {...props} />);

  // Check <RateItem /> should be rendered
  expect(container).toBeTruthy();
});
