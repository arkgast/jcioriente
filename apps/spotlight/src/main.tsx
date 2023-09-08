import { StrictMode, Suspense, lazy } from 'react';
import * as ReactDOM from 'react-dom/client';

const Routes = lazy(() => import('./routes/Routes'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes />
    </Suspense>
  </StrictMode>,
);
