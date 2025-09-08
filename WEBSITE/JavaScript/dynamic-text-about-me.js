/* https://codepen.io/elis-felicio/pen/dPoWMMK */
document.addEventListener("DOMContentLoaded", function() {

const words = ["a team player.", "a top communicator.", "committed and hardworking.", "constantly learning.", "self-motivated.", "adaptable.", "detail-oriented."];
    const dynamicText = document.getElementById("dynamic-text");

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;
    let deletingSpeed = 60;
    let pauseBetweenWords = 1500;

    function type() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        dynamicText.textContent = currentWord.slice(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, pauseBetweenWords);
          return;
        }
      } else {
        dynamicText.textContent = currentWord.slice(0, letterIndex-1);
        letterIndex--;

        if (letterIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex+1) % words.length;
        }
      }
      setTimeout(type, isDeleting?deletingSpeed:typingSpeed);
    }

    type();
});