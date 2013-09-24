(function($) {
  $(document).ready(function() {
    $('[data-toggle=offcanvas]').click(function() {
      $('html').toggleClass('offcanvas-active');
    });
  });
  
  var $window = $(window);

  // Function to handle changes to off canvas classes based on window width
  function checkWidth() {
  if ($window.width() >= 768) {
      $('#more').addClass('in');
      }
  }

  // Execute on load
  checkWidth();

  // Bind event listener
  $(window).resize(checkWidth);
  
  // Activate Tooltips
  $('[data-toggle="tooltip"]').tooltip();
  
    
})(jQuery);