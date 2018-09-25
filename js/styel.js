$(document).ready(function(){
  // navbar active class
  $('ul li a').click(function(){
    $('a').removeClass("active");
    $(this).addClass('active');
  });

// carousel timer
  $('.carousel').carousel({
  interval: 2000
  })



/*===============================isotop ==============================*/
  var $grid = $('.product').isotope({
// options
  });

// filter items on button click
  $('.filter-button').on( 'click', 'ul li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  });

  // active class

  $('#protfolio ul li').click(function(){
    $('li').removeClass("active");
    $(this).addClass('active');
  });





});
