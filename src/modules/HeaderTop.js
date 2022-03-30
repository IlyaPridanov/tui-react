function HeaderTop () {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');

  let headerHeight = header.offsetHeight + 'px';

  main.style.paddingTop = headerHeight;
}

export default HeaderTop;