import { render, screen } from '@testing-library/react';

import Header from './Header';

const props = {
  amount: 10,
  ratesLength: 1,
  onChangeAmount: jest.fn(),
};

test('Component <Header />', () => {
  const { container } = render(<Header {...props} />);

  // Check <Header /> should be rendered
  expect(container).toBeTruthy();

  // Check "USD - United States Dollars" present on the screen
  expect(screen.getByText('USD - United States Dollars')).toBeInTheDocument();

  // Check "USD" present on the screen
  expect(screen.getByText('USD')).toBeInTheDocument();
});
