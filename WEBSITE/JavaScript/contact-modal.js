// Get elements
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close");
const contactBtn = document.getElementById("contact-button");

// Open modal when nav button is clicked
contactBtn.addEventListener("click", (e) => {
  e.preventDefault(); // stop the page from scrolling to #contact
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("show"), 10); // animate in
});

// Close modal when X is clicked
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300);
});

// Close modal when clicking outside the section
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
  }
});