import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './components/Footer';
import { appRoutes, getChildrenRoutes, getMainMenuRoutes } from './routes';

export const App = () => {
  return (
    <>
      <header className="header-navbar">
        <Navbar
          routes={getMainMenuRoutes()}
          homeRoute={appRoutes.home}
          loginRoute={appRoutes.login}
        />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer routes={getChildrenRoutes(appRoutes.footerNavigation)} />
      </footer>
    </>
  );
};

export default App;
