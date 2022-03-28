import {ReactComponent as Logo} from '../img/icon-logo.svg';
import {ReactComponent as Facebook} from '../img/icon-fb.svg';
import {ReactComponent as Insta} from '../img/icon-insta.svg';
import {ReactComponent as Vk} from '../img/icon-vk.svg';

function Footer () {
  const socArr = [
    {
      "icon": <Facebook/>,
      "text": "Facebook",
    },
    {
      "icon": <Insta/>,
      "text": "Instagramm",
    },
    {
      "icon": <Vk/>,
      "text": "Вконтакте",
    },
  ]

  const linkArr = [
    "Главная",
    "Каталог",
    "Отзывы",
    "Консультация",
    "Посадка за 1 день",
  ]

  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__column"><a className="footer__logo" href="index.html">
            <div>
              <Logo/>
              <span>Сад<br/>Эко</span>
            </div><span className="footer__logo-text">Питомник Туй</span></a>
          <p className="footer__copy">Соглашение на обработку персональных данных</p>
        </div>
        <div className="footer__column">
          <ul className="footer__list">
            {
              linkArr.map((itemLink) => 
                <li className="footer__item" key={itemLink}>
                  <a className="footer__item-link" href="#">{itemLink}</a>
                </li>
              )
            }
            <li className="footer__item">
              <ul className="footer__social-list">
                {
                  socArr.map((itemSoc) =>
                    <li key={itemSoc.text}>
                      <a href="#">
                        <span className="visually-hidden">{itemSoc.text}</span>
                        {itemSoc.icon}
                      </a>
                    </li>
                  )
                }
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__column"><a className="footer__link button" href="#">Заказать звонок</a><a className="footer__tel-link" href="tel:88007000101">8 (800) 700-01-01</a></div>
      </div>
    </footer>
  );
}

export default Footer;