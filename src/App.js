import './sass/App.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main-page/Main';
import GalleryMain from './main-page/GalleryMain';
import CatalogMain from './main-page/CatalogMain';
import QuestionsMain from './main-page/QuestionsMain';
import ServicesMain from './main-page/ServicesMain';
import CommentMain from './main-page/CommentMain';
// import Main from './Main';
import Catalog from './Catalog';
import OneDay from './OneDay';
import Reviews from './Reviews';
import Consultation from './Consultation';
import { Route, Router, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      {/* <Router>
        <Routes>
          <Route path="/" element = {<Main/>}></Route>
          <Route path="/catalog" element = {<Catalog/>}></Route>
          <Route path="/oneday" element = {<OneDay/>}></Route>
          <Route path="/reviews" element = {<Reviews/>}></Route>
          <Route path="/consultation" element = {<Consultation/>}></Route>
        </Routes>
      </Router> */}
      <main>
        <Main/>
        <GalleryMain/>
        <CatalogMain/>
        <QuestionsMain/>
        <ServicesMain/>
        <CommentMain/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
