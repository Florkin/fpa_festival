import Sticky from 'sticky-js';

let sticky = new Sticky('.sticky-top-element', {
  stickyWrap: true,
  marginTop: document.querySelector('nav').offsetHeight + 30,
  stickyFor: 992,
  stickyClass: 'sticked',
});
