import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  DefaultProps,
} from './ButtonProps';

/**
 * Button component that renders a button with the correct styles.
 */
export const sizeClasses = {
  sm: 'px-2.5 py-1.5 rounded text-xs',
  md: 'px-3 py-1.5 rounded-md text-sm',
  lg: 'px-4 py-2 rounded-lg text-base',
};

export const variantColorClasses = {
  solid: {
    primary:
      'text-white bg-primary hover:brightness-125 focus-visible:outline-primary-light',
    secondary:
      'text-white bg-secondary hover:brightness-110 focus-visible:outline-secondary-light',
    danger:
      'text-white bg-danger hover:brightness-125 focus-visible:outline-danger-light',
    warning:
      'text-white bg-warning hover:brightness-125 focus-visible:outline-warning-light',
    success:
      'text-white bg-success hover:brightness-125 focus-visible:outline-success-light',
  },
  outline: {
    primary:
      'border-x border-y border-opacity-20 hover:text-white border-primary hover:bg-primary text-primary focus-visible:outline-primary-light',
    secondary:
      'border-x border-y border-opacity-20 hover:text-white border-secondary hover:bg-secondary text-secondary focus-visible:outline-secondary-light',
    danger:
      'border-x border-y border-opacity-20 hover:text-white border-danger hover:bg-danger text-danger focus-visible:outline-danger-light',
    warning:
      'border-x border-y border-opacity-20 hover:text-white border-warning hover:bg-warning text-warning focus-visible:outline-warning-light',
    success:
      'border-x border-y border-opacity-20 hover:text-white border-success hover:bg-success text-success focus-visible:outline-success-light',
  },
};

/**
 * Get the CSS class for the button's color based on its variant and color prop.
 *
 * @param {ButtonVariant} variant - The button's variant.
 * @param {ButtonColor} color - The button's color.
 * @returns {string} The CSS class for the button's color.
 */
export function getVariantColorClasses(
  variant: ButtonVariant,
  color: ButtonColor,
): string {
  // If the variant and color are supported, we use them.
  if (variantColorClasses[variant] && variantColorClasses[variant][color]) {
    return variantColorClasses[variant][color];
  }

  let variantClass = variant;
  if (!variantColorClasses[variant]) {
    console.warn(
      `The variant "${variant}" is not supported. Using the default variant "${DefaultProps.variant}" instead.`,
      `Button.tsx:21`,
    );
    variantClass = DefaultProps.variant;
  }

  let colorClass = color;
  if (!variantColorClasses[variantClass][color]) {
    console.warn(
      `The color "${color}" is not supported. Using the default color "${DefaultProps.color}" instead.`,
      'Button.tsx:24',
    );
    colorClass = DefaultProps.color;
  }

  return variantColorClasses[variantClass][colorClass];
}

/**
 * Get the CSS class for the button's size based on its size prop.
 *
 * @param {ButtonSize} size - The button's size.
 * @returns {string} The CSS class for the button's size.
 */
export function getSizeClasses(size: ButtonSize): string {
  if (sizeClasses[size]) {
    return sizeClasses[size];
  }

  console.warn(
    `The size "${size}" is not supported. Using the default size "${DefaultProps.size}" instead.`,
  );
  return sizeClasses[DefaultProps.size];
}
