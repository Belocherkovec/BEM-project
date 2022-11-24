'use strict';
document.querySelector('.table__tabs').addEventListener('click', function (e) {
  const links = document.querySelector('.table__tabs .table__link-active');
  if (e.target.classList.contains('table__link')) {
    links.classList.remove('table__link-active');
    console.log('e');
    e.target.classList.add('table__link-active');
  }
});
