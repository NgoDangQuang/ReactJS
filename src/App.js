import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './components/HomePage/HomePage.js'
import AboutUsPage from './components/AboutUsPage/AboutUsPage.js'
import ContactPage from './components/ContactPage/ContactPage.js';
import FaqPage from './components/FaqPage/FaqPage.js'
import './App.css';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/ReactJS' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
      </Routes>
      <Footer />
      <Outlet/>
    </div>
  );
}

export default App;
