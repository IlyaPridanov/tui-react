const navData = [
  { "link": "nav1", "text": "Галерея"},
  { "link": "nav2", "text": "Каталог"},
  { "link": "nav3", "text": "Отзывы"},
  { "link": "nav4", "text": "Консультация"},
  { "link": "nav5", "text": "Посадка за 1 день"},
]

function Nav () {
  const listItem = navData.map(item=><li key={item.link} className="nav__item"><a href={item.link} className="nav__link">{item.text}</a></li>)

  return (
    <nav className="nav nav--inactive js-nav-header">
      <ul className="nav__list">
        {listItem}
      </ul>
    </nav>
  );
}

export default Nav;