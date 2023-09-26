import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

const InputProps = forwardRef(
  (
    { className, ...props }: InputHTMLAttributes<HTMLInputElement>,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <input className={clsx('input-global', className)} {...props} ref={ref} />
    );
  }
);

export default InputProps;
