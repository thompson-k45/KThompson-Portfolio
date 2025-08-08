// Make fade globally available
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

document.addEventListener('DOMContentLoaded', function () {
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const sendBtn = document.getElementById('sendEmail');
  const letter = document.querySelector('.letter');

  email.style.display = 'block';
  message.style.display = 'block';
  sendBtn.style.display = 'block';

  fade(email, 1, 500);
  fade(message, 1, 500);
  fade(sendBtn, 1, 500);

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => e.preventDefault());
  }

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!email.checkValidity() || !message.checkValidity()) {
      email.reportValidity();
      message.reportValidity();
      return;
    }

    letter.classList.add('animate');

    fade(email, 0, 500, () => email.style.display = 'none');
    fade(message, 0, 500, () => message.style.display = 'none');

    sendBtn.classList.add('animate');

    setTimeout(() => {
      sendBtn.setAttribute('aria-label', 'Sent!');
      letter.classList.add('fly-away');
    }, 2000);

    setTimeout(() => {
      const feedback = document.querySelector('.userfeedback');
      if (feedback) {
        feedback.style.display = 'block';
        fade(feedback, 1, 500);
      }
        }, 3500); // waits for fly-away to finish
  });

  const newMessageBtn = document.getElementById('newMessage');
  if (newMessageBtn) {
    newMessageBtn.addEventListener('click', () => {
      const feedback = document.querySelector('.userfeedback');

      if (feedback) {
        fade(feedback, 0, 300, () => {
          feedback.style.display = 'none';
        });
      }

      letter.classList.remove('fly-away', 'animate');
      letter.classList.add('reset-entry');

      requestAnimationFrame(() => {
        void letter.offsetWidth;
        letter.classList.remove('reset-entry');
      });

      email.style.display = 'block';
      message.style.display = 'block';
      sendBtn.style.display = 'block';

      fade(email, 1, 500);
      fade(message, 1, 500);
      fade(sendBtn, 1, 500);

      sendBtn.classList.remove('animate');
      sendBtn.value = 'Send';
      sendBtn.id = 'sendEmail';
      sendBtn.style.color = '';
      sendBtn.style.background = '';

      const btnText = sendBtn.querySelector('.btn-text');
      if (btnText) {
        btnText.remove();
        sendBtn.textContent = 'Send';
      }
    });
  }
});