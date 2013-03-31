$(function() {

  // Bind toggle switches
  $('.toggle-switch').on('click', function(event) {
    event.preventDefault();
    $this = $(this);
    $target = $this.attr('data-toggle-target');
    if ($target == '$next-sibling') {
      $this.next().toggle();
    }
    else if ($target == '$previous-sibling') {
      $this.next().toggle();
    }
    else {
      $($target).toggle();
    }
  });
  
  
  // Work canvas pushers
  function adjustPushers() {
    $(".canvas-pusher").height($(window).height() * 0.91);
  }
  adjustPushers();
  $(window).resize(adjustPushers());
  
  // Scrolling between sections
  var scrollTime    = 414,
      scrollElement = "html,body";
  
  $("a[href^='#']").on("click", function(event) {
    event.preventDefault(); 
    var $this   = $(this),
        target  = this.hash,
        $target = $(target);
    
    $(scrollElement).stop().animate({
      "scrollTop": $target.offset().top
    }, scrollTime, "swing", function () {
      window.location.hash = target;
    });
  });
  
  
  // Fallbacks for browsers that claim to support @font-face, but actually don't
  if (!!navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(webOS)|(UCWEB)|(Windows Phone OS 7)|(XBLWP7)|(ZuneWP7)/)) {
    $("html").removeClass("fontface").addClass("no-fontface");
  }
  
  // Analytics
  var _gauges = _gauges || [];
  (function() {
    var t   = document.createElement('script');
    t.type  = 'text/javascript';
    t.async = true;
    t.id    = 'gauges-tracker';
    t.setAttribute('data-site-id', '4f646a2d613f5d34f200009b');
    t.src = '//secure.gaug.es/track.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
  })();

});