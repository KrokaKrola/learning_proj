import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', function () {
  it('with only first param', function () {
    render(<Button>Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('with Clear theme', function () {
    render(<Button theme={ButtonTheme.CLEAR}>Hello</Button>);
    expect(screen.getByText('Hello')).toHaveClass('clear');
  });
});
