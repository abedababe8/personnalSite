let bio = document.querySelector('#bio')


$(document).ready(function() {
    let bottomImgInt;
  $(document).scroll(function() {
    if ($(document).scrollTop() >= 268) {
      $('#main').addClass('.hide');
      $('#scroll').removeClass('hide')
    } else {
      $('#main').removeClass('.hide');
      $('#scroll').addClass('hide')
    }
  })

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

let currentimg;
let currentGradient
const bigboi = document.querySelector('#big-boi')
const img1 = document.querySelectorAll('.img')[0]
const img2 = document.querySelectorAll('.img')[1]
const img3 = document.querySelectorAll('.img')[2]

currentimg = setInterval(function(){
  if (img3.classList.contains('current-img'))  {
  img3.classList.remove('current-img')
  img1.classList.add('current-img')
} else if (img1.classList.contains('current-img'))  {
  img1.classList.remove('current-img')
  img2.classList.add('current-img')
} else if (img2.classList.contains('current-img'))  {
  img2.classList.remove('current-img')
  img3.classList.add('current-img')
  }
}, 7000)
// $('.img1').fadeIn(200);
// $('.img2').hide;
// $('.img3').hide;
// $('.img2').fadeIn(200);
// $('.img1').hide;
// $('.img3').hide;
// $('.img3').fadeIn(200);
// $('.img1').hide;
// $('.img2').hide;
currentGradient = setInterval(function() {
  if (bigboi.classList.contains('bigboi-background1')){
    bigboi.classList.remove('bigboi-background1')
    bigboi.classList.add('bigboi-background2')
  } else if (bigboi.classList.contains('bigboi-background2')){
    bigboi.classList.remove('bigboi-background2')
    bigboi.classList.add('bigboi-background3')
  } else if (bigboi.classList.contains('bigboi-background3')){
    bigboi.classList.remove('bigboi-background3')
    bigboi.classList.add('bigboi-background1')
  }
}, 7000)

});
