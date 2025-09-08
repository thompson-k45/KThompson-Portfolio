document.addEventListener('DOMContentLoaded', () => {

(function() {
  const DESIRED_WIDTH = 320;   // match the CSS li width (minus padding/gap)
  const DESIRED_HEIGHT = 270;

  function initCredlyBadges() {
    // 1) Ensure each placeholder has the correct attributes and inline sizing
    const badgeDivs = document.querySelectorAll('.certs-content div[data-share-badge-id]');
    badgeDivs.forEach(div => {
      div.setAttribute('data-iframe-width', DESIRED_WIDTH);
      div.setAttribute('data-iframe-height', DESIRED_HEIGHT);
      // use the full-type card which shows the full text
      div.setAttribute('data-share-badge-type', 'full');
      // set inline size on the wrapper so the script accurately reads available width
      div.style.width = DESIRED_WIDTH + 'px';
      div.style.height = DESIRED_HEIGHT + 'px';
    });

    // 2) Remove any iframes already injected by Credly so we start fresh
    document.querySelectorAll('.certs-content iframe').forEach(iframe => iframe.remove());

    // 3) Remove existing embed script (if present) then append a fresh one so it runs
    const existing = document.querySelector('script[src="https://cdn.credly.com/assets/utilities/embed.js"]');
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    s.async = true;
    // after embed script loads, give it a little time then enforce sizing on the created iframes
    s.onload = () => {
      setTimeout(() => {
        document.querySelectorAll('.certs-content iframe').forEach(iframe => {
          // make sure iframe element width/height are set inline so CSS won't be beaten by other rules
          iframe.style.width = DESIRED_WIDTH + 'px';
          iframe.style.height = DESIRED_HEIGHT + 'px';
        });
      }, 350); // short delay to allow embed to create DOM
    };

    document.body.appendChild(s);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCredlyBadges);
  } else {
    initCredlyBadges();
  }
})();
});
