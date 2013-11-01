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
	
	// Activate Personal Page Carousels
	$('.carousel--personal-page').carousel({
  	interval: false
	})
  
  // This is a more complex example. In this case, we want to use a
// sliding view for layouts smaller than 768 px/pt, but a different
// type of navigation for larger layouts.

// First, let's define the variables we'll need and the initial
// values of whichever ones we can right now.

var $window = $(window) // For viewport width and resizing
  , $viewContainer = $('.views') // Our view container
  , options = { // SimpleSlideView plugin options
      // If the viewport is currently 768px or wider, do not
      // activate the plugin immediately. Otherwise, go for it!
      deferOn: ($window.width() >= 768),
      duration: 250 // Animation duration
    }
  , slideView; // We wait to initialize the plugin

// Next, we bind some events to the view container. This will
// let us change the behavior of the page depending on whether
// or not the plugin is activated or deactivated.

// We're binding these events _before_ we initialize the plugin
// because otherwise we can't detect the 'slideViewDeferred'
// event, which is only fired when the plugin is first initialized.

$viewContainer
  // This function is called if the plugin is initialized but
  // not activated immediately, or if the plugin is turned off.
  .on('slideViewDeferred slideViewOff', function () {
    // Really barebones "tab" interface for when sliding views
    // are turned off. I would not recommend using this outside
    // the context of this demo... consider it a placeholder for
    // "your large layout logic here".
    $('a[data-pushview]').on('click', function (event) {
      var href = $(this).attr('href')
        , $target = $(href)
        , $nav;
      if ($target.length) {
        event.preventDefault();
        $target.addClass('is-active');
        $nav = $('#event-info-nav');
        $nav.find('.is-active').removeClass('is-active');
        $nav.find('[href="' + href + '"]').addClass('is-active');
        $target.siblings().removeClass('is-active');
      }
    });
  })
  // This is called when the plugin is _about_ to activate.
  .on('slideViewBeforeOn', function () {
    // Remove the event we bound to these elements in the
    // previous function so that SimpleSlideView can use
    // them without conflicts.
    $('a[data-pushview]').off('click');
  });

// Now that we've bound our events, we're ready to initialize
// the plugin! Yay!

// We are storing it to the 'slideView' variable we created
// earlier. This will let us use the plugin's methods, which
// we'll need to activate/deactivate it if the window size
// changes.
slideView = $viewContainer.simpleSlideView(options);

// Finally, we bind a function to the window's 'resize' event
// so that we can turn the plugin on and off if/when the size
// of the window changes.
$window.on('resize', function(){
  slideView.toggle($window.width() < 768);
});

  
})(jQuery);
