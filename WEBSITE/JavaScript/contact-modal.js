const contactBtn = document.getElementById("contact-button");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const recipient = "kathompson879@gmail.com";
  const subject = encodeURIComponent("RE: Portfolio Website");
  const body = encodeURIComponent("Hi, I would like to get in touch with you.\n\n");

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  // Open the mailto link
  window.open(mailtoLink, "_blank");
});