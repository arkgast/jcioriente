import { classnames } from '@jcioriente/classnames';
import { InputProps } from './InputProps';
import { inputClasses } from './inputClasses';

export function Input({ label, error, helperText, ...props }: InputProps) {
  return (
    <>
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          {...props}
          {...(error &&
            helperText && {
              'aria-describedby': `${props.id}-error-helper-text`,
            })}
          className={classnames(
            inputClasses.base,
            inputClasses.border,
            inputClasses.ring,
            inputClasses.focus,
            error && inputClasses.error,
          )}
        />
      </div>
      {error && helperText && (
        <p className="">
          <span
            id={`${props.id}-error-helper-text`}
            className="text-red-500 text-sm"
          >
            {helperText}
          </span>
        </p>
      )}
    </>
  );
}
