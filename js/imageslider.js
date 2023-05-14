const images = document.querySelectorAll('.slider img');
let index = 0;

function slide() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(slide, 3000);
