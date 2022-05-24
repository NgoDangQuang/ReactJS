import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './components/HomePage/HomePage.js'
import AboutUsPage from './components/AboutUsPage/AboutUsPage.js'
import ContactPage from './components/ContactPage/ContactPage.js';
import FaqPage from './components/FaqPage/FaqPage.js'
import TermConditionPage from './components/TermConditionPage/TermConditionPage.js';
import PageNotFound from './components/PageNotFound/PageNotFound.js';
import Products from './components/Products/Products.js';
import { productData } from './components/Header/headerData.js'
import './App.scss';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/ReactJS' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/term' element={<TermConditionPage />} />
        <Route path='/error' element={<PageNotFound />} />

        <Route path='/products/1' element={<Products id_product={1} />} />
        <Route path='/products/2' element={<Products id_product={2} />} />
        <Route path='/products/3' element={<Products id_product={3} />} />
        <Route path='/products/4' element={<Products id_product={4} />} />
        <Route path='/products/5' element={<Products id_product={5} />} />
        <Route path='/products/6' element={<Products id_product={6} />} />
        <Route path='/products/7' element={<Products id_product={7} />} />
        <Route path='/products/8' element={<Products id_product={8} />} />
        <Route path='/products/9' element={<Products id_product={9} />} />
        <Route path='/products/10' element={<Products id_product={10} />} />
        <Route path='/products/11' element={<Products id_product={11} />} />
        <Route path='/products/12' element={<Products id_product={12} />} />
        <Route path='/products/13' element={<Products id_product={13} />} />
        <Route path='/products/14' element={<Products id_product={14} />} />
        <Route path='/products/15' element={<Products id_product={15} />} />
        <Route path='/products/16' element={<Products id_product={16} />} />
        <Route path='/products/17' element={<Products id_product={17} />} />
        <Route path='/products/18' element={<Products id_product={18} />} />
        <Route path='/products/19' element={<Products id_product={19} />} />
        <Route path='/products/20' element={<Products id_product={20} />} />
      </Routes>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
