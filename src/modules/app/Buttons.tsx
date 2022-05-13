import React from 'react';

import Button from '../../components/Button';
import Spacer from '../../components/Spacer';

const Buttons = () => {
  return (
    <div>
      <h3>Buttons</h3>
      <Spacer direction="vertical" className="h-5" />
      <div>
        <h5>Default</h5>
        <Button text="Filled" />
        <Spacer direction="horizontal" className="w-3" />
        <Button text="Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button text="Disabled" disabled />
      </div>
      <Spacer direction="vertical" className="h-3" />
      <div>
        <h5>Primary</h5>
        <Button variant="filled" intent="primary" text="Filled" />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="filled" intent="primary" text="Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="filled" intent="primary" text="Disabled" disabled />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="outlined" intent="primary" text="Outlined" />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="primary"
          text="Outlined Loading"
          loading
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="primary"
          text="Outlined Disabled"
          disabled
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="primary" text="Link" />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="primary" text="Link Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="primary" text="Link Disabled" disabled />
      </div>
      <Spacer direction="vertical" className="h-3" />
      <div>
        <h5>Success</h5>
        <Button intent="success" text="Filled" />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="success" text="Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="success" text="Disabled" disabled />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="outlined" intent="success" text="Outlined" />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="success"
          text="Outlined Loading"
          loading
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="success"
          text="Outlined Disabled"
          disabled
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="success" text="Link" />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="success" text="Link Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="success" text="Link Disabled" disabled />
      </div>
      <Spacer direction="vertical" className="h-3" />
      <div>
        <h5>Warning</h5>
        <Button intent="warning" text="Filled" />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="warning" text="Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="warning" text="Disabled" disabled />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="outlined" intent="warning" text="Outlined" />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="warning"
          text="Outlined Loading"
          loading
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="warning"
          text="Outlined Disabled"
          disabled
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="warning" text="Link" />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="warning" text="Link Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="warning" text="Link Disabled" disabled />
      </div>
      <Spacer direction="vertical" className="h-3" />
      <div>
        <h5>Danger</h5>
        <Button intent="danger" text="Filled" />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="danger" text="Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="danger" text="Disabled" disabled />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="outlined" intent="danger" text="Outlined" />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="danger"
          text="Outlined Loading"
          loading
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="danger"
          text="Outlined Disabled"
          disabled
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="danger" text="Link" />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="danger" text="Link Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="danger" text="Link Disabled" disabled />
      </div>
      <Spacer direction="vertical" className="h-3" />
      <div>
        <h5>Error</h5>
        <Button intent="error" text="Filled" />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="error" text="Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button intent="error" text="Disabled" disabled />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="outlined" intent="error" text="Outlined" />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="error"
          text="Outlined Loading"
          loading
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button
          variant="outlined"
          intent="error"
          text="Outlined Disabled"
          disabled
        />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="error" text="Link" />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="error" text="Link Loading" loading />
        <Spacer direction="horizontal" className="w-3" />
        <Button variant="link" intent="error" text="Link Disabled" disabled />
      </div>
    </div>
  );
};

export default Buttons;
