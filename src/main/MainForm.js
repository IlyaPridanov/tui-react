function MainForm () {
  return (
    <div className="main__form main-form">
      <form action="#" method="POST">
        <p className="main-form__caption">Задайте вопрос специалисту</p>
        <label>
          <span className="visually-hidden">Введите имя</span>
          <input type="text" className="main-form__input" name="name" placeholder="Ваше имя"/>
        </label>
        <label>
          <span className="visually-hidden">Введите телефон</span>
          <input className="main-form__input js-tel-input" type="text" name="tel" placeholder="Ваш телефон"/>
        </label>
        <button className="main-form__btn button" type="submit">Перезвоните мне</button>
      </form>
    </div>
  );
}
export default MainForm;