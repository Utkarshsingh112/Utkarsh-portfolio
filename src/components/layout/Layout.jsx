import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 pt-4 md:pt-8 pb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 