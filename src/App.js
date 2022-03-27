import './sass/App.scss';
import Header from './header/Header';
import Main from './main-page/Main';
import Gallery from './main-page/Gallery';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Main/>
        <Gallery/>
      </main>
    </>
  );
}

export default App;
