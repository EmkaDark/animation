document.addEventListener('DOMContentLoaded' , function (){
  let button = document.querySelector('.burger')
  let menu = document.querySelector('.menu');
  let closeButton = document.querySelector('.close');
 let headAnimation = gsap.timeline({paused: true});
 button.addEventListener('click' , function (){
  menu.classList.add('menu--open')
  headAnimation.play()
})
closeButton.addEventListener('click', () =>{
  setTimeout(()=>{
    menu.classList.remove('menu--open')

  },1500)
  headAnimation.reverse();
})
 headAnimation
 .from('.menu__top',{y:-50, opacity:0,duration:.6}, )
 .from('.close', {opacity:0,duration:.3})
 .from('.nav__item', {y:30, opacity:0,},{y:0, opacity:1, duration:'easu'})
 .from('.social, .menu__right', {y:20, opacity:0, duration:.6,})




   gsap.fromTo(".hero__left", {y:100, opacity:0,}, {opacity:1, y:0, duration:0.5,})
   gsap.fromTo(".hero__title",{y:15, opacity:0,}, {opacity:1, y:0, duration:1.5,})
   gsap.fromTo(".hero__descr",{ opacity:0,}, {opacity:1, duration:2, delay:.7,})
   gsap.fromTo(".image_1",{ opacity:0,}, {opacity:1, duration:2, delay:.7,})
   gsap.fromTo(".image_2",{ opacity:0,}, {opacity:1, duration:2, delay:1,})
   gsap.fromTo(".image_3",{ opacity:0,}, {opacity:1, duration:2, delay:1.3,})
   gsap.fromTo(".photos__author",{ opacity:0,}, {opacity:1, duration:2, delay:1.5,})
})
