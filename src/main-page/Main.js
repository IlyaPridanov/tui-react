import MainForm from './MainForm';

function Main () {
  document.addEventListener("DOMContentLoaded", () => {
      const header = document.querySelector('.header');
      const main = document.querySelector('.main');

      let headerHeight = header.offsetHeight + 'px';

      main.style.marginTop = '-' + headerHeight;
      main.style.paddingTop = headerHeight;
      console.log(headerHeight);
  });
  
  return (
    <section className="main">
      <div className="container main__row">
        <div className="main__column">
          <h1 className="main__caption">Туи из питомника с доставкой и&nbsp;скидкой 50-70%</h1>
          <a href="#" className="main__link button">Оставить заявку</a>
          <ul className="main__list">
            <li className="main__item">
              Без посредников
            </li>
            <li className="main__item">
              Посадка туи за 1 день
            </li>
            <li className="main__item">
              Без предоплаты
            </li>
          </ul>
        </div>
        <MainForm/>
      </div>
    </section>
  );
}

export default Main;