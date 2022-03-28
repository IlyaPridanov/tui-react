import './sass/App.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import MainBlock from './main-page/MainBlock';
import GalleryMain from './main-page/GalleryMain';
import CatalogMain from './main-page/CatalogMain';
import QuestionsMain from './main-page/QuestionsMain';
import ServicesMain from './main-page/ServicesMain';
import CommentMain from './main-page/CommentMain';
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Main/>}></Route>
          <Route path="/catalog" element = {<Catalog/>}></Route>
          <Route path="/oneday" element = {<OneDay/>}></Route>
          <Route path="/reviews" element = {<Reviews/>}></Route>
          <Route path="/consultation" element = {<Consultation/>}></Route>
          <Route path="*" element = {<Consultation/>}></Route>
        </Routes>
      </BrowserRouter>
      <main>
        <MainBlock/>
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
