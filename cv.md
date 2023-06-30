# Katrine Italyankina

## Junior Frontend Developer

---

## Contacts

**Mail**: chazyspoller@gmail.com

**Discord**: ki.italy

**Telegram**: @KateItaly

---

## About Me

I am very interested in the field of web technologies! Now I continue to study web development. I am a diligent, responsible and fast-learning employee. I know how to make adaptive and cross-browser sites. I keep learning JavaScript and starting to learn React. I also have the skills to work with graphic programs: Figma, Adobe Illustrator, Adobe Photoshop, Adobe Lightroom. Absolute willingness and desire to develop and study new technologies.

## Skills

- HTML
- CSS
- SCSS
- JavaScript
- Gulp
- Git / Github
- Node.js
- API
- BEM
- Figma
- Adobe Photoshop
- Adobe Illustrator

## Code Example

_Tabs Functionality_

```
const tabs = document.querySelectorAll('.tabcontent'),
  tabsBtnsBox = document.querySelector('.tabheader**items'),
  tabsBtns = tabsBtnsBox.querySelectorAll('.tabheader**item');

const changePreview = (type) => {
  tabs.forEach((tab) => {
    if (tab.querySelector('.tabcontent\_\_descr').textContent.indexOf(type) !== -1) {
      tab.classList.add('tabcontent--open');
    } else {
      tab.classList.remove('tabcontent--open');
      }
  });
};

tabsBtnsBox.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('tabheader**item')) {
    tabsBtns.forEach(x => x.classList.remove('tabheader**item_active'));
    evt.target.classList.add('tabheader\_\_item_active');
    changePreview(evt.target.textContent);
  }
});
```

## Experience

_Future_

## Education

**STANKIN Moscow State Technical University** Information Technologies and Control Systems,

Computer Science and Computer Engineering

## Language

**English**

B1 INTERMEDIATE
