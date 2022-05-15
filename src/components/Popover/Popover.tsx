import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import Button from '../Button';
import { ButtonProps } from '../Button/Button';

export type PopoverSize = 'small' | 'medium' | 'large';
export type PopoverType = 'submit' | 'reset' | 'popover';
export type PopoverStatus = 'success' | 'warning' | 'danger' | 'error';

export type BasePopoverProps = {
  buttonProps?: {
    text: string | React.ReactNode;
    leftArrow?: boolean;
    rightArrow?: boolean;
  } & ButtonProps;
  menu?: Array<{
    text: string;
    href: string;
  }>;
  openOnHover?: boolean;
  PopoverContent?: React.ReactNode;
  render?: any;
};

export type PopoverProps = BasePopoverProps;

const InternalPopover = ({
  buttonProps = { text: '', leftArrow: false, rightArrow: false },
  menu,
  openOnHover = false,
  PopoverContent,
}: PopoverProps) => {
  const buttonRef: any = React.useRef(null);
  const onMouseEnter = (open: boolean) => {
    if (open) return;
    return buttonRef.current?.click();
  };

  const { text, leftArrow, rightArrow, ...restButtonProps } = buttonProps;

  return (
    <Popover className="relative inline-block overflow-visible">
      {({
        open,
        close,
      }: {
        open: boolean;
        close: (ref?: any | HTMLElement) => void;
      }) => (
        <>
          <Popover.Button
            as="div"
            onMouseEnter={openOnHover ? () => onMouseEnter(open) : undefined}
          >
            <Button
              text={
                <>
                  {leftArrow && (
                    <ChevronLeftIcon
                      className={`${
                        open
                          ? 'h-6 w-6 -rotate-90 transform transition-transform duration-300'
                          : 'h-6 w-6 rotate-0 transform transition-transform duration-300'
                      }`}
                    />
                  )}
                  {text}
                  {rightArrow && (
                    <ChevronRightIcon
                      className={`${
                        open
                          ? 'h-6 w-6 rotate-90 transform transition-transform duration-300'
                          : 'h-6 w-6 rotate-0 transform transition-transform duration-300'
                      }`}
                    />
                  )}
                </>
              }
              ref={buttonRef}
              {...restButtonProps}
            />
          </Popover.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="absolute z-10 left-1/2 mt-3"
            onMouseLeave={
              openOnHover ? () => setTimeout(close, 500) : undefined
            }
          >
            <Popover.Panel
              className={`w-fit -translate-x-1/2 transform min-w-min lg:max-w-3xl`}
            >
              {menu && (
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 relative grid gap-8 bg-white p-4 w-40">
                  {menu.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.text}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
              {!menu && PopoverContent && PopoverContent}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default InternalPopover;
