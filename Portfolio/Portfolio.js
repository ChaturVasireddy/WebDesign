const lenis = new Lenis({ autoRaf: true, });
lenis.on('scroll', (e) => { console.log(e); });

const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", e => { cursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px; backdrop-filter: invert(1);") })

const chatur = document.getElementById("chatur");
const mail = document.getElementById("mail");
mail.style.left = chatur.offsetLeft + "px";
window.addEventListener('resize', f => { mail.style.left = chatur.offsetLeft + "px"; });

gsap.defaults({ ease: "power1.inOut" });
dist = 249;
const mailtl = gsap.timeline({ paused: true })
  .to("#mail", { x: -dist })
  .to("#mail", { color: "#f4f4f4", duration: 0.15 }, "<")
  .to("#left", { x: -dist }, "<")
  .to("#chatur", { x: -dist, color: "transparent", }, "<")
  .to("#right", { x: dist }, "<")
chatur.addEventListener("mouseenter", function () { mailtl.play() })
chatur.addEventListener("mouseleave", function () { mailtl.reverse() })
mail.addEventListener("mouseenter", function () { mailtl.play() })
mail.addEventListener("mouseleave", function () { mailtl.reverse() })

//gsap.from("#left", { color: "black", ease: "power1.out", duration: 0.5 })
//gsap.from("#right", { color: "black", ease: "power1.out", duration: 0.5 })
//gsap.from("#chatur", { color: "black", ease: "power1.out", duration: 0.5 })

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
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c1; c1.style.top = ((4500 * self.progress) - 2050) + "px"; } } });
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c2; c2.style.top = ((-250 * self.progress) - 100) + "px"; } } });
gsap.to("#work", { scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", onUpdate: (self) => { c3; c3.style.top = ((4000 * self.progress) - 2000) + "px"; } } });