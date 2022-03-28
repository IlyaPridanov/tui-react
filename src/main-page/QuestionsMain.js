import webp768 from './../img/tuya-mobile.webp';
import png768 from './../img/tuya-mobile.png';
import webp1200 from './../img/tuya-tablet.webp';
import png1200 from './../img/tuya-tablet.png';
import webp from './../img/tuya.webp';
import png from './../img/tuya.png';

function QuestionsMain () {
  return (
    <section className="questions">
    <div className="container">
      <picture>
        <source media="(max-width: 767px)" srcSet={webp768} type="image/webp"/>
        <source media="(max-width: 767px)" srcSet={png768}/>
        <source media="(max-width: 1200px)" srcSet={webp1200} type="image/webp"/>
        <source media="(max-width: 1200px)" srcSet={png1200}/>
        <source srcSet={webp} type="image/webp"/>
        <img className="questions__img" src={png} alt="questions-img"/>
      </picture>
      <h2 className="questions__caption h2">Есть вопрос? Ответим&nbsp;через&nbsp;<a href="#">36</a>&nbsp;секунд</h2>
      <form action="#" method="POST">
        <p className="questions__text">Оставьте заявку и наш специалист проконсультирует вас</p>
        <div className="questions__row">
          <label>
            <span className="visually-hidden">Введите имя</span>
            <input className="questions__input" type="text" name="name" placeholder="Ваше имя"/>
          </label>
          <label><span className="visually-hidden">Введите телефон</span>
            <input className="questions__input js-tel-input" type="text" name="tel" placeholder="Ваш телефон"/>
          </label>
          <button className="questions__btn button" type="submit">Заказать звонок</button>
        </div>
      </form>
    </div>
  </section>
  );
}

export default QuestionsMain;