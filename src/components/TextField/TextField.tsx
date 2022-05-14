import React from 'react';

export type TextFieldSize = 'small' | 'medium' | 'large';
export type TextFieldType = 'submit' | 'reset' | 'textField';

export type BaseTextFieldProps = {
  size?: TextFieldSize;
  type?: TextFieldType;
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readonly?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  value?: string;
  children?: React.ReactNode;
  text?: string | React.ReactNode;
  className?: string;
  loading?: boolean;
  style?: React.CSSProperties;
};

export type TextFieldProps = BaseTextFieldProps;

const InternalTextField = (
  {
    autoFocus,
    type,
    disabled,
    invalid,
    name,
    onBlur,
    onChange,
    onFocus,
    onClick,
    placeholder,
    readonly,
    size = 'medium',
    value,
    id,
    className,
    style,
    ...props
  }: TextFieldProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const textFieldCssClasses = '';
  return (
    <div
      className={`${className} transition-colors duration-300 border border-grey dark:border-grey-dark rounded-md px-1 text-base hover:border-black dark:focus:border-grey`}
      style={style}
    >
      <input
        type={type}
        className={`w-full bg-transparent outline-none ${textFieldCssClasses}`}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

const TextField = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<TextFieldProps>
>(InternalTextField);

export default TextField;
