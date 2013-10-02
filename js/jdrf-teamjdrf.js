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
	
	/*! Ajax-Include - v0.1.2 - 2013-06-18
* http://filamentgroup.com/lab/ajax_includes_modular_content/
* Copyright (c) 2013 @scottjehl, Filament Group, Inc.; Licensed MIT */
(function(e,t,n){var r={boundAttr:"data-ajax-bound",interactionAttr:"data-interaction",makeReq:function(t,n,r){e.get(t,function(e,t,r){n.trigger("ajaxIncludeResponse",[e,r])})},plugins:{}};e.fn.ajaxInclude=function(n){function u(t){var n=t.data("url");o.proxy&&e.inArray(n,i)===-1?(i.push(n),s=s.add(t)):r.makeReq(n,t)}function a(){i.length&&(r.makeReq(o.proxy+i.join(","),s),s=e(),i=[])}function f(e,n){function i(){u(e),a(),r.removeListener(i)}var r=t.matchMedia(n);r.addListener&&r.addListener(i)}var i=[],s=e(),o={proxy:null};return typeof n=="string"?o.proxy=n:o=e.extend(o,n),this.not("["+r.boundAttr+"],["+r.interactionAttr+"]").each(function(n){var i=e(this),s=i.attr("data-media"),a=["append","replace","before","after"],l,c,h=!1,p=i.attr("data-target");for(var d=a.length,v=0;v<d;v++)i.is("[data-"+a[v]+"]")&&(l=a[v],c=i.attr("data-"+l));c||(c=i.attr("href")||i.attr("action"),h=!0),l==="replace"&&(l+="With"),i.data("method",l).data("url",c).data("target",p).attr(r.boundAttr,!0).each(function(){for(var e in r.plugins)r.plugins[e].call(this,o)}).bind("ajaxIncludeResponse",function(t,n,r){var s=n,u=p?e(p):i;if(o.proxy){var a=s.match(new RegExp("<entry url=[\"']?"+i.data("url")+"[\"']?>(?:(?!</entry>)(.|\n))*","gmi"));a&&(s=a[0])}var f=i.triggerHandler("ajaxIncludeFilter",[s]);f&&(s=f),l==="replaceWith"?(i.trigger("ajaxInclude",[s]),u[i.data("method")](s)):(u[i.data("method")](s),i.trigger("ajaxInclude",[s]))}),h?r.makeReq(c,i,!0):!s||t.matchMedia&&t.matchMedia(s).matches?u(i):s&&t.matchMedia&&f(i,s)}),a(),this},t.AjaxInclude=r})(jQuery,this);
  
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
