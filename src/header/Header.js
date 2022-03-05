import Nav from './Nav';

function Header () {
  return (
    <header className="header">
      <div className="container header__row">
        <a href="#" className="header__logo"></a>
        <Nav/>
        <a href="#" className="header__link button">Заказать звонок</a>
      </div>
    </header>
  );
}

export default Header;