import { render } from '@testing-library/react';
import { Input } from './Input';
import { inputClasses } from './inputClasses';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the label', () => {
    const { getByText } = render(<Input label="Name" />);
    expect(getByText('Name')).toBeTruthy();
  });

  it('should render the helper text when error is true', () => {
    const { getByText } = render(
      <Input label="Name" error helperText="Helper text" />,
    );
    expect(getByText('Helper text')).toBeTruthy();
  });

  it('should not render the helper text when error is false', () => {
    const { queryByText } = render(
      <Input label="Name" helperText="Helper text" />,
    );
    expect(queryByText('Helper text')).toBeFalsy();
  });

  it('should render the error state', () => {
    const { getByRole } = render(<Input label="Name" error />);
    const input = getByRole('textbox');
    expect(input.getAttribute('class')).toContain(inputClasses.error);
  });
});
