//WEBP ИЗОБРАЖЕНИЯ НА САЙТАХ
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
//АДАПТИВНЫЕ ИЗОБРАЖЕНИЯ В HTML
function ibg() {
  let ibg = document.querySelectorAll(".--ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

//HEADER MENU BURGER
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
const hamburger = document.querySelector('.hamburger');
const body = document.body;

hamburger.addEventListener('click', function toggleMenu() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  body.classList.toggle('bg');
});

document.documentElement.addEventListener('click', function (e) {
  if (!e.target.closest('.header__menu')) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    body.classList.remove('bg');
  }
})

//Input/Textarea focus-remove placeholder
const input = document.querySelectorAll('.input');
input.forEach(item => {
  item.addEventListener('focus', function (e) {
    item.setAttribute('placeholder', '')
  });
  const place = item.placeholder;
  item.addEventListener('blur', function (e) {
    item.setAttribute('placeholder', place)
  });
})


let iconHeader = document.querySelector('.icon-header');
let iconList = document.querySelector('.icon-header__list');
let iconListActive = document.querySelector('.icon-header__list.active');
let iconImg = document.querySelector('.icon-header__icon');
iconHeader.addEventListener("mouseenter", function (event) {
  iconList.classList.add('active');
})
iconHeader.addEventListener("mouseleave", function (event) {
  iconList.classList.remove('active');
})
let iconActive = iconList.classList.contains('active');
iconImg.addEventListener('click', function (event) {
  iconList.classList.toggle('active');
})
//TAB MENU
let tab = function () {
  let tabNav = document.querySelectorAll('.menu-list-item__link'),
    tabContent = document.querySelectorAll('.menu__tab'),
    tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('menu-list-item__link--active');
    });
    this.classList.add('menu-list-item__link--active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('menu__tab--active') : item.classList.remove('menu__tab--active');
    })
  }

};

tab();

//ACCORDION
const footMenu = document.querySelector('.footer-navigation__menu');
document.querySelector('.footer-navigation__accordion').addEventListener('click', () => {
  footMenu.classList.toggle('active');
})
document.documentElement.addEventListener('click', function (e) {
  if (!e.target.closest('.footer-navigation__accordion')) {
    footMenu.classList.remove('active');
  }
})


// const checkbox = document.querySelectorAll('.checkbox');

// checkbox.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     if (event.type === 'click') {

//       let quantity = document.querySelector('.checkbox-quantity');

//       quantity.textContent -= [-1, 1][-quantity.classList.contains('active')];

//     }

//   })
// })

let hearts = document.querySelectorAll(".checkbox");
for (let heart of hearts) {
  heart.onclick = function (e) {
    this.classList.toggle("added");
    this.classList.contains("added") ? e.target.nextElementSibling.textContent++ : e.target.nextElementSibling.textContent--;
  }
}






let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('slide');
  }, duration);
}
let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('paddingTop');
  target.style.removeProperty('paddingBottom');
  target.style.removeProperty('marginTop');
  target.style.removeProperty('marginBottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('slide');
  }, duration);
}
let slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('slide')) {
    target.classList.add('slide');
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }
}
const accord = document.querySelector('.news__accordion');
const newsWrapper = document.querySelector('.news__wrapper');
accord.addEventListener('click', function (e) {
  slideToggle(newsWrapper);
  newsWrapper.classList.toggle('active');
})
$(document).ready(function () {
  $('.recent__slider').slick({
    arrows: false,
    dots: true
  })
});
