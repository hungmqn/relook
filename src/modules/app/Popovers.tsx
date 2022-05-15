import React from 'react';

import Popover from '../../components/Popover';
import Spacer from '../../components/Spacer';

const menu = [
  {
    text: 'Shop',
    href: '/shop',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Showcase',
    href: '/showcase',
  },
  {
    text: 'Very long text menu that we will know how it be',
    href: '/long',
  },
];

const Popovers = () => (
  <div>
    <h3>Popover</h3>
    <Spacer direction="vertical" className="h-5" />
    <div>
      <h5>Default</h5>
      <Popover
        buttonProps={{
          text: 'Plain text button props',
        }}
        menu={menu}
      />
      <Spacer direction="horizontal" className="w-5" />
      <Popover
        buttonProps={{
          text: <span>React node text button props</span>,
        }}
        menu={menu}
      />
      <Spacer direction="horizontal" className="w-5" />
      <Popover
        buttonProps={{
          text: 'Disabled',
          disabled: true,
        }}
        menu={menu}
      />
      <Spacer direction="vertical" className="h-5" />
      <Popover
        buttonProps={{
          text: 'Open on hover',
        }}
        menu={menu}
        openOnHover
      />
      <Spacer direction="horizontal" className="w-5" />
      <Popover
        buttonProps={{
          text: 'Disabled Open on hover',
          disabled: true,
        }}
        menu={menu}
        openOnHover
      />
      <Spacer direction="horizontal" className="w-5" />
      <Popover
        buttonProps={{
          text: 'Left arrow',
          leftArrow: true,
        }}
        menu={menu}
      />
      <Spacer direction="horizontal" className="w-5" />
      <Popover
        buttonProps={{
          text: 'Right arrow',
          rightArrow: true,
        }}
        menu={menu}
      />
      <Spacer direction="vertical" className="h-5" />
      <Popover
        buttonProps={{
          text: 'Custom popover content',
        }}
        PopoverContent={
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 relative grid gap-8 p-4 w-44 bg-white dark:bg-black">
            <h3>Custom popover content</h3>
          </div>
        }
      />
      <Spacer direction="horizontal" className="w-5" />
    </div>
  </div>
);

export default Popovers;
