// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
      method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
          console[method] = noop;
      }
  }
}());

// This is the click function that causes the page to scroll down when the scroll functions are clicked. 

// IMPORTANT NOTE: When you make changes to the page, you may need to refresh for it to work correctly.

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
  });
});


// Nav Functionality

$(document).ready(function() {
  console.log("Document fired up and ready to serve.");
  $("#toggle").on("click", function() {
    $(this).toggleClass("active focus");
    console.log("Nav toggle was clicked.");
    $("#overlay").toggleClass("open");
  });
});


// Log test

console.log(
  "You know I hate to ask, but are friends electric?"
);