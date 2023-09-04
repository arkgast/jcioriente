import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Icon, IconNames } from './Icon';

describe('Icon', () => {
  it('should render successfully', () => {
    const { queryByTestId } = render(<Icon name={IconNames.TikTok} />);

    const icon = queryByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render the correct icon', () => {
    const { queryByTestId } = render(<Icon name={IconNames.TikTok} />);
    const icon = queryByTestId('icon');
    expect(icon).toHaveClass('tiktok-icon');
  });

  it('should render the correct additional classes', () => {
    const { queryByTestId } = render(
      <Icon name={IconNames.TikTok} className="w-4 h-4" />,
    );
    const icon = queryByTestId('icon');
    expect(icon).toHaveClass('w-4 h-4');
  });
});
