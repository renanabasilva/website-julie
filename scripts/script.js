var grid = document.querySelector('.images');
var masonry = new Masonry(grid, {
  itemSelector: '.block',
  columnWidth: '.block',
  gutter: 20
});