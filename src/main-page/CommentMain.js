import webp1 from './../img/review-1.webp';
import png1 from './../img/review-1.png';
import webp2 from './../img/review-2.webp';
import png2 from './../img/review-2.png';
import webp3 from './../img/review-3.webp';
import png3 from './../img/review-3.png';
import webp4 from './../img/review-4.webp';
import png4 from './../img/review-4.png';
import webp5 from './../img/review-5.webp';
import png5 from './../img/review-5.png';

function CommentMain () {
  const commentArr = [
    {
      "imgArr": [
        {
          "webp": webp1,
          "png": png1,
        },
        {
          "webp": webp2,
          "png": png2,
        },
        {
          "webp": webp3,
          "png": png3,
        },
        {
          "webp": webp4,
          "png": png4,
        },
        {
          "webp": webp5,
          "png": png5,
        },
      ]
    }
  ]

  return (
    <section className="comment slider">
      <div className="container">
        <h2 className="comment__caption h2">Почитайте, что говорят&nbsp;<a href="#">наши</a>&nbsp;клиенты</h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              commentArr.map((itemCommentMain,index1) => 
                <article className="comment__item swiper-item" key={index1}>
                  <ul className="comment__img-list">
                    {
                      itemCommentMain.imgArr.map((itemImg , index2) => 
                        <li className="comment__img-item" key={index2}>
                          <picture>
                            <source srcSet={itemImg.webp} type="image/webp"/>
                            <img src={itemImg.png} alt="Фото к коментарию"/>
                          </picture>
                        </li>
                      )
                    }
                  </ul>
                  <div className="comment__column">
                    <p>
                      Очень довольна данной компанией, не пожалела,
                      что обратилась! Теперь мой сад выглядит потрясающе!
                      Я очень люблю туи и предстоял сложный выбор питомника.
                      Сотрудники данной комании всё посадили, обработали в
                      кратчайшее время.
                    </p>
                    <cite>Татьяна Иванова</cite>
                    <time dateTime="2019-06-30">30 июня</time>
                  </div>
                </article>
              )
            }
          </div>
        </div>
        <div className="comment__button-row">
          <button className="js-btn-next" type="button">НАлево</button>
          <button className="js-btn-prev" type="button">Направо</button>
        </div>
      </div>
    </section>

  );
}

export default CommentMain;