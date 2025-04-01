import { gsap } from "gsap";

export const animateLandingPage = (
  landingTextRef: React.RefObject<HTMLDivElement | null>,
  cardRefs: React.RefObject<HTMLDivElement | null>[]
) => {
  const tl = gsap.timeline();

  // Ensure all cards have the "hidden" class before animation
  cardRefs.forEach((ref) => {
    if (ref.current) {
      ref.current.classList.add("hidden");
    }
  });

  // Animate "ISRO" text appearing from the bottom (slower)
  if (landingTextRef.current) {
    tl.fromTo(
      landingTextRef.current,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
    );
  }

  // Animate cards only after the text animation completes
  tl.add(() => {
    cardRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.classList.remove("hidden"); // Remove hidden class before animation
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power1.out",
            delay: index * 0.4, // Stagger effect
          }
        );
      }
    });
  }, "+=0.5"); // Delay of 0.5s after text animation before cards start

  return tl;
};
