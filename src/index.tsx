import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ServerSideTable } from './ServerSideTable';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ServerSideTable id={42}/>
  </React.StrictMode>
);
