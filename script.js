var main = document.querySelector('.main');
var nav = document.querySelector('.nav');

var offset = main.offsetHeight - nav.offsetHeight;

window.onscroll = function()
{
  if(window.pageYOffset > offset)
  {
    nav.classList.remove('bottom-nav');
    nav.classList.add('top-nav');
  }
  else
  {
    nav.classList.add('bottom-nav');
    nav.classList.remove('top-nav');
  }
}