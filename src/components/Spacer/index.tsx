import React from 'react';

const getDirectionCssClass = (direction: 'vertical' | 'horizontal') =>
  direction === 'vertical' ? '' : 'inline-block';

type SpacerProps = {
  direction: 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
};

const Spacer = ({
  className = 'w-1',
  style = {},
  direction = 'horizontal',
}: SpacerProps) => {
  return (
    <div
      className={`${getDirectionCssClass(direction)} ${className}`}
      style={style}
    ></div>
  );
};

export default Spacer;
