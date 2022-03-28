import webp1 from './../img/catalog-1.webp';
import png1 from './../img/catalog-1.png';
import webp2 from './../img/catalog-2.webp';
import png2 from './../img/catalog-2.png';
import webp3 from './../img/catalog-3.webp';
import png3 from './../img/catalog-3.png';
import webp4 from './../img/catalog-4.webp';
import png4 from './../img/catalog-4.png';
import webp5 from './../img/catalog-5.webp';
import png5 from './../img/catalog-5.png';


function CatalogMain () {
  const imgArr = [
    {
      "webp": webp1,
      "png": png1,
      "caption": "Туя Брабант",
      "size": "0.3 - 6м",
      "cash": "400 Р",
    },
    {
      "webp": webp2,
      "png": png2,
      "caption": "Туя крупномер",
      "size": "2 - 9м",
      "cash": "14 000 Р",
    },
    {
      "webp": webp3,
      "png": png3,
      "caption": "Туя Шаровидная",
      "size": "0.1 - 3м",
      "cash": "2 200 Р",
    },
    {
      "webp": webp4,
      "png": png4,
      "caption": "Туя Смарагд",
      "size": "0.5 - 6м",
      "cash": "600 Р",
    },
    {
      "webp": webp5,
      "png": png5,
      "caption": "Туя Blue Arrow",
      "size": "2.2 - 5м",
      "cash": "3 000 Р",
    },
  ]

  return (

    <section className="catalog">
      <div className="container">
        <h2 className="catalog__caption h2"><a href="#">Каталог&nbsp;</a>туй</h2>
        <ul className="catalog__list fancy-container">
          {
            imgArr.map((itemImg , index) => 
              <li className="catalog__item" key={itemImg.caption}>
                <div className="catalog__img fancy-img" data-index={index}>
                  <picture>
                    <source srcSet={itemImg.webp} type="image/webp"/>
                    <img src={itemImg.png} alt="Фото каталога"/>
                  </picture>
                </div>
                <p className="catalog__item-caption">{itemImg.caption}</p>
                <ul className="catalog__parameter-list">
                  <li className="catalog__parameter-item">{itemImg.size}</li>
                  <li className="catalog__parameter-item">от&nbsp;<span>{itemImg.cash}</span></li>
                </ul>
              </li>
            )
          }

        </ul>
        <p className="catalog__text">Подключите консультанта для помощи в выборе</p><a className="catalog__btn button" href="#">+ Консультант</a>
      </div>
    </section>

  );
}

export default CatalogMain;