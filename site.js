$(document).ready(function() {

$(document).scroll(function() {
  if ($(document).scrollTop() >= 300) {
    $('#main').addClass('.hide');
    $('#scroll').removeClass('hide')
  } else {
    $('#main').removeClass('.hide');
    $('#scroll').addClass('hide')
  }
})
});
