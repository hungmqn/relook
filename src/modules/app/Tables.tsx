import React from 'react';

import TextField from '../../components/TextField';
import Spacer from '../../components/Spacer';

const Tables = () => (
  <div>
    <h3>Table</h3>
    <div>
      <h5>Default</h5>
      <TextField />
      <Spacer direction="horizontal" className="w-3" />
      <TextField />
    </div>
  </div>
);

export default Tables;
