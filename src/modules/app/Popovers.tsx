import React from 'react';

import TextField from '../../components/TextField';
import Spacer from '../../components/Spacer';

const Popovers = () => (
  <div>
    <h3>Popover</h3>
    <Spacer direction="vertical" className="h-5" />
    <div>
      <h5>Default</h5>
      <TextField placeholder="Success" text="Filled" />
      <Spacer direction="horizontal" className="w-3" />
      <TextField placeholder="Disabled" text="Filled" />
      <Spacer direction="horizontal" className="w-3" />
      <TextField placeholder="Disabled" text="Filled" />
    </div>
  </div>
);

export default Popovers;
