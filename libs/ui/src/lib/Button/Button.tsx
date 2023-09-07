import { classnames } from '@jcioriente/classnames';
import { ReactElement, useMemo } from 'react';
import { ButtonProps, DefaultProps } from './ButtonProps';
import { getSizeClasses, getVariantColorClasses } from './buttonClasses';

/**
 * Button component that renders a button with the correct styles.
 *
 * @param {ButtonProps} props - The button component props.
 * @returns {ReactElement<HTMLButtonElement>} The rendered button element.
 */
export function Button({
  children,
  className,
  variant = DefaultProps.variant,
  size = DefaultProps.size,
  color = DefaultProps.color,
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
        'font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ',
        variantColorClass,
        sizeClass,
        className,
      )}
    >
      {children}
    </button>
  );
}
