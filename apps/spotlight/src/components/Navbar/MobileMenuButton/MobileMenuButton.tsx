import { Bars3Icon, } from '@heroicons/react/24/outline';
import { ButtonHTMLAttributes } from 'react';

type MobileMenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isExpanded: boolean;
};

export function MobileMenuButton({ onClick, isExpanded }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={onClick}
      aria-expanded={isExpanded}
    >
      <span className="sr-only">Abrir menu principal</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
