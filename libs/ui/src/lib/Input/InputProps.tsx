import { InputHTMLAttributes } from 'react';

export type CustomInputProps = {
  label?: string;
  error?: boolean;
  helperText?: string;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  CustomInputProps;
