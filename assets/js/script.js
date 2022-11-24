'use strict';

// change tabs active

document.querySelector('.table__tabs').addEventListener('click', function (e) {
  const links = document.querySelector('.table__tabs .table__link-active');
  if (e.target.classList.contains('table__link')) {
    links.classList.remove('table__link-active');
    console.log('e');
    e.target.classList.add('table__link-active');
  }
});

// toggle card display

document.querySelector('.view-switch').addEventListener('click', function (e) {
  const list = document.querySelector('.view-switch').children;
  console.log(e.target.tagName);
  if (e.target.tagName === 'use') {
    if (!e.target.parentElement.classList.contains('view-switch__icon_active')) {
      //change active element
      document.querySelector('.view-switch__icon_active').classList.remove('view-switch__icon_active');
      e.target.parentElement.classList.add('view-switch__icon_active');
      // toggle card display
      document.querySelector('.card-list__container').classList.toggle('card-list__container_list');
      const children = document.querySelector('.card-list__container').children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.toggle('card-list__column_list');
      }
    }
  } else if (e.target.tagName === 'svg') {
    if (!e.target.classList.contains('view-switch__icon_active')) {
      //change active element
      document.querySelector('.view-switch__icon_active').classList.remove('view-switch__icon_active');
      e.target.classList.add('view-switch__icon_active');
      // toggle card display
      document.querySelector('.card-list__container').classList.toggle('card-list__container_list');
      const children = document.querySelector('.card-list__container').children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.toggle('card-list__column_list');
      }
    }
  }
});
