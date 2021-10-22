//////////////////////////////////////////// slider
(() => {

  // hot-provider-slider
  if (document.querySelector('.hot-provider__wrap-list')) {
    const hotProvider = new Swiper('.hot-provider__wrap-list', {
      slidesPerView: 5,
      navigation: {
        prevEl: '.hot-provider__btn-prev',
        nextEl: '.hot-provider__btn-next',
      },
      pagination: {
        el: '.hot-provider__pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 6
      },
      breakpoints: {
        1429: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 'auto'
        }
      }
    });
  }

  // cert-provider-slider
  if (document.querySelector('.cert-provider__wrap-list')) {

    let initCertProviderSlider = false;
    let certProviderSlider = null;

    const swiperMode = () => {
      if (document.documentElement.clientWidth < 768 && !initCertProviderSlider) {
        console.log(1)
        certProviderSlider = new Swiper('.cert-provider__wrap-list', {
          slidesPerView: 2,
          pagination: {
            el: '.cert-provider__pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 6
          },
          breakpoints: {
            576: {
              slidesPerView: 'auto'
            }
          }
        });

        initCertProviderSlider = true;

      } else if (document.documentElement.clientWidth >= 768 && initCertProviderSlider) {
        certProviderSlider.destroy();
        initCertProviderSlider = false;
      }
    };

    swiperMode();

    //On Resize
    window.addEventListener('resize', swiperMode);
  }

})();
