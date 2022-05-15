import React from 'react';
import Spacer from '../Spacer';

export type ButtonVariant = 'filled' | 'outlined' | 'link';
export type ButtonIntent =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'error';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'submit' | 'reset' | 'button';

export type BaseButtonProps = {
  variant?: ButtonVariant;
  intent?: ButtonIntent;
  size?: ButtonSize;
  type?: ButtonType;
};

export type ButtonProps = BaseButtonProps & {
  children?: React.ReactNode;
  text?: string | React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};

const getButtonCssClasses = ({
  variant = 'filled',
  intent = 'primary',
}: BaseButtonProps): string => {
  switch (variant) {
    case 'filled':
      switch (intent) {
        case 'primary':
          return `bg-primary dark:bg-primary-dark`;
        case 'success':
          return `bg-success dark:bg-success-dark`;
        case 'warning':
          return `bg-warning dark:bg-warning-warning`;
        case 'danger':
          return `bg-danger dark:bg-danger-dark`;
        case 'error':
          return `bg-error dark:bg-error-dark`;
        default:
          return 'bg-primary dark:bg-primary-dark';
      }
    case 'outlined':
      switch (intent) {
        case 'primary':
          return `bg-transparent border border-primary dark:border-primary-dark text-primary dark:text-primary-dark`;
        case 'success':
          return `bg-transparent border border-success dark:border-success-dark text-success dark:text-success-dark`;
        case 'warning':
          return `bg-transparent border border-warning dark:border-warning-dark text-warning dark:text-warning-dark`;
        case 'danger':
          return `bg-transparent border border-danger dark:border-danger-dark text-danger dark:text-danger-dark`;
        case 'error':
          return `bg-transparent border border-error dark:border-error-dark text-error dark:text-error-dark`;
        default:
          return 'bg-transparent border border-primary dark:border-primary-dark text-primary dark:text-primary-dark';
      }
    case 'link':
      switch (intent) {
        case 'primary':
          return `bg-transparent border-none text-primary dark:text-primary-dark`;
        case 'success':
          return `bg-transparent border-none text-success dark:text-success-dark`;
        case 'warning':
          return `bg-transparent border-none text-warning dark:text-warning-dark`;
        case 'danger':
          return `bg-transparent border-none text-danger dark:text-danger-dark`;
        case 'error':
          return `bg-transparent border-none text-error dark:text-error-dark`;
        default:
          return 'bg-transparent border-none text-primary dark:text-primary-dark';
      }
    default:
      return `bg-primary dark:bg-primary-dark`;
  }
};

const getButtonSizeCssClasses = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return 'text-sm py-1 px-2';
    case 'medium':
      return 'text-base py-2 px-4';
    case 'large':
      return 'text-xl py-3 px-6';
    default:
      return 'text-base';
  }
};

const SpinnerIcon = () => (
  <svg
    role="status"
    className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 dark:fill-white fill-gray-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
);

const InternalButton = (
  {
    variant = 'filled',
    intent = 'primary',
    size = 'medium',
    type = 'button',
    loading = false,
    disabled,
    className = '',
    style = {},
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const buttonCssClasses = getButtonCssClasses({ variant, intent });
  const buttonSizeCssClasses = getButtonSizeCssClasses(size);
  return (
    <button
      className={`btn ${buttonSizeCssClasses} ${buttonCssClasses} ${className}`}
      ref={ref}
      onClick={loading ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      style={style}
      type={type}
    >
      {loading && (
        <>
          <SpinnerIcon />
          <Spacer direction="horizontal" className="w-2" />
        </>
      )}

      {props.text ? props.text : props.children}
    </button>
  );
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(InternalButton);

export default Button;
