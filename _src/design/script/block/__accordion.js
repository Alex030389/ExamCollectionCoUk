//////////////////////////////////////////// accordion
(() => {

  class Accordion {
    constructor(btns, close) {
      this.btns = btns;
      this.close = close;
      this.initialize();
    }

    initialize() {
      this.btns.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
          this.checkBtn(evt.target, this.close);
        })
      })
    }

    checkBtn(btn, close) {
      if (close) {
        this.btns.forEach((btn) => {
          btn.classList.remove('_active');
        });
      }

      btn.classList.toggle('_active');
    }
  }


  // data-accordion
  if (document.querySelector('[data-accordion]')) {
    const accordions = document.querySelectorAll('[data-accordion]');
    accordions.forEach((accordion) => {
      new Accordion(
        accordion.querySelectorAll('[data-accordion-btn]'),
      );
    })
  }

  // data-accordion-2
  if (document.querySelector('[data-accordion-2]')) {
    const accordions = document.querySelectorAll('[data-accordion-2]');
    accordions.forEach((accordion) => {
      new Accordion(
        accordion.querySelectorAll('[data-accordion-btn]'),
        true
      );
    })
  }

})();
