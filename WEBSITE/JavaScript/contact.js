/* ADAPTED FROM: https://codepen.io/tarunraotd/pen/Njowee */

document.addEventListener('DOMContentLoaded', function () {
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const sendBtn = document.getElementById('sendEmail');
  const letter = document.querySelector('.letter');

  // Reveal form inputs right away
  email.style.display = 'block';
  message.style.display = 'block';
  sendBtn.style.display = 'block';

  fade(email, 1, 500);
  fade(message, 1, 500);
  fade(sendBtn, 1, 500);

  // Prevent form submission refresh if form element is used
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => e.preventDefault());
  }

  // Send button logic
sendBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page refresh

  // Validate inputs
  if (!email.checkValidity() || !message.checkValidity()) {
    email.reportValidity();
    message.reportValidity();
    return;
  }

  // Animate letter flap
  letter.classList.add('animate');

  // Fade out form elements
  fade(email, 0, 500, () => email.style.display = 'none');
  fade(message, 0, 500, () => message.style.display = 'none');
  fade(sendBtn, 0, 500, () => sendBtn.style.display = 'none');

  sendBtn.classList.add('animate');
  sendBtn.value = '...';

  // After sending animation, animate the letter flying away
  setTimeout(() => {
    sendBtn.value = 'Sent!';
    sendBtn.removeAttribute('id');

    // Fly the letter away
    letter.classList.add('fly-away');
  }, 2000);
});

  function fade(element, targetOpacity, duration, callback) {
    let start = null;
    let initial = parseFloat(getComputedStyle(element).opacity);
    const change = targetOpacity - initial;

    function animate(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let fraction = Math.min(progress / duration, 1);
      element.style.opacity = initial + change * fraction;

      if (fraction < 1) {
        requestAnimationFrame(animate);
      } else if (callback) {
        callback();
      }
    }
    requestAnimationFrame(animate);
  }
});


  window.addEventListener('resize', () => {
});