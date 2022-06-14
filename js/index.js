const header = document.querySelector('.page-header');
const scrollDistance = header.scrollHeight;

window.addEventListener('scroll', function (evt) {
  if ((window.scrollY < scrollDistance) && header) {
    header.classList.remove('page-header--scroll');
  } else {
    header.classList.add('page-header--scroll');
  }
});
