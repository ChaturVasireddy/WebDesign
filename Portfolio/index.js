const lenis = new Lenis({ autoRaf: true, });
lenis.on('scroll', (e) => { console.log(e); });

const lefta = new SplitType("#left");
const righta = new SplitType("#right");
const chatura = new SplitType("#chatur");
const maila = new SplitType("#mail");
gsap.from(".char",{y: 70,duration:0.8 ,ease:"power3.out",delay:0.4})

const chatur = document.getElementById("chatur");
const mail = document.getElementById("mail");
mail.style.left = chatur.offsetLeft + "px";
window.addEventListener('resize', f => { mail.style.left = chatur.offsetLeft + "px"; });

gsap.defaults({ ease: "power1.inOut" });
dist = 255;
const mailtl = gsap.timeline({ paused: true })
  .to("#mail", { x: -dist })
  .to("#mail", { color: "#f4f4f4", duration: 0.15 }, "<")
  .to("#left", { x: -dist }, "<")
  .to("#chatur", { x: -dist, color: "transparent" }, "<")
  .to("#right", { x: dist }, "<")
chatur.addEventListener("mouseenter", function () { mailtl.play() })
chatur.addEventListener("mouseleave", function () { mailtl.reverse() })
mail.addEventListener("mouseenter", function () { mailtl.play() })
mail.addEventListener("mouseleave", function () { mailtl.reverse() })

const copytl = gsap.timeline({ paused: true })
  .to("#copy", { y: -30,color:"#404040",duration:0.3,delay:0.3})
chatur.addEventListener("mouseenter", function () { copytl.play() })
chatur.addEventListener("mouseleave", function () { copytl.reverse() })
mail.addEventListener("mouseenter", function () { copytl.play() })
mail.addEventListener("mouseleave", function () { copytl.reverse() })

chatur.addEventListener("click", function () {navigator.clipboard.writeText("chaturvasireddy@gmail.com")});
mail.addEventListener("click", function () {navigator.clipboard.writeText("chaturvasireddy@gmail.com")});

gsap.from("#da", { transformOrigin: "bottom center", scaleY: 6, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#ia1", { transformOrigin: "top center", scaleY: 2.2, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#ia2", { transformOrigin: "center", scaleX: 3, duration: 1.2, ease: "power1.out" })
gsap.from("#na", { transformOrigin: "top center", scaleY: 3, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#ra", { transformOrigin: "top center", scaleY: 4, duration: 1, ease: "power1.out", delay: 0.2 })
gsap.from("#dota", { transformOrigin: "bottom center", scaleY: 4, duration: 1.2, ease: "power1.out" })

gsap.registerPlugin(ScrollTrigger);

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c1; c1.style.top = ((3350 * self.progress) - 1700) + "px"; } } });
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c2; c2.style.top = ((-200 * self.progress) -50) + "px"; } } });
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c3; c3.style.top = ((3100 * self.progress) - 1500) + "px"; } } });
