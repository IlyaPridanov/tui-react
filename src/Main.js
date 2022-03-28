import MainBlock from './main-page/MainBlock';
import GalleryMain from './main-page/GalleryMain';
import CatalogMain from './main-page/CatalogMain';
import QuestionsMain from './main-page/QuestionsMain';
import ServicesMain from './main-page/ServicesMain';
import CommentMain from './main-page/CommentMain';

function Main () {
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