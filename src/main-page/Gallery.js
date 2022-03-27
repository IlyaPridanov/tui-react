import webp1 from './../img/inside-nursery-1.webp';
import png1 from './../img/inside-nursery-1.png';
import webp2 from './../img/inside-nursery-2.webp';
import png2 from './../img/inside-nursery-2.png';
import webp3 from './../img/inside-nursery-3.webp';
import png3 from './../img/inside-nursery-3.png';
import webp4 from './../img/inside-nursery-4.webp';
import png4 from './../img/inside-nursery-4.png';
import webp5 from './../img/inside-nursery-5.webp';
import png5 from './../img/inside-nursery-5.png';
import webp6 from './../img/inside-nursery-6.webp';
import png6 from './../img/inside-nursery-6.png';


function Gallery () {
  const imgArr = [
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
    {
      "webp": webp6,
      "png": png6,
    },
  ]

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__caption h2">Посмотрите на&nbsp;<a href="#">питомник изнутри</a></h2>
        <div className="gallery__row fancy-container">
          {
            imgArr.map((itemImg , index) => 
              <div className="gallery__img fancy-img" data-index={index}>
                <picture>
                  <source srcSet={itemImg.webp} type="image/webp"/>
                  <img src={itemImg.png} alt="питомник изнутри фото"/>
                </picture>
              </div>
            )
          }
          {/* <div className="gallery__img fancy-img" data-index="1">
            <picture>
              <source srcSet={imgArr[1].webp} type="image/webp"/>
              <img src={imgArr[1].png} alt="питомник изнутри фото"/>
            </picture>
          </div>
          <div className="gallery__img fancy-img" data-index="2">
            <picture>
              <source srcSet={imgArr[2].webp} type="image/webp"/>
              <img src={imgArr[2].png} alt="питомник изнутри фото"/>
            </picture>
          </div> */}
          

        </div>
        <button className="gallery__btn hidden" type="button">Посмотреть ещё</button>
      </div>
    </section>
  );
}

export default Gallery;