jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
});


$(function() {

  // Forcibly show fallback fonts
  // needed when people use script blockers and break webfont loaders

  function neckbeardFallback() {
    document.getElementsByTagName('html')[0].className += ' neckbeardFallback'
  }

  window.setTimeout(neckbeardFallback, 3500);


  // SECTION SCROLLING

  var scrollTime    = 424,
      scrollElement = "html,body"
      scrollEasing = 'easeInOutQuart';

  function scrollColumn(direction) {

    var scrollAmount;
    var viewportScrolled = $(document).scrollLeft();
    var chosenColumn;

    if (direction == 'right') {
      var columnsSelector = $('.column');
    }

    if (direction == 'left') {
      var columnsSelector = $( $(".column").get().reverse() );
    }

    columnsSelector.each(function() {
      var $this = $(this);
      var columnPosition = $this.offset().left;

      if (direction == 'right') {
        if (columnPosition > viewportScrolled) {
          chosenColumn = $this;
          scrollAmount = $this.offset().left;
          return false;
        }
        if (viewportScrolled + $(window).width() == $(document).width()) {
          scrollAmount = viewportScrolled;
        }
      }
      else if (direction == 'left') {
        if (columnPosition < viewportScrolled) {
          chosenColumn = $this;
          scrollAmount = $this.offset().left;
          return false;
        }
        if (viewportScrolled == 0) {
          scrollAmount = 0;
        }
      }
    });

    event.preventDefault();
    $(scrollElement).stop().animate(
      {"scrollLeft": scrollAmount},
      scrollTime,
      scrollEasing
    );

  }


  // With keyboard

  var keyCode = {
    up:    38,
    down:  40,
    left:  37,
    right: 39
  };

  $(document).keydown(function (e) {
    var key = e.keyCode || e.which;

    if (key === keyCode.left) {
      scrollColumn('left');
    }

    if (key === keyCode.right) {
      scrollColumn('right');
    }
  });

  !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
  arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
  d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
  insertBefore(d,q)}(window,document,'script','_gs');

  _gs('GSN-217690-T');

});
