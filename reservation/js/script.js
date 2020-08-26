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
const textarea = document.querySelectorAll('.textarea');
textarea.forEach(item => {
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
