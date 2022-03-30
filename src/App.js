import './sass/App.scss';
import Header from './header/Header';
import Footer from './footer/Footer';

import Main from './main-page/Main';
import Catalog from './catalog-page/Catalog';
import CatalogId from './catalog-page/CatalogId';
import OneDay from './oneday-page/OneDay';
import Reviews from './reviews-page/Reviews';
import Consultation from './consultation-page/Consultation';
import ErrorPage from './ErrorPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <main>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element = {<Main/>}></Route>
            <Route path="/catalog" element = {<Catalog/>}></Route>
            <Route path="/catalog/:catalogName" element = {<CatalogId/>}></Route>
            <Route path="/oneday" element = {<OneDay/>}></Route>
            <Route path="/reviews" element = {<Reviews/>}></Route>
            <Route path="/consultation" element = {<Consultation/>}></Route>
            <Route path="*" element = {<ErrorPage/>}></Route>
          </Routes>
        {/* </BrowserRouter> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
