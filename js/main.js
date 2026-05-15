// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Cookie banner
const cookieBanner  = document.getElementById('cookie-banner');
const cookieAccept  = document.getElementById('cookie-accept');
const cookieDecline = document.getElementById('cookie-decline');

if (cookieBanner) {
  if (!localStorage.getItem('cookie-consent')) {
    cookieBanner.removeAttribute('hidden');
  }

  cookieAccept?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted');
    cookieBanner.setAttribute('hidden', '');
  });

  cookieDecline?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'declined');
    cookieBanner.setAttribute('hidden', '');
  });
}

// Mark current page in nav
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === window.location.pathname.split('/').pop() ||
      (window.location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')) {
    link.setAttribute('aria-current', 'page');
  }
});
