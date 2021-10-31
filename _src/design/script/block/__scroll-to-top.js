/////////////////////////////////////////// scroll to top
(() => {
  if(document.querySelector('.up')) {
    const up = document.querySelector('.up');

    window.onscroll = () => {
      if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        up.classList.add('up--active');
      } else {
        up.classList.remove('up--active');
      }
    };

    up.addEventListener('click', () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();
