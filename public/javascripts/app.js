$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

  // Parallax for 2013 omg
  var scrollBannerBG = function() {

    var bannerHeight, bannerVerticalPos, bgHeight, offset, width;
    width = $(window).width();
    // bannerHeight = 480;
    // bgHeight = 570;
    offset = ($(window).scrollTop() / $(document).height()) * 620;
    bannerVerticalPos = ((480 - 570) / 2) + offset;
    return $("#header").css({
      'background-position': "50% " + bannerVerticalPos + "px"
    });
  };
  $(window).bind("scroll", function(e) {
    if ($(window).scrollTop() < 480) {
      $('.side').css({'position':'static'});
      return scrollBannerBG();
    } else {
      $('.side').css({'position':'fixed'});
    }
  });
  return scrollBannerBG();

});