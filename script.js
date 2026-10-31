// The orange road fills in as the visitor scrolls down the timeline.
const timeline = document.querySelector(".timeline");

function updateRoad() {
  const box = timeline.getBoundingClientRect();
  const reached = window.innerHeight * 0.6 - box.top;
  const fill = Math.min(Math.max(reached, 0), box.height);
  timeline.style.setProperty("--fill", fill + "px");
}

if (timeline) {
  updateRoad();
  window.addEventListener("scroll", updateRoad, { passive: true });
  window.addEventListener("resize", updateRoad);
}

// Light / dark switch. The page already picked a theme in <head> (saved choice, else the device setting).
const toggle = document.querySelector(".theme-toggle");

function showToggleLabel() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggle.textContent = isDark ? "Light mode" : "Dark mode";
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

if (toggle) {
  showToggleLabel();
  toggle.addEventListener("click", function () {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    showToggleLabel();
  });
}
