import { StrictMode, Suspense, lazy } from 'react';
import * as ReactDOM from 'react-dom/client';
import { SuspenseLoader } from './components/SuspenseLoader';

const Routes = lazy(() => import('./routes/Routes'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <Suspense fallback={<SuspenseLoader />}>
      <Routes />
    </Suspense>
  </StrictMode>,
);
