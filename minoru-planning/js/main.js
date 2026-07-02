// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  function setMenuState(open) {
    hamburger.classList.toggle('active', open);
    nav.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    hamburger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      setMenuState(!nav.classList.contains('open'));
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-list a').forEach(function(link) {
      link.addEventListener('click', function() {
        setMenuState(false);
      });
    });
  }

  // Header scroll effect
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.2)';
    } else {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    }
  });
});
