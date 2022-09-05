import { render, screen } from '@testing-library/react';

import BtnAction from './BtnAction';

const props = {
  symbols: [{ symbol: 'SGD', name: 'Singapore Dollar' }],
  loadingSubmit: false,
  selectRatesLength: 1,
  handleAddRate: jest.fn(),
};

test('Component <BtnAction />', () => {
  const { container } = render(<BtnAction {...props} />);

  // Check <BtnAction /> should be rendered
  expect(container).toBeTruthy();
});
