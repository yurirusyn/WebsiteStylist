class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 2;
    this.duration = 600;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 200;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = 0;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      const thisEase = this.isOpened
        ? i == 1
          ? ease.cubicOut
          : ease.cubicInOut
        : i == 1
        ? ease.cubicInOut
        : ease.cubicOut;
      points[i] =
        thisEase(
          Math.min(
            Math.max(time - this.delayPointsArray[i], 0) / this.duration,
            1
          )
        ) * 100;
    }

    let str = '';
    str += this.isOpened ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = ((i + 1) / (this.numPoints - 1)) * 100;
      const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
        points[i + 1]
      } `;
    }
    str += this.isOpened ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute(
          'd',
          this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i))
        );
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute(
          'd',
          this.updatePath(
            Date.now() -
              (this.timeStart + this.delayPerPath * (this.path.length - i - 1))
          )
        );
      }
    }
  }
  renderLoop() {
    this.render();
    if (
      Date.now() - this.timeStart <
      this.duration +
        this.delayPerPath * (this.path.length - 1) +
        this.delayPointsMax
    ) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    } else {
      this.isAnimating = false;
    }
  }
}

(function () {
  const elmHamburger = document.querySelector('.hamburger');
  const elmHamburgerModal = document.querySelector('.hamburger-modal');
  const gNavItems = document.querySelectorAll('.global-menu__item');
  const overlayGlobalMenu = document.querySelector('.global-menu');
  const elmOverlay = document.querySelector('.shape-overlays');
  const icon = document.querySelector('.menu-btn');
  const iconModal = document.querySelector('.menu-btn-modal');
  const overlay = new ShapeOverlays(elmOverlay);
  const closeMenu = document.querySelector('.global-menu__wrap');
  const closeMenuService = document.querySelector('.cross-block');
  const modal = document.querySelector('.modal');
  const hideCross = document.getElementById('close_pop_up2');
  const humCross = document.getElementById('crossHide');
  const showCross = document.getElementById('showCross');
  showCross.addEventListener('click', () => {
    hideCross.style.display = 'flex';
  });

  humCross.addEventListener('click', () => {
    hideCross.style.display = 'none';
  });

  elmHamburger.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
      elmHamburger.classList.add('is-opened-navi');
      icon.classList.add('menu-btn_active');
      overlayGlobalMenu.classList.add('overlay-global_menu');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
      elmHamburger.classList.remove('is-opened-navi');
      icon.classList.remove('menu-btn_active');
      overlayGlobalMenu.classList.remove('overlay-global_menu');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
    }
  });
  elmHamburgerModal.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
      elmHamburgerModal.classList.add('is-opened-navi');
      icon.classList.add('menu-btn_active');
      overlayGlobalMenu.classList.add('overlay-global_menu');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
      elmHamburgerModal.classList.remove('is-opened-navi');
      icon.classList.remove('menu-btn_active');
      overlayGlobalMenu.classList.remove('overlay-global_menu');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
    }
  });
  closeMenu.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }

    elmHamburger.classList.remove('is-opened-navi');
    elmHamburgerModal.classList.remove('is-opened-navi');
    console.log('modal', modal);
    modal.style.zIndex = '-1000';
    console.log('modal.style.zIndex', modal.style.zIndex);
    icon.classList.remove('menu-btn_active');

    overlay.close();
    if (overlay.isOpened === true) {
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
    }
  });
})();

const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const blockId = anchor.getAttribute('href').substring(1);
    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
