// This is the click function that causes the page to scroll down when the scroll functions are clicked. 

// IMPORTANT NOTE: When you make changes to the page, you may need to refresh for it to work correctly.

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
  });
});