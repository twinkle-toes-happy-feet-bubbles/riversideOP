/* CURSOR */

let mouseCursor = document.querySelector('.cursor');

let hoverLinks = document.querySelectorAll('.cursor-change');

window.addEventListener('mousemove', cursor);

function cursor(e) {

  mouseCursor.style.top = e.pageY + 'px';

  mouseCursor.style.left = e.pageX + 'px';

};

hoverLinks.forEach(link => {

  link.addEventListener('mouseleave', () => {

    mouseCursor.classList.remove('link-grow');

  });

  link.addEventListener('mouseover', () => {

    mouseCursor.classList.add('link-grow');

  });

});

/* ABOUT SECTION */

let tl = gsap.timeline({

  scrollTrigger: {

    trigger: ".about-grtng",

    start: "top center",

    toggleActions: "play none reverse none",

    scrub: 1,

    pinSpacing: "margin" } });

tl.from(".about-hey", { scale: 1, opacity: 1, duration: 2.5 });

let tl2 = gsap.timeline({

  scrollTrigger: {

    trigger: ".about-txt",

    start: "top center",

    toggleActions: "play none reverse none",

    pin: true,

    pinSpacing: "margin" } });

tl2.from(".about-web", { x: -1900, opasity: 0, duration: 1.5 });

let tl3 = gsap.timeline({

  scrollTrigger: {

    trigger: ".about-txt",

    start: "top center",

    toggleActions: "play none reverse none",

    pin: true,

    pinSpacing: "margin" } });

tl3.from(".about-toulouse", { x: 1400, opasity: 0, duration: 1 }, "-=1");

/* WORK SECTION */

/* WORK 01 */

let wk01 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work01",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk01.from(".work01-img", { scale: .85, opasity: 0, duration: 2 });

let wk012 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work01",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk012.from(".work01-txt", { opacity: 0, y: 100, duration: 1.5 });

/* WORK 02 */

let wk02 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work02",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk02.from(".work02-img", { scale: .85, opasity: 0, duration: 2 });

let wk022 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work02",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk022.from(".work02-txt", { opacity: 0, y: 100, duration: 1.5 });

/* WORK 03 */

let wk03 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work03",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk03.from(".work03-img", { scale: .85, opasity: 0, duration: 2 });

let wk032 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work03",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk032.from(".work03-txt", { opacity: 0, y: 100, duration: 1.5 });

/* WORK 04 */

let wk04 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work04",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk04.from(".work04-img", { scale: .85, opasity: 0, duration: 2 });

let wk042 = gsap.timeline({

  scrollTrigger: {

    trigger: ".work04",

    start: "top center",

    toggleActions: "play none none none",

    pinSpacing: "margin" } });

wk042.from(".work04-txt", { opacity: 0, y: 100, duration: 1.5 });

$(document).ready(function () {

  /* SCROLL UP */

  $(function () {

    $('.footer-go-up').click(function () {

      $('body,html').animate({

        scrollTop: 0 },

      'slow');

      return false;

    });

  });

  $(function () {

    $('.foot-up-hidden').click(function () {

      $('body,html').animate({

        scrollTop: 0 },

      'slow');

      return false;

    });

  });

  $(function () {

    $('.main-p-go-up').click(function () {

      $('body,html').animate({

        scrollTop: 0 },

      'slow');

      return false;

    });

  });

  /* SCROLL DOWN */

  $('.contact-me').click(function () {

    $('html, body').animate({

      scrollTop: $(document).height() },

    'slow');

    return false;

  });

});

