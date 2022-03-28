import webp1 from './../img/planting-1.webp';
import png1 from './../img/planting-1.png';
import webp2 from './../img/planting-2.webp';
import png2 from './../img/planting-2.png';
import webp3 from './../img/planting-3.webp';
import png3 from './../img/planting-3.png';
import webp4 from './../img/planting-4.webp';
import png4 from './../img/planting-4.png';


function ServicesMain () {
  const imgArr = [
    {
      "webp": webp1,
      "png": png1,
      "caption": "Логистика",
      "text": "Погрузим и отвезем туи самостоятельно",
    },
    {
      "webp": webp2,
      "png": png2,
      "caption": "Посадка",
      "text": "Подготовим грунти и посадим все деревья",
    },
    {
      "webp": webp3,
      "png": png3,
      "caption": "Обработка",
      "text": "От вредителей и болезней для долгой жизни туи",
    },
    {
      "webp": webp4,
      "png": png4,
      "caption": "Гарантия 2 года",
      "text": "Гарантия по договору",
    },
  ]

  return (

    <section className="services">
      <div className="container">
        <h2 className="services__caption h2">Посадим туи<a href="#">&nbsp;за 1 день</a></h2>
        <ul className="services__list">
          {
            imgArr.map((itemImg , index) => 
              <li className="services__item" key={itemImg.caption}>
                <div className="services__img">
                  <picture>
                    <source srcSet={itemImg.webp} type="image/webp"/>
                    <img src={itemImg.png} alt={itemImg.caption}/>
                  </picture>
                </div>
                <p className="services__item-caption">{itemImg.caption}</p>
                <p className="services__item-text">{itemImg.text}</p>
              </li>
            )
          }
        </ul>
      </div>
    </section>



  );
}

export default ServicesMain;