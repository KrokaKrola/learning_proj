import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', function () {
  it('should render sidebar', function () {
    renderComponent(<Sidebar />, { route: '/' });
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  it('toggle', function () {
    renderComponent(<Sidebar />, { route: '/' });
    const toggleButton = screen.getByTestId('Sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
