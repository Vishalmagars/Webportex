import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './componets/home/Header'; // Adjust path if needed
import Footer from './componets/home/Footer'; // Adjust path if needed
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import BlogSection from './componets/blogs/BlogSection';
import BlogPage from './componets/blogs/BlogPage';

const Layout = () => {
  const location = useLocation();

  // Scroll to top only for new page loads without hash
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]); // Trigger on pathname change

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/blog" element={<BlogSection/>} />
           <Route path="/blogpage" element={<BlogPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}