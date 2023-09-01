import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

export const App = () => {
  return (
    <>
      <header className="header-navbar">
        <Navbar />
      </header>
      <main className="relative isolate overflow-hidden pt-14">
        <Outlet />
      </main>
    </>
  );
};
