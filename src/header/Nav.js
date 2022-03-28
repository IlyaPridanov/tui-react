// import { Link } from 'react-router-dom';

const navData = [
  { "link": "/", "text": "Главная"},
  { "link": "/catalog", "text": "Каталог"},
  { "link": "/reviews", "text": "Отзывы"},
  { "link": "/consultation", "text": "Консультация"},
  { "link": "/oneday", "text": "Посадка за 1 день"},
]

function Nav () {
  const listItem = navData.map(item=><li key={item.link} className="nav__item"><a href={item.link} className="nav__link">{item.text}</a></li>)
  // const listItem = navData.map(item=><li key={item.link} className="nav__item"><Link to={item.link} className="nav__link">{item.text}</Link></li>)

  return (
    <nav className="nav nav--inactive js-nav-header">
      <ul className="nav__list">
        {listItem}
      </ul>
    </nav>
  );
}

export default Nav;