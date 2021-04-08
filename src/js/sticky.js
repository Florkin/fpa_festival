import Sticky from 'sticky-js';

const nav = document.querySelector('nav');
// For event infos
let sticky = new Sticky('.sticky-top-element', {
  stickyWrap: true,
  marginTop: 70,
  stickyFor: 992,
  stickyClass: 'sticked',
});

// For header sticky top
const changeNavWhenSticked = () => {
  if (window.scrollY > 50) {
    nav.classList.add('sticked');
  } else {
    nav.classList.remove('sticked');
  }
};
changeNavWhenSticked();
window.addEventListener('scroll', () => {
  changeNavWhenSticked();
});
