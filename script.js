// The orange road fills in as the visitor scrolls down the timeline.
const timeline = document.querySelector(".timeline");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateRoad() {
  const box = timeline.getBoundingClientRect();
  const reached = window.innerHeight * 0.6 - box.top;
  const fill = Math.min(Math.max(reached, 0), box.height);
  timeline.style.setProperty("--fill", fill + "px");
}

if (timeline && !reduceMotion) {
  updateRoad();
  window.addEventListener("scroll", updateRoad, { passive: true });
  window.addEventListener("resize", updateRoad);
}
