gsap.registerPlugin(ScrollTrigger);

// Get elements
const maskRect = document.querySelector("#unmask-path rect");
const svgImage = document.querySelector("#svg-image");
const svgWrapper = document.querySelector(".svg-wrapper");

// Initial State
gsap.set(maskRect, {
  width: 0, // Start fully masked
});

gsap.set(svgWrapper, {
  scale: 1,
  transformOrigin: "center center",
});

// Animation Timeline
gsap.timeline({
  scrollTrigger: {
    trigger: ".landing-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
})
  .to(maskRect, {
    width: "100%", // Unmask the full width
    duration: 3,
    ease: "power2.inOut",
  })
  .to(svgWrapper, {
    scale: 1.5, // Expand the entire SVG and image
    duration: 2,
    ease: "power2.out",
  });
