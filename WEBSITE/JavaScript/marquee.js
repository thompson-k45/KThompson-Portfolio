document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const marqueeContent = document.querySelector("ul.marquee-content");

  if (!marqueeContent) return; // stop if element doesn’t exist

  // Get the CSS property and convert to number
  const marqueeElementsDisplayed = parseInt(
    getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")
  );

  // Set --marquee-elements dynamically
  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  // Clone first N elements for continuous marquee
  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
});
