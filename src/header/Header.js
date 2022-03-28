import Nav from './Nav';
import {ReactComponent as Logo} from '../img/icon-logo.svg';

function Header () {
  return (
    <header className="header">
      <div className="container header__row">
        <a href="/" className="header__logo">
          <div>
            <Logo/>
            <span>Сад<br/>Эко</span>
          </div>
          <span className="header__logo-text">Питомник Туй</span>
        </a>
        <Nav/>
        <a href="#" className="header__link button">Заказать звонок</a>
        <button className="header__btn hamburger" type="button" aria-label="Кнопка открывающая мобильное меню">
            <span className="hamburger__bar hamburger__bar--bar1"></span>
            <span className="hamburger__bar hamburger__bar--bar2"></span>
            <span className="hamburger__bar hamburger__bar--bar3"></span>
            <span className="hamburger__bar hamburger__bar--bar4"></span>
        </button>

      </div>
    </header>
  );
}

export default Header;