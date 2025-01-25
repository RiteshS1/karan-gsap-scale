// Get elements
const video = document.querySelector("#svg-video");
const svgWrapper = document.querySelector(".svg-wrapper");

// Initial state
gsap.set(video, {
  scale: 1.5, // Start with a zoomed-in scale so part of the image is clipped
  transformOrigin: "top left", // Align transformation to the top-left corner
});

// Animate the unmasking and scaling
gsap.to(video, {
  scale: 1, // Shrink to reveal hidden parts
  duration: 4, // Match this duration with your SVG's scaling animation
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".landing-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});
