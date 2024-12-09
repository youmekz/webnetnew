function checkScroll() {
  if (window.scrollY >= 100) {
    document.querySelector('.messangers').style.right = '1.3rem';
  } else {
    document.querySelector('.messangers').style.right = '-200px';
  }
}

window.addEventListener('scroll', checkScroll);
