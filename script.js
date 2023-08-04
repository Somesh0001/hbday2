gsap.from("#heading1", {
  x: -20,
  opacity: 0,
  scale: 0,
  duration: 1,
});
gsap.from(".cake1", {
  x: 300,
  opacity: 0,
  scale: 0,
  duration: 1,
  delay: 0.5,
});
gsap.from(".c1text", {
  x: -300,
  opacity: 0,
  scale: 0,
  duration: 1,
  delay: 1,
});
gsap.from(".page2 #heading2 #cake2", {
  x: 300,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".page2 #heading2 #cake2",
    scroller: "body",
    toggleActions: "restart reset restart reset",
   
  },
});
gsap.from(".page2 #content2", {
  x: 400,
  scale: 0,
  scrollTrigger: {
    trigger: ".page2 #content2",
    scroller: "body",
    toggleActions: "restart reset restart reset",
  
  },
});
gsap.from(".page3 #content3", {
  x: -500,
  scale: 0,
  scrollTrigger: {
    trigger: ".page3 #content3",
    scroller: "body",
    toggleActions: "restart reset restart reset",
  },
});
