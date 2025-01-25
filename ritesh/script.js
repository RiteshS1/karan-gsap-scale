gsap.registerPlugin(ScrollTrigger);

// Get elements
const clipPath = document.querySelector("#mask-path");
const svgVideo = document.querySelector("#svg-video");
const animatedSvg = document.querySelector("#animated-svg");

// Initial state for SVG: Start scaled down
gsap.set(animatedSvg, {
  scale: 0.8, // Slightly smaller initial SVG scale
  transformOrigin: "top left",
});

// Initial state for video: Zoomed in and slightly shifted to the right and bottom
gsap.set(svgVideo, {
  scale: 2, // Start with a more zoomed-in scale
  transformOrigin: "top left",
  xPercent: 10,   // Shift image slightly to the right initially
  yPercent: 10,   // Shift image slightly to the bottom initially
});

// Animate SVG scale to expand from top-left
gsap.to(animatedSvg, {
  scale: 2.5, // Scale SVG to zoom in and cover screen
  duration: 4,
  transformOrigin: "top left",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".landing-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    markers: true,
  },
});

// Animate video scale and position to reveal full image
gsap.to(svgVideo, {
  scale: 1, // Scale video down to normal size to fit revealed area
  xPercent: 0,     // Shift image back to center horizontally
  yPercent: 0,     // Shift image back to center vertically
  duration: 4,
  transformOrigin: "top left",
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".landing-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});