import React from 'react';

import TextField from '../../components/TextField';
import Spacer from '../../components/Spacer';

const TextFields = () => (
  <div>
    <h3>Text Field</h3>
    <Spacer direction="vertical" className="h-5" />
    <div>
      <h5>Default</h5>
      <TextField placeholder="Default" className="w-40" label="With label" />
      <Spacer direction="vertical" className="h-5" />
      <TextField
        placeholder="Default"
        className="w-40"
        label="With very very long label"
      />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Disabled" className="w-40" disabled />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Success" className="w-40" status="success" />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Warning" className="w-40" status="warning" />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Danger" className="w-40" status="danger" />
      <Spacer direction="vertical" className="h-5" />
      <TextField placeholder="Error" className="w-40" status="error" />
    </div>
  </div>
);

export default TextFields;
