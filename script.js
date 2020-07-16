var main = document.querySelector('.main');
var nav = document.querySelector('.nav');
var right1 = document.querySelector('.right1');
var right2 = document.querySelector('.right2');
var left = document.querySelector('.left');

//Get the button:
mybutton = document.getElementById("myBtn");

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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}

function updateScroll()
{
  right1.classList.add('fade-in');
  right2.classList.add('fade-in');
  left.classList.add('fade-in');
}

window.addEventListener('scroll', updateScroll)

// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}