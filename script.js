const page = document.body;
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  page.classList.toggle('light');
  themeBtn.classList.add('theme-btn--anim');
  setTimeout(() => {themeBtn.classList.remove('theme-btn--anim')}, 1000);
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.page-header__menu');
const menuItems = menu.querySelectorAll('.page-header__menu-item a');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (menuBtn.classList.contains('menu-btn--close')) {
    menu.classList.add('page-header__menu--close');
  } else {
    menu.classList.remove('page-header__menu--close');
  }
  menuBtn.classList.toggle('menu-btn--close');
  menu.classList.toggle('page-header__menu--open');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (menuBtn.classList.contains('menu-btn--close')) {
      menu.classList.add('page-header__menu--close');
      menuBtn.classList.toggle('menu-btn--close');
      menu.classList.toggle('page-header__menu--open');
    }
  }
});

menu.addEventListener('click', (evt) => {
  if (evt.target.closest('.page-header__menu-item')) {
    menu.classList.add('page-header__menu--close');
    menuBtn.classList.toggle('menu-btn--close');
    menu.classList.toggle('page-header__menu--open');
  }
})

const squares = document.querySelectorAll('.skills__list li');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      squares.forEach(x => x.classList.add('progress-animation'));
      return;
    }
    squares.forEach(x => x.classList.remove('progress-animation'));
  });
});
observer.observe(document.querySelector('.skills__list'));