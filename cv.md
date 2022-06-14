## [rsschool-cv]("https://app.rs.school/")


# Katrine Italyankina


### Junior Frontend Developer
***
### Contacts:
  + email: chazyspoller@gmail.com
  + github: [chazyspoller]("https://github.com/chazyspoller")
  + telegram: [@KateItaly]("https://t.me/KateItaly")

***
### About myself:
After graduation, it was necessary to determine the direction of development and I became interested in frontend development because the visual component of the work is important to me. . But I started doing this seriously only a year ago. Before that, I was engaged in graphic design for a large company and worked in a printing house at the same time.
At the moment I am in the process of becoming a good layout specialist. But this is only the first step to the profession of a frontend developer. In the near future, I plan to expand and strengthen my knowledge of JavaScript and start studying the framework.

***

### Skills and Proficiency:
  * HTML5, CSS3
  * Sass(SCSS) (Less)
  * Responsive Design
  * BEM
  * VS Code, Atom
  * Gulp
  * Git, GitHub
  * JS basic
  * Figma, Abode Photoshop, Abode Illustrator

***

### Code example:
  **A module for implementing smooth scrolling of anchor links**
  ```
  const linksWithScroll = document.querySelectorAll('[data-link-scroll]');

  const scrollToElement = (evt) => {
    const id = evt.target.closest('a').getAttribute('href');
    const elementToGo = id.length > 1 ? document.querySelector(id) : null;

    if (id.length > 1) {
      evt.preventDefault();
    }

    if (elementToGo) {
      elementToGo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const activateScroll = () => {
    if (linksWithScroll.length) {
      linksWithScroll.forEach((link) => link.addEventListener('click', scrollToElement));
    }
  };
  ```
***

### Education:
  * Moscow State Technological University "STANKIN". Computer science and engineering (by profession, a system analyst)

***

### Courses:
  * HTML Academy Online Courses. Profession "Frontend developer" (completed)
      - HTML & CSS. Professional Website Coding
      - HTML & CSS. Adaptive Website Coding and Automation
      - JavaScript. Professional Development of Web Interfaces
  * JavaScript Manual on learnjavascript.ru (in progress)
  * RS Schools Course «JavaScript/Front-end. Stage 0» (in progress)

***

### Languages:
  * English - Pre-Intermediate
  * Russian - Native