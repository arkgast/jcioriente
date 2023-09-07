import { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success';

export type ButtonVariant = 'solid' | 'outline';

export type CustomButtonProps = {
  /** The size of the button (small, medium, or large). */
  size?: ButtonSize;

  /** The color of the button (primary, secondary, danger, warning, or success). */
  color?: ButtonColor;

  /** The variant of the button (solid or outline). */
  variant?: ButtonVariant;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CustomButtonProps;

/**
 * Default props for the Button component.
 * Type `Required` is used to make sure that all the props are provided.
 *
 * @type {Required<CustomButtonProps>}
 * @property {ButtonSize} size - The size of the button.
 * @property {ButtonColor} color - The color of the button.
 * @property {ButtonVariant} variant - The variant of the button.
 */
export const DefaultProps: Required<CustomButtonProps> = {
  size: 'md',
  color: 'primary',
  variant: 'solid',
};
