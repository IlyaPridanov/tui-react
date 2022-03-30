// import HeaderTop from './../modules/HeaderTop';
import MainBlock from './MainBlock';
import GalleryMain from './GalleryMain';
import CatalogMain from './CatalogMain';
import QuestionsMain from './QuestionsMain';
import ServicesMain from './ServicesMain';
import CommentMain from './CommentMain';

function Main () {
  // document.addEventListener("DOMContentLoaded", () => {
  //   HeaderTop();
  // });
  
  return (
    <>
      <MainBlock/>
      <GalleryMain/>
      <CatalogMain/>
      <QuestionsMain/>
      <ServicesMain/>
      <CommentMain/>
    </>
  )
}

export default Main;