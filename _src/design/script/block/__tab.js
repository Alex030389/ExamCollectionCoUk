//////////////////////////////////////////// tab
(() => {

  class Tab {
    constructor(btns, contents) {
      this.btns = btns;
      this.contents = contents;
      this.activate();
    }

    activate() {
      this.btns.forEach((el, index) => {
        el.addEventListener('click', (evt) => {
          this.activateBtn(evt);
          this.activateContent(index);
        });
      });
    }

    activateBtn(evt) {
      this.btns.forEach((btn) => {
        btn.classList.remove('_active');
      });
      evt.target.classList.add('_active');
    }

    activateContent(index) {
      this.contents.forEach((content) => {
        content.classList.remove('_active');
      });

      this.contents[index].classList.add('_active');
    }
  }

  /////////////////////////////////////////// data-tabs
  if (document.querySelector('[data-tabs]')) {
    const tabs = document.querySelectorAll('[data-tabs]');

    tabs.forEach((tab) => {
      new Tab(
        tab.querySelectorAll('[data-tabs-btn]'),
        tab.querySelectorAll('[data-tabs-content]')
      );
    });
  }

})();
