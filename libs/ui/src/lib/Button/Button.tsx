import { classnames } from '@jcioriente/classnames';
import { ButtonHTMLAttributes, ReactElement, useMemo } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonColor = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

type ButtonVariant = 'solid' | 'outline';

type CustomButtonProps = {
  /** The size of the button (small, medium, or large). */
  size?: ButtonSize;

  /** The color of the button (primary, secondary, danger, warning, or success). */
  color?: ButtonColor;

  /** The variant of the button (solid or outline). */
  variant?: ButtonVariant;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps;

/**
 * Button component that renders a button with the correct styles.
 */
export const sizeClasses = {
  sm: 'px-2.5 py-1.5 rounded text-xs',
  md: 'px-3 py-1.5 rounded-md text-sm',
  lg: 'px-4 py-2 rounded-lg text-sm',
};

export const variantColorClasses = {
  solid: {
    primary: 'text-white bg-primary hover:brightness-125',
    secondary: 'text-white bg-secondary hover:brightness-110',
    danger: 'text-white bg-danger hover:brightness-125',
    warning: 'text-white bg-warning hover:brightness-125',
    success: 'text-white bg-success hover:brightness-125',
  },
  outline: {
    primary:
      'border-x border-y border-opacity-20 hover:text-white border-primary hover:bg-primary text-primary focus-visible:outline-primary',
    secondary:
      'border-x border-y border-opacity-20 hover:text-white border-secondary hover:bg-secondary text-secondary',
    danger:
      'border-x border-y border-opacity-20 hover:text-white border-danger hover:bg-danger text-danger ',
    warning:
      'border-x border-y border-opacity-20 hover:text-white border-warning hover:bg-warning text-warning',
    success:
      'border-x border-y border-opacity-20 hover:text-white border-success hover:bg-success text-success',
  },
};

/**
 * Default props for the Button component.
 * Type `Required` is used to make sure that all the props are provided.
 *
 * @type {Required<CustomButtonProps>}
 * @property {ButtonSize} size - The size of the button.
 * @property {ButtonColor} color - The color of the button.
 * @property {ButtonVariant} variant - The variant of the button.
 */
const defaultProps: Required<CustomButtonProps> = {
  size: 'md',
  color: 'primary',
  variant: 'solid',
};

/**
 * Button component that renders a button with the correct styles.
 *
 * @param {ButtonProps} props - The button component props.
 * @returns {JSX.Element} The rendered button element.
 */
export function Button({
  children,
  className,
  variant = defaultProps.variant,
  size = defaultProps.size,
  color = defaultProps.color,
  ...props
}: ButtonProps): ReactElement<HTMLButtonElement> {
  const variantColorClass = useMemo(
    () => getVariantColorClasses(variant, color),
    [variant, color],
  );
  const sizeClass = useMemo(() => getSizeClasses(size), [size]);

  return (
    <button
      {...props}
      className={classnames(
        'rounded-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ',
        variantColorClass,
        sizeClass,
        className,
      )}
    >
      {children}
    </button>
  );
}

/**
 * Get the CSS class for the button's color based on its variant and color prop.
 *
 * @param {ButtonVariant} variant - The button's variant.
 * @param {ButtonColor} color - The button's color.
 * @returns {string} The CSS class for the button's color.
 */
function getVariantColorClasses(
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
      `The variant "${variant}" is not supported. Using the default variant "${defaultProps.variant}" instead.`,
      `Button.tsx:71`,
    );
    variantClass = defaultProps.variant;
  }

  let colorClass = color;
  if (!variantColorClasses[variantClass][color]) {
    console.warn(
      `The color "${color}" is not supported. Using the default color "${defaultProps.color}" instead.`,
      'Button.tsx:80',
    );
    colorClass = defaultProps.color;
  }

  return variantColorClasses[variantClass][colorClass];
}

/**
 * Get the CSS class for the button's size based on its size prop.
 *
 * @param {ButtonSize} size - The button's size.
 * @returns {string} The CSS class for the button's size.
 */
function getSizeClasses(size: ButtonSize): string {
  if (sizeClasses[size]) {
    return sizeClasses[size];
  }

  console.warn(
    `The size "${size}" is not supported. Using the default size "${defaultProps.size}" instead.`,
  );
  return sizeClasses[defaultProps.size];
}
