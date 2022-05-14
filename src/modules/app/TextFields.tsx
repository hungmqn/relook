import React from 'react';

import TextField from '../../components/TextField';
import Spacer from '../../components/Spacer';

const TextFields = () => (
  <div>
    <h3>Text Field</h3>
    <Spacer direction="vertical" className="h-5" />
    <div>
      <h5>Default</h5>
      <TextField placeholder="Success" className="w-96" text="Filled" />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Disabled" className="w-96" text="Filled" />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Warning" className="w-96" text="Filled" />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Error" className="w-96" text="Filled" />
    </div>
  </div>
);

export default TextFields;
