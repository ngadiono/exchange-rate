import { render, screen } from '@testing-library/react';

import Loading from './Loading';

test('Component <Loading />', () => {
  const { container } = render(<Loading />);

  // Check <Loading /> should be rendered
  expect(container).toBeTruthy();

  // Check icon component present on the screen
  expect(container.getElementsByClassName('MuiCircularProgress-root').length).toBe(1);

  // Check "Loading..." present on the screen
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
