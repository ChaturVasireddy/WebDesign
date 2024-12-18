const lenis = new Lenis({ autoRaf: true, });
lenis.on('scroll', (e) => { console.log(e); });

var wh = window.innerHeight;

gsap.to("#loadingscreen", { y:-wh,duration: 0.5, ease: "power1.inOut" })
gsap.to("#loadingscreen", { duration: 0, opacity:0,delay:0.5 })

gsap.from("#left",{y: 70,duration:0.8 ,ease:"power4.out",delay:0.4})
gsap.from("#chatur",{y: 70,duration:0.8 ,ease:"power4.out",delay:0.4})
gsap.from("#right",{y: 70,duration:0.8 ,ease:"power4.out",delay:0.4})
gsap.from("#mail",{y: 70,duration:0.8 ,ease:"power4.out",delay:0.4})

const chatur = document.getElementById("chatur");
const mail = document.getElementById("mail");
mail.style.left = chatur.offsetLeft + "px";
window.addEventListener('resize', f => { mail.style.left = chatur.offsetLeft + "px"; });

var ww = window.innerWidth;
dist = (0.144*ww);
window.addEventListener('resize', f => { ww = window.innerWidth; });      //not working on window resize
gsap.defaults({ ease: "power1.inOut" });
const mailtl = gsap.timeline({ paused: true })
  .to("#mail", { x: -dist,delay:0.075 })
  .to("#mail", { color: "#f4f4f4", duration: 0.15 }, "<")
  .to("#left", { x: -dist }, "<")
  .to("#chatur", { x: -dist, color: "transparent" }, "<")
  .to("#right", { x: dist }, "<")
chatur.addEventListener("mouseenter", function () { mailtl.play() })
chatur.addEventListener("mouseleave", function () { mailtl.reverse() })
mail.addEventListener("mouseenter", function () { mailtl.play() })
mail.addEventListener("mouseleave", function () { mailtl.reverse() })

const copytl = gsap.timeline({ paused: true })
  .to("#copy", { y: (-0.020*ww),color:"#6c6c6c",duration:0.35,ease:"power2.inOut"})
  .to("#copy", { y: 0,color:"#0b0b0b",duration:0.35,ease:"power1.inOut",delay:0.8})

chatur.addEventListener("click", function () {navigator.clipboard.writeText("chaturatwork@gmail.com"),copytl.restart()});
mail.addEventListener("click", function () {navigator.clipboard.writeText("chaturatwork@gmail.com"),copytl.restart()});

gsap.from("#da", { transformOrigin: "bottom center", scaleY: 6, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#ia1", { transformOrigin: "top center", scaleY: 2.2, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#ia2", { transformOrigin: "center", scaleX: 3, duration: 1.2, ease: "power1.out" })
gsap.from("#na", { transformOrigin: "top center", scaleY: 3, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#ra", { transformOrigin: "top center", scaleY: 4, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#dota", { transformOrigin: "bottom center", scaleY: 4, duration: 1.2, ease: "power1.out" })

gsap.registerPlugin(ScrollTrigger);


gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c1; c1.style.top = (((1.5*wh) * self.progress) - (wh*0.85)) + "px"; } } });
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c2; c2.style.top = (((-0.05*wh) * self.progress)) + "px"; } } });
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c3; c3.style.top = (((1.5*wh) * self.progress) - (wh*0.5)) + "px"; } } });