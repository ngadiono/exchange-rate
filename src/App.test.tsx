import { render, screen } from '@testing-library/react';

import App from './App';

test('Component <App />', () => {
  const { container } = render(<App />);

  // Check <App /> should be rendered
  expect(container).toBeTruthy();
});
