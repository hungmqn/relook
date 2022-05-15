import React from 'react';

export type TextFieldSize = 'small' | 'medium' | 'large';
export type TextFieldType = 'submit' | 'reset' | 'textField';
export type TextFieldStatus = 'success' | 'warning' | 'danger' | 'error';

export type BaseTextFieldProps = {
  label?: string;
  type?: TextFieldType;
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  status?: TextFieldStatus;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement>;
  value?: string;
  className?: string;
  loading?: boolean;
  style?: React.CSSProperties;
};

export type TextFieldProps = BaseTextFieldProps;

const getTextFieldCssClasses = ({
  status,
}: {
  status: TextFieldStatus | undefined;
}) => {
  switch (status) {
    case 'success':
      return 'border-success dark:border-success-dark focus:border-success-dark dark:focus:border-success';
    case 'warning':
      return 'border-warning dark:border-warning-dark focus:border-warning-dark dark:focus:border-warning';
    case 'danger':
      return 'border-danger dark:border-danger-dark focus:border-danger-dark dark:focus:border-danger';
    case 'error':
      return 'border-error dark:border-error-dark focus:border-error-dark dark:focus:border-error';
    default:
      return '';
  }
};

const InternalTextField = (
  {
    label,
    autoFocus,
    type,
    disabled,
    name,
    status,
    onBlur,
    onChange,
    onFocus,
    onClick,
    placeholder,
    value,
    id,
    className,
    style,
    ...props
  }: TextFieldProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const textFieldCssClasses = getTextFieldCssClasses({ status });
  return (
    <div className="inline-block w-fit">
      {label && (
        <div className="inline-block w-36 pr-1">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <input
        type={type}
        className={`text-field ${className} ${textFieldCssClasses}`}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        style={style}
        autoFocus={autoFocus}
        name={name}
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
