import Sticky from 'sticky-js';

const offset = document.querySelector('nav').offsetHeight + 30;
const selector = '.sticky-top-element';

let sticky = new Sticky('.sticky-top-element', {
  stickyWrap: false,
  marginTop: offset,
  stickyFor: 768,
  stickyClass: 'sticked',
});
