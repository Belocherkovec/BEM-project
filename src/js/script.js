'use strict';

/* Variables */
// Родительский для переключающихся табов
const listControl = document.querySelector('.board-control__tabs');
// Родительский элемент, содержит иконки переключения
const switchList = document.querySelector('.view-switch');
// Иконки переключения
const switchIconTable = document.querySelector('.switch-table');
const switchIconList = document.querySelector('.switch-list');
// Для смены отображения карточек
const cardsContainter = document.querySelector('.card-list__container');
const cardsContainterChildren = document.querySelector('.card-list__container').children;

/* Functions */
// Переключает активный таб
function changeActiveTab(e) {
  const links = document.querySelector('.board-control__tabs .board-control__link-active');
  if (e.target.classList.contains('board-control__link')) {
    links.classList.remove('board-control__link-active');
    e.target.classList.add('board-control__link-active');
  }
}

// Получает 'путь' к событию e.target с помощью composedPath()
function switchListView(e) {
  const path = e.composedPath();
  console.log(path); // Выводит composedPath() в консоль
  for (let i = 0; i < path.length; i++) {
    if (path[i].tagName !== 'svg') {
      continue;
    } else {
      changeActiveIconSwitch(path[i]);
    }
  }
}

// смена активной иконки переключения
function changeActiveIconSwitch(elem) {
  if (!elem.classList.contains('view-switch__icon-active')) {
    document.querySelector('.view-switch__icon-active').classList.remove('view-switch__icon-active');
    elem.classList.add('view-switch__icon-active');
    changeView();
  } else {
    return;
  }
}

// смена отображения
function changeView() {
  cardsContainter.classList.toggle('card-list__container_list');
  for (let i = 0; i < cardsContainterChildren.length; i++) {
    cardsContainterChildren[i].classList.toggle('card-list__column_list');
  }
}

/* Listeners */
listControl.addEventListener('click', changeActiveTab);
switchList.addEventListener('click', switchListView);
