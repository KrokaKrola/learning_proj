import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar', function () {
  it('should render sidebar', function () {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  it('toggle', function () {
    renderWithTranslations(<Sidebar />);
    const toggleButton = screen.getByTestId('Sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
