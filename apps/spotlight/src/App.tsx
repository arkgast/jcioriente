import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <header className="header-navbar">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
