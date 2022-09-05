import { render, screen } from '@testing-library/react';

import Empty from './Empty';

test('Component <Empty />', () => {
  const { container } = render(<Empty />);

  // Check <Empty /> should be rendered
  expect(container).toBeTruthy();

  // Check icon component present on the screen
  expect(container.getElementsByClassName('MuiSvgIcon-root').length).toBe(1);

  // Check "No data yet" present on the screen
  expect(screen.getByText('No data yet')).toBeInTheDocument();
});
