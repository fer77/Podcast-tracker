$(document).ready(function() {

  // On click, remove class on active element, add it to the new one

  $('header nav a').click(function(e) {

    $('header nav a.active').removeClass('active');
    $(this).addClass('active');

    // Scroll to anchor

    $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 70},'slow');

    e.preventDefault();
    return false;

  });

  // On scroll, remove class on active element and add it to the new one

  $(document).scroll(function() {

     var position = Math.floor($(this).scrollTop() / 765) + 1;

     $('header nav a.active').removeClass('active');
     $('header nav a.link-' + position).addClass('active');

  });
// Carousel

$('.carousel').children(":first").addClass('isActive');

function rotateClass() {
  $('.carousel > *.isActive').appendTo('.carousel').removeClass('isActive');
  $('.carousel').children(":first").addClass('isActive');
}

// Set the Delay Time
setInterval(function () {
  rotateClass();
}, 6000);

//like/dislike

});