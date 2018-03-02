$(document).ready(function() {

$(document).scroll(function() {
  if ($(document).scrollTop() >= 268) {
    $('#main').addClass('.hide');
    $('#scroll').removeClass('hide')
  } else {
    $('#main').removeClass('.hide');
    $('#scroll').addClass('hide')
  }
})
});
// ===== Scroll Smoothing =====
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top // - $('#main').height()
        }, 500);
        return false;
      }
    }
  });
});
