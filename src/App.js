import './sass/App.scss';
import Header from './header/Header';
import Footer from './footer/Footer';

import Main from './Main';
import Catalog from './Catalog';
import OneDay from './OneDay';
import Reviews from './Reviews';
import Consultation from './Consultation';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <main>
        <BrowserRouter>
          {/* <nav>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/oneday">Отзывы</Link></li>
            <li><Link to="/reviews">Консультация</Link></li>
            <li><Link to="/consultation">Посадка за 1 день</Link></li>
            
          </nav> */}
          <Routes>
            <Route path="/" element = {<Main/>}></Route>
            <Route path="/catalog" element = {<Catalog/>}></Route>
            <Route path="/oneday" element = {<OneDay/>}></Route>
            <Route path="/reviews" element = {<Reviews/>}></Route>
            <Route path="/consultation" element = {<Consultation/>}></Route>
            <Route path="*" element = {<Consultation/>}></Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer/>
    </>
  );
}

export default App;
